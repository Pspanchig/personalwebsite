import React, { useState } from 'react';
import Navbar from '../Components/Shared/Navbar';
import './css/Biography.css'
import '../Components/Biography/GeneralDescription'
import GeneralDescription from '../Components/Biography/GeneralDescription';
// import BiographyText from '../Components/Biography/BiographyText';

const Biography: React.FC = () => {
    const [language ,setLanguage] = useState<string>('En')
  
    return (
    <main className='Biography'>      
        <Navbar language={language} setLanguage={setLanguage}/>
        <GeneralDescription/>
        {/* <BiographyText/> */}
    </main>
  );
}

export default Biography;