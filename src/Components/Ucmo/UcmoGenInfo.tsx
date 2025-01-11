import React, { useRef, useState } from 'react';
import './css/UcmoGenInfo.css'
import ucmoLogo from'../home/imgs/ucmoLogo.png';
import arrow from '../home/imgs/arrowDown.svg'

const UcmoGenInfo: React.FC = () => {

  const span = useRef<HTMLSpanElement>(null);
  const spanP = useRef<HTMLParagraphElement>(null);
  const spanIframe = useRef<HTMLIFrameElement>(null);
  const imgArrow = useRef<HTMLImageElement>(null);
  var [text, setText] = useState<string>('Show more');
  var [change, setChange] = useState<boolean>(false)

  function ShowMore(): void{
    if(change === false){
      if(span.current && spanP.current && spanIframe.current){
        span.current.style.display = 'flex'
        spanP.current.style.display = 'block'
        spanIframe.current.style.display = 'block' 
        imgArrow.current!.style.transform = 'rotate(180deg)'     
        imgArrow.current!.style.transition = '0.5s'     
        setTimeout(() => {          
          span.current!.style.height = '50%'          
        }, 100);
        setText('Show less');
      }
    } else{
      if(span.current && spanP.current && spanIframe.current){
        span.current!.style.height = '0%'     
        imgArrow.current!.style.transform = 'rotate(0deg)'          
        setTimeout(() => {          
          span.current!.style.display = 'none'
          spanP.current!.style.display = 'none'
          spanIframe.current!.style.display = 'none'              
        }, 100);
        setText('Show more');
      }
    }
    setChange(!change);
  }

  return (
    <article className="UcmoGenInfo">
      <img src={ucmoLogo} id='ucimg1' alt="ucmo logo" />
      <h1>University of Central Missouri</h1>    

      <section>
        <h3>Attendece time</h3>
        <p>January 2024 - May 2025</p>      
        <h3>Degree Earned</h3>
        <p>Bachelor in Computer Software Engineering</p>
        <h3>Location</h3>
        <p id='LocationUcmo'>116 W South St, Warrensburg, MO</p>
        <button id='ShowMoreLocation' onClick={ShowMore}>
          <p>{text}</p>          
          <img 
            src={arrow} 
            alt="arrow" 
            ref={imgArrow}
          />
        </button>
        <span className='MapsInformation' ref={span}>
          <p id='LocationUcmo' ref={spanP}>116 W South St, Warrensburg, MO</p>
            <iframe ref={spanIframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.4897581359037!2d-93.74093295384685!3d38.75836899261187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c3fd542d0fe265%3A0x614854617b5aa280!2sUniversity%20of%20Central%20Missouri!5e1!3m2!1sen!2sus!4v1736631952749!5m2!1sen!2sus"
              width="350"
              height="205"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />            
        </span>
      </section>
      
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3041.4897581359037!2d-93.74093295384685!3d38.75836899261187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c3fd542d0fe265%3A0x614854617b5aa280!2sUniversity%20of%20Central%20Missouri!5e1!3m2!1sen!2sus!4v1736631952749!5m2!1sen!2sus"
          width="350"
          height="205"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      
</article>

  );
}

export default UcmoGenInfo;

