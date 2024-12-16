import React, { useEffect, useState } from 'react'
import '../Shared/css/General-Main.css'
import './css/UserPresentation.css'
import Education from './Education'
import AboutMe from './AboutMe'
import SocialNetworks from './SocialNetworks'

export interface language{
  language: string;  
}

const UserPresentation: React.FC<language> = ({language}) => {

  const [languageText, setLanguageText] = useState<string[]>([])

  function changeLanguage(): void{
    console.log(language);
    const spTitle: string = 'Ingeniero de Software'
    const enTitle: string = 'Software Engineer' 

    const english: string[] = []
    const spanish: string[] = []

    english.push(enTitle);
    spanish.push(spTitle);

    if(language === 'En') setLanguageText(english)
      else setLanguageText(spanish)
  }

  useEffect(() =>{
    changeLanguage()
  }, [language])

  return (
    <section>
      <div className='DivContainers'>
        <div className='DivsDividerContainers' id='one'>
          <div className='UpperDiv'>
            <h1>Pablo S. Panchig</h1>
            <h3>{languageText[0]} ☻</h3>
          </div>
          <div className='ButtonMobileContainer'>
            <button className='ButtonMobileMenu'><p>Education</p></button>
            <button className='ButtonMobileMenu'><p>About me</p></button>
          </div>
          <div className='LowerDiv'>
            <Education language={language}/>
          </div>
        </div>      
        <div className='DivsDividerContainers' id='two'>
          <div className='LowerDiv'>
          <AboutMe/>
          </div>
          <div className='UpperDiv'>
          <SocialNetworks/>
          </div>            
        </div>      
      </div>

    </section>
  )
}

export default UserPresentation