import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const renderEmailBody = (
  name: string,
  email: string,
  band: string,
  instagram: string,
  facebook: string,
  message: string
) => {
  return `<div>
      <h1 style="font-size: 32px">You have a new band submission!</h1>
      <p style="font-size: 24px">${name} has requested for their band ${band} to play at Flashback!</p>
      
      ${
        message &&
        `<p style="font-size: 18px"><strong>Message:</strong><span style="display: block">${message}</span></p>`
      }
      ${
        instagram &&
        `<p style="font-size: 18px"><strong>Instagram:</strong> ${instagram}</p>`
      }
      ${
        facebook &&
        `<p style="font-size: 18px"><strong>Facebook:</strong> ${facebook}</p>`
      }
      <button style="background-color: teal; color: white; padding: 10px 20px; border-radius: 5px; border: none; font-size: 18px">
        <a href="mailto:${email}?subject=New Band Submission for ${band}" style="color: white; text-decoration: none">Reply</a>
      </button>
    </div>`
}

export async function POST(request: Request) {
  const res = await request.json()
  const { name, email, band, instagram, facebook, message } = res
  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_GOOGLE_EMAIL,
        pass: process.env.GOOGLE_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: {
        name,
        address: email,
      }, // sender address
      to: "flashback.rocks.rh@gmail.com", // list of receivers
      subject: `New Band Submission for "${band}"`, // Subject line
      html: renderEmailBody(name, email, band, instagram, facebook, message), // html body
    })
    return NextResponse.json({ message: "Email sent!" }, { status: 200 })
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
