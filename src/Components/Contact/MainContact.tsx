import React from 'react';
import './css/MainContact.css'
import SendEmail from './SendEmail';
import CanAlso from './CanAlso';

const MainContact: React.FC = () => {
  return (
    <section className='MainContact'>
        <h1>Contact me!</h1>
        <div className='ContactInformationContainer'>
            <CanAlso/>
            <SendEmail/>
        </div>
    </section>
  );
}

export default MainContact;