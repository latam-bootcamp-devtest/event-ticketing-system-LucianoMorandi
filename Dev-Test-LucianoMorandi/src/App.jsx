
import { useEffect, useState } from 'react'
import './App.css'

const API_URL_EVENTS = 'https://goldfish-app-fbulw.ondigitalocean.app/Event?applicationId=b775ecad-498e-4281-9885-a2539d308c86'

function App() {
  const [event, setEvent] = useState([])
  const [eventInfo, setEventInfo] = useState(null)

  useEffect(() => {
    fetch(API_URL_EVENTS)
     .then(res => res.json())
     .then(data => {
      setEvent(data)
     })

  }, [])

  const getInfoEvent = () => {
    setEventInfo(true)
  }

  const handleClick = () => {
    getInfoEvent()
  }     

  const backClick = () => {
    setEventInfo(null)
  }
  return (
    <>
      <h1>Dev Test</h1>
      <div >
      <ul className='event-container' >{event.map(item => (
        <li className='event' key={item.id}>Nombre del evento:{item.name}
         Fecha del evento: {item.date}
         Precio: {item.price}
         Available seats: 5
         <button onClick={handleClick}>Event details</button></li>
      ))}</ul>

      {eventInfo && 
        <div>
          <button onClick={backClick}>back</button>
          <h2>Event Details</h2>
          <p>Event: {event.name}</p>
          <p>Date: {event.date}</p>
          <p>Location: this is the event location</p>
          <strong>This is the event description</strong>
          <p>Ticket price: {event.price}</p>
          <p>Available seats: 5</p>
          <button>Book Ticket</button>
        </div>
      }

      </div>
    </>
  )
}

export default App
