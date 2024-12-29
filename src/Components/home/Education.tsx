import { useEffect, useState } from 'react';
import './css/Education.css'
import SnowLogo from './imgs/SnowLogo.png'
import UcmoLogo from './imgs/ucmoLogo.png'
import arrow from './imgs/arrowRight.svg'

import { language } from './UserPresentation';
import { useNavigate } from 'react-router-dom';

const Education: React.FC<language> = ({language}) => {

  const [languageText, setLanguageText] = useState<string[]>([])
  const navigate = useNavigate();

  function moveScrollBar(direction: boolean): void{ 
      const scrollbar = document.getElementById('scrollbarEd') as HTMLDivElement;
      if(direction === true){
        scrollbar.scrollTo({ top: 0, behavior: 'smooth' });;
      } else{
        scrollbar.scrollTo({ top: scrollbar.scrollHeight, behavior: 'smooth' });;
        
      }
  }

  function ChangeEducationInformation(current: string, moveTo: string, direction: number): void{
    const containerSnow = document.querySelectorAll(`#${current}`) as NodeListOf<HTMLDivElement>;    
    const containerUCM = document.querySelectorAll(`#${moveTo}`) as NodeListOf<HTMLDivElement>;

    containerSnow.forEach((key) =>{      
      key.style.transform = `translateX(${direction}vw)` 
      setTimeout(() => {
        key.style.display = 'none';
      }, 100);
    })
    containerUCM.forEach((key) =>{
      setTimeout(() => {
        key.style.transform = `translateX(${ - (direction)}vw)`        
        key.style.display = 'flex';
        setTimeout(() => {        
          key.style.transform = 'translateX(1vw)'        
        }, 200);        
      }, 150);
    })      
        

  }

  function changeLanguage(): void{
    
    //Spanish
    const spanish: string[] = []

    const spTitle: string = 'Educacion'
    const spEnrolled: string = 'Inscrito como Ingeniero de Software'
    const spClickHere: string = 'Cliquee aqui para mas informacion'

    //English
    const english: string[] = []

    const enTitle: string = 'Education' 
    const enEnrolled: string = 'Enrolled as Software engineer'
    const enClickHere: string = 'click here for more information'

    english.push(enTitle);
    english.push(enEnrolled);
    english.push(enClickHere);

    spanish.push(spTitle);
    spanish.push(spEnrolled);
    spanish.push(spClickHere);

    if(language === 'En') setLanguageText(english)
      else setLanguageText(spanish)
  }

    
  useEffect(() =>{
    changeLanguage()
  }, [language])
  

  return (
    <article className='Education'>
        <div className='EducationTitle'>
            {languageText[0]}
        </div>
        <div className='EducationInformationContainer' id='scrollbarEd'>
          <div className='EducationInformation' onMouseOver={()=> moveScrollBar(true)} id='SnowEd'>
            <div className='EducationItem'>
              <button id='MoreInfEDSn' onClick={() => navigate('/education/snow')}>More information</button>           
              <button id='NextImgEDSn' onClick={() => ChangeEducationInformation('SnowEd', 'UcmoEd', -100)}>Next <img src={arrow} alt="arrow" /></button>
              <div className='Text'>
                <h2>Snow College</h2>
                <p>Ephraim, Utah</p>
                <p>{languageText[1]}</p>
                <p>Associates AS</p>
              </div>
              <img src={SnowLogo} alt="Snow College Img" />   
            </div>
            <u  onClick={() => navigate('/education/snow')}><span>{languageText[2]}</span></u>
          </div>        

          <div className='EducationInformation'onMouseOver={()=> moveScrollBar(false)} id='UcmoEd'>
            <div className='EducationItem'>
            <button id='MoreInfEDSn' onClick={() => navigate('/education/ucmo')}>More information</button>           
            <button id='NextImgEDSn' onClick={() => ChangeEducationInformation('UcmoEd', 'SnowEd', 100)}>Previous <img id='GoToUCMImg' src={arrow} alt="arrow" /></button>
              <div className='Text'>
                <h2>University of Central Missouri</h2>
                <p>Warrensburg, Missouri</p>
                <p>{languageText[1]}</p>
                <p>Bachelor B.S</p>
              </div>
              <img src={UcmoLogo} alt="UCMO Img" />
            </div>
            <u  onClick={() => navigate('/education/ucmo')}><span>{languageText[2]}</span></u>

          </div>
        </div>
    </article>
  );
}

export default Education;