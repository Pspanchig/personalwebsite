import React, { useState } from 'react';
import Navbar from '../Components/Shared/Navbar';
import UpperSection from '../Components/Ucmo/UpperSection';
import LowerSection from '../Components/Ucmo/LowerSection';
import './css/Ucmo.css'

const Ucmo: React.FC = () => {
    const [language ,setLanguage] = useState<string>('En')
  
  return (
    <main className='Ucmo'>         
      <Navbar language={language} setLanguage={setLanguage}/>
      <UpperSection/>
      <LowerSection/>
    </main>
  );
}

export default Ucmo;