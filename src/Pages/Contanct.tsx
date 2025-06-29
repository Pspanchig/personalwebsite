import React, { useEffect, useRef } from 'react';
import Navbar from '../Components/Shared/Navbar';
import './css/Contact.css'
import MainContact from '../Components/Contact/MainContact';

const Contact: React.FC = () => {        
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const scrollToTop = () => {
        spanRef.current?.scrollIntoView({ behavior: 'instant' });
    };
    scrollToTop();
  }, []);
  

  return (
    <main className='Contact'>
        <span ref={spanRef}></span>            
        <Navbar language={'En'}/>
        <MainContact/>
    </main>
  );
}

export default Contact;