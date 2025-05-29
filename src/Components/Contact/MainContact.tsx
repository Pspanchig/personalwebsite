import React from 'react';
import './css/MainContact.css'
import SendEmail from './SendEmail';
import CanAlso from './CanAlso';

const MainContact: React.FC = () => {
  return (
    <>
    <section className='MainContact'>
        <h1>Contact me!</h1>
        <div className='ContactInformationContainer'>
            <div className='CanAlsolDesktop'>
              <CanAlso/>
            </div>
            <SendEmail/>
        </div>
    </section>
    <div className='CanAlsolMobile'>
      <CanAlso/>
    </div>
    </>
  );
}

export default MainContact;