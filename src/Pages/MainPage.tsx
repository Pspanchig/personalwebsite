import React, { useEffect, useRef, useState } from 'react'
import UserPresentation from '../Components/home/UserPresentation'
// import Warning from '../Components/home/Warning'
import Navbar from '../Components/Shared/Navbar'
import './css/General.css'
import './css/MainPage.css'

const MainPage: React.FC = () => {

  // const [close, setClose] = useState<boolean>(false)
  const [language] = useState<string>('En')
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const scrollToTop = () => {
        spanRef.current?.scrollIntoView({ behavior: 'instant' });
    };
    scrollToTop();
  }, []);

  return (
    <main className='mainPage'> 
        <span ref={spanRef}></span>                 
        <Navbar language={language}/>
        <UserPresentation language={language}/>
        {/* <Warning closeBool={close} setCloseBool={setClose}/> */}
    </main>
  )
}

export default MainPage