import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../Components/Shared/Navbar';
import UpperSection from '../Components/Ucmo/UpperSection';
import LowerSection from '../Components/Ucmo/LowerSection';
import './css/Ucmo.css'

const Ucmo: React.FC = () => {
    const [language ,setLanguage] = useState<string>('En')
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const scrollToTop = () => {
          spanRef.current?.scrollIntoView({ behavior: 'instant' });
      };
      scrollToTop();
    }, []);

  return (
    <main className='Ucmo'>   
      <span ref={spanRef}></span>      
      <Navbar language={language} setLanguage={setLanguage}/>
      <UpperSection/>
      <LowerSection/>
    </main>
  );
}

export default Ucmo;