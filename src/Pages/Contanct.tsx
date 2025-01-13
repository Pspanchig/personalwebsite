import React, { useState } from 'react';
import Navbar from '../Components/Shared/Navbar';
import './css/Contact.css'
import MainContact from '../Components/Contact/MainContact';

const Contact: React.FC = () => {
        
    const [language ,setLanguage] = useState<string>('En')    

  return (
    <main className='Contact'>
        <Navbar language={language} setLanguage={setLanguage}/>
        <MainContact/>
    </main>
  );
}

export default Contact;