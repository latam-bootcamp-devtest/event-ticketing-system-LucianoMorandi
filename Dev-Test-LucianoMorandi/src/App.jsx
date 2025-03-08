
import { useEffect, useState } from 'react'
import './App.css'

const API_URL_EVENTS = 'https://goldfish-app-fbulw.ondigitalocean.app/Event?applicationId=b775ecad-498e-4281-9885-a2539d308c86'

function App() {
  const [events, setEvents] = useState([])
  const [selectedEvent, SetSelectedEvent] = useState()
  const [eventInfo, setEventInfo] = useState(null)
  const [buyButtonSate, setBuyButtonSate] = useState(null)
  const [buyForm, setBuyForm] = useState(null)

  useEffect(() => {
    fetch(API_URL_EVENTS)
      .then(res => res.json())
      .then(data => {
        if (!data) return alert('No Events Available :(')
        setEvents(data)
      })

  }, [])

  const getInfoEvent = () => {
    setEventInfo(true)
  }

  const eventClick = (id) => {
    getInfoEvent()
    setBuyButtonSate(true)

    fetch(`https://goldfish-app-fbulw.ondigitalocean.app/Event/${id}?applicationId=b775ecad-498e-4281-9885-a2539d308c86`)
      .then(res => res.json())
      .then(data => {
        SetSelectedEvent(data)
      })
  }

  const backClick = () => {
    setEventInfo(null)
    setBuyForm(null)
    SetSelectedEvent(null)
  }

  const buyButton = () => {
    setBuyButtonSate(null)
    setBuyForm(true)

  }

  const CompleteBuyButton = () => {
    setEventInfo(null)
    setBuyForm(null)
  }

  const cancelButton = () => {
    setBuyForm(null)
    setBuyButtonSate(true)
  }



  return (
    <>
      <h1>Upcoming Events</h1>
      <div >
        <ul className='event-card' >{events.map(item => (
          <li className='event' key={item.id}>Nombre del evento:{item.name}
            Fecha del evento: {item.date}
            Precio: {item.price}
            Available seats: 5
            <button onClick={() => {eventClick(item.id)} }>Event details</button></li>
        ))}
        </ul>

        <div className='event-details'>
          {eventInfo && { selectedEvent } &&
            <div>
              <button onClick={backClick}>back</button>
              <h2>Event Details</h2>
              <p>Event: {selectedEvent?.name}</p>
              <p>Date: {selectedEvent?.date}</p>
              <p>Location: this is the event location</p>
              <strong>This is the event description</strong>
              <p>Ticket price: {selectedEvent?.price}</p>
              <p>Available seats: 5</p>
              {buyButtonSate && <button onClick={buyButton}>Book Ticket</button>}
            </div>
          }
          {buyForm &&
            <form action="">
              <label for='name'>Customer Name</label>
              <input type="text" id='name' />
              <label for='quantity'>Tickets to Book</label>
              <input type="number" id='quantity' />
              <p>Total Price: $</p>
              <button onClick={CompleteBuyButton}>Book now</button>
              <button onClick={cancelButton}>Cancel</button>
            </form>
          }
        </div>
      </div>
    </>
  )
}

export default App
