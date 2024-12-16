import React, { useState } from 'react'
import UserPresentation from '../Components/home/UserPresentation'
import Warning from '../Components/home/Warning'
import Navbar from '../Components/Shared/Navbar'
import SelectLenguage from '../Components/home/SelectLenguage'
import './css/General.css'

const MainPage: React.FC = () => {

  const [close, setClose] = useState<boolean>(false)

  return (
    <main>      
        <Navbar />
        <UserPresentation/>
        <Warning closeBool={close} setCloseBool={setClose}/>
    </main>
  )
}

export default MainPage