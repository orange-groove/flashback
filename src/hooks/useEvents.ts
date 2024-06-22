import { useEffect, useState } from "react"
import { formatRFC3339 } from "date-fns"

function useEvents() {
  const [events, setEvents] = useState<FlashbackEvent[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const calendarID = process.env.NEXT_PUBLIC_GOOGLE_EMAIL
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY
  const timeMin = formatRFC3339(new Date())

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("gapi-script").then(({ gapi }) => {
        gapi.load("client", async () => {
          setIsLoading(true)
          try {
            await gapi.client.init({ apiKey })
            const response = await gapi.client.request({
              path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events?timeMin=${timeMin}&orderBy=startTime&singleEvents=true`,
            })

            setEvents(
              response.result.items.filter(
                (event: FlashbackEvent) => !!event.summary
              )
            )
            setIsLoading(false)
          } catch (err) {
            setIsLoading(false)
            console.error("Error fetching events:", err)
          }
        })
      })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return {
    data: events,
    isLoading,
  }
}

export default useEvents
