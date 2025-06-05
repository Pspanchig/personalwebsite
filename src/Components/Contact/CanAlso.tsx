import React from 'react';
import './css/CanAlso.css'

const CanAlso: React.FC = () => {
  return (
    <section className='CanAlso'>
      <h2>You can also...</h2>
      <article className='CanAlsoContainer'>
        <div className='CanAlsoItem'>
            <img 
                src="https://www.svgrepo.com/show/439752/email-circle-fill.svg" 
                alt="email"/>
            <div className='TextCA'>                
                <p>You can also email me directly at</p>
                <h4>Pspanchig@outlook.com</h4>
            </div>
        </div>
        <div className='CanAlsoItem'>
            <img 
                src="https://www.svgrepo.com/show/440132/phone-vertical-circle-fill.svg" 
                alt="phone"/>
            <div className='TextCA'>                
                <p>You can also call me directly at </p>
                <h4>(+593) 0998587329</h4>
            </div>
        </div>
        <div className='CanAlsoItem'>
            <img 
                src="https://www.svgrepo.com/show/358411/whatsapp-alt.svg" 
                alt="whatsapp"/>
            <div className='TextCA'>                
                <p>You can also text me directly at </p>
                <a href="https://wa.me/593998587329" target="_blank">
                <h4>(+593) 0998587329</h4>
                </a>
            </div>
        </div>

      </article>
    </section>
  );
};

export default CanAlso;