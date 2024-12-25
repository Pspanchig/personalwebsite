import React from 'react'
// import '../Shared/css/General-Main.css'
import './css/DisplayInfo.css'
import { useNavigate } from 'react-router-dom'

const DisplayInfo: React.FC = () => {
    const navigate = useNavigate();
  return (
    <section className='InformationContainer'>
        <h1>We could'nt find the requested page</h1>
        <p>Please check if you spell the url correctly, and try again!</p>
        <button onClick={() => navigate('/')}>Go back to home</button>
    </section>
  )
}

export default DisplayInfo