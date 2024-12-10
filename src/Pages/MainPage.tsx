import React, { useState } from 'react'
import UserPresentation from '../Components/home/UserPresentation'
import Warning from '../Components/home/Warning'
import Navbar from '../Components/Shared/Navbar'
import './css/General.css'

const MainPage: React.FC = () => {

  const [close, setClose] = useState<boolean>(false)

  return (
    <main>      
        <Navbar/>
        <Warning closeBool={close} setCloseBool={setClose}/>
        <UserPresentation/>
    </main>
  )
}

export default MainPage