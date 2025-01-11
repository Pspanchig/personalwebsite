import React, { useRef, useState } from 'react';
import './css/SnowGenInfo.css'; 
import snowLogo from'../home/imgs/SnowLogo.png';
import arrow from '../home/imgs/arrowDown.svg'

const SnowGenInfo: React.FC = () => {

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
    <article className="SnowGenInfo">
      <img src={snowLogo} id='scimg1' alt="snow logo" />
      <h1>Snow College</h1>    

      <section>
        <h3>Attendece time</h3>
        <p>August 2022 - December 2023</p>      
        <h3>Degree Earned</h3>
        <p>Associates of Science</p>
        <h3>Location</h3>
        <p id='LocationSnow'>150 College Av, Ephraim, Utah</p>
        <button id='ShowMoreLocation' onClick={ShowMore}>
          <p>{text}</p>          
          <img 
            src={arrow} 
            alt="arrow" 
            ref={imgArrow}
          />
        </button>
        <span className='MapsInformation' ref={span}>
          <p id='LocationSnow' ref={spanP}>150 College Av, Ephraim, Utah</p>
            <iframe ref={spanIframe}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964.0071354274342!2d-111.58130285402119!3d39.36055359497651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874c718e6e1a2073%3A0x57eb0289350243f!2sSnow%20College!5e1!3m2!1sen!2sus!4v1735427989337!5m2!1sen!2sus"
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964.0071354274342!2d-111.58130285402119!3d39.36055359497651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874c718e6e1a2073%3A0x57eb0289350243f!2sSnow%20College!5e1!3m2!1sen!2sus!4v1735427989337!5m2!1sen!2sus"
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

export default SnowGenInfo;

