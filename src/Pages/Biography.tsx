import React, { useEffect, useRef, useState } from 'react';
import Navbar from '../Components/Shared/Navbar';
import './css/Biography.css'
import '../Components/Biography/GeneralDescription'
import GeneralDescription from '../Components/Biography/GeneralDescription';
import BiographyText from '../Components/Biography/BiographyText';
import Countries from '../Components/Biography/Countries';

const Biography: React.FC = () => {
    const [language ,setLanguage] = useState<string>('En')
    const spanRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const scrollToTop = () => {
          spanRef.current?.scrollIntoView({ behavior: 'instant' });
      };
      scrollToTop();
    }, []);

    return (
    <main className='Biography'>
        <span ref={spanRef}></span>            
        <Navbar language={language} setLanguage={setLanguage}/>
        <GeneralDescription/>
        <BiographyText/>
        <Countries/>
    </main>
  );
}

export default Biography;