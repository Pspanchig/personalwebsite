import React, { useState } from 'react';
import Navbar from '../Components/Shared/Navbar';
import UpperSection from '../Components/Snow/UpperSection';
import LowerSection from '../Components/Snow/LowerSection';

import './css/Snow.css';

const Snow: React.FC = () => {
    const [language ,setLanguage] = useState<string>('En')
    
  return (    
    <main className='Snow'>
        <Navbar language={language} setLanguage={setLanguage}/>
         <UpperSection />
         <LowerSection />         
    </main>
  );
}

export default Snow;