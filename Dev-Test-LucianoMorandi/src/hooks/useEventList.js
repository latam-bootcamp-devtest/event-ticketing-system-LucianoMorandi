import { useEffect, useState } from "react"

const API_URL_EVENTS = 'https://goldfish-app-fbulw.ondigitalocean.app/Event?applicationId=b775ecad-498e-4281-9885-a2539d308c86'

export function useEventList () {
  const [events, setEvents] = useState([])
  
  useEffect(() => {
    fetch(API_URL_EVENTS)
      .then(res => res.json())
      .then(data => {
        if (!data) return alert('No Events Available :(')
        setEvents(data)
      })
  
  }, [])
  return {events}
}