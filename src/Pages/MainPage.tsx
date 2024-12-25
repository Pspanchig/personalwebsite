import React, { useState } from 'react'
import UserPresentation from '../Components/home/UserPresentation'
import Warning from '../Components/home/Warning'
import Navbar from '../Components/Shared/Navbar'
import './css/General.css'
import './css/MainPage.css'

const MainPage: React.FC = () => {

  const [close, setClose] = useState<boolean>(false)
  const [language ,setLanguage] = useState<string>('En')

  return (
    <main className='mainPage'>      
        <Navbar language={language} setLanguage={setLanguage}/>
        <UserPresentation language={language}/>
        <Warning closeBool={close} setCloseBool={setClose}/>
    </main>
  )
}

export default MainPage