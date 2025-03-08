
import { useEffect, useState } from 'react'
import './App.css'

const API_URL_EVENTS = 'https://goldfish-app-fbulw.ondigitalocean.app/Event?applicationId=b775ecad-498e-4281-9885-a2539d308c86'

function App() {
  const [event, setEvent] = useState([])

  useEffect(() => {
    fetch(API_URL_EVENTS)
     .then(res => res.json())
     .then(data => {
      setEvent(data)
     })

     
  }, [])
  return (
    <>
      <h1>Dev Test</h1>
      <div className='event-container'>
      <ul>{event.map(item => (
        <li className='event' key={item.id}>Nombre del evento:{item.name}
         Fecha del evento: {item.date}
         Precio: {item.price}</li>
      ))}</ul>

      </div>
    </>
  )
}

export default App
