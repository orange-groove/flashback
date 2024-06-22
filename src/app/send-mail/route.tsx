import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

const renderEmailBody = (name: string, email: string, message: string) => {
  return `<div>
      <h1 style="font-size: 32px">${name} sent you a message!</h1>
      <p style="font-size: 24px">${message}</p>
      <button style="background-color: teal; color: white; padding: 10px 20px; border-radius: 5px; border: none; font-size: 18px">
        <a href="mailto:${email}?subject=Flackback Customer Support" style="color: white; text-decoration: none">Reply</a>
      </button>
    </div>`
}

export async function POST(request: Request) {
  const res = await request.json()
  const { name, email, message } = res

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
      subject: `Flashback Customer - "${name}"`, // Subject line
      html: renderEmailBody(name, email, message), // html body
    })

    return NextResponse.json({ message: "Email sent!" }, { status: 200 })
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
