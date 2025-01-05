import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../Components/Shared/Navbar';
import UpperSection from '../Components/Snow/UpperSection';
import LowerSection from '../Components/Snow/LowerSection';

import './css/Snow.css';

const Snow: React.FC = () => {
    const [language ,setLanguage] = useState<string>('En')
    const snowRef = useRef<HTMLElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const scrollToTop = () => {
          spanRef.current?.scrollIntoView({ behavior: 'smooth' });
          console.log('Scrolling to span');
      };
  
      // Use setTimeout to ensure content has rendered
      // const timer = setTimeout(scrollToTop, 100);
      // return () => clearTimeout(timer);
      scrollToTop();
    }, []);

  return (    
    <main className='Snow' ref={snowRef}>
      <span ref={spanRef}></span>
        <Navbar language={language} setLanguage={setLanguage}/>
         <UpperSection />
         <LowerSection />         
    </main>
  );
}

export default Snow;