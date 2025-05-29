import React, { useState } from 'react';
import './css/SendEmail.css'
import emailjs from '@emailjs/browser';
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


const SendEmail: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');


    const validate = (): boolean => {
        if (!name.trim()) {
        alert('Please provide your name');
        return false;
        }
        if (!email.trim() || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)) {
        alert('Please provide a valid email address');
        return false;
        }
        if (!subject.trim()) {
        alert('Please provide a subject');
        return false;
        }
        if (!message.trim()) {
        alert('Please enter your message');
        return false;
        }
        return true;
    };

  const handleSendEmail = async (): Promise<void> => {
    if (!validate()) return;
    try {
        await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  name,     
          from_email: email,    
          from_subject: subject,              
          from_message: message,              
        },
        PUBLIC_KEY
      );
    } catch (err: any) {
      console.error('EmailJS error:', err);
      alert('There was a problem sending your message, please try again.');
    }
      setName(''); 
      setEmail(''); 
      setSubject(''); 
      setMessage('');
  };


  return (
    <section className='SendEmail'>
      <h3 className='EmailMe'>Email me!</h3>
      <div className='EmailInputsContainer'>
        <label htmlFor="EmailInput" className='EmailInput'>
            <p>Your Email</p>
            <input 
                type="text" 
                placeholder='Type your email here...'
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
        </label>
        <label htmlFor="EmailInput" className='EmailInput'>
            <p>Your Name</p>
            <input 
                type="text" 
                placeholder='Type your name here...'
                value={name}
                onChange={(e) => setName(e.target.value)}/>
        </label>
        <label htmlFor="EmailInput" className='EmailInput'>
            <p>Subject</p>
            <input 
                type="text" 
                placeholder='Type your subject here...'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}/>
        </label>
        <label htmlFor="EmailInput" className='EmailInput EmailMessage'>
            <p>Message</p>
            <textarea 
                placeholder='Type your message here' 
                onChange={(e) => setMessage(e.target.value)}
                value={message}>
            </textarea>
        </label>
      </div>
      <h3 className='SendEm' onClick={handleSendEmail}>Send</h3>
    </section>
  );
};

export default SendEmail;