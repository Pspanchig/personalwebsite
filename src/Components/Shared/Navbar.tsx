import React, { useEffect, useState } from 'react'
import './css/Navbar.css'
import spanish from './imgs/spanish-flag.svg'
import english from './imgs/uk-flag.svg'

interface languageChanger{
  language: string;
  setLanguage: (value: string) => void;
}

const Navbar: React.FC<languageChanger> = ({language, setLanguage}) => {

  const [languageText, setLanguageText] = useState<string[]>([])

  function changeLanguage(value: boolean): void{
    if(value === true) setLanguage('En');
    else setLanguage('Sp')
    console.log(language)
  }

  function changeTexts(): void{
    
    //Spanish
    const spanish: string[] = []

    const spHome: string = 'Inicio'
    const spBiography: string = 'Biografia'
    const spProjects: string = 'Proyectos'
    const spContact: string = 'Contacto'
    const spLanguage: string = 'Idioma'
    const spSpanish: string = 'Español'
    const spEnglish: string = 'Ingles'

    //English
    const english: string[] = []

    const enHome: string = 'Home'
    const enBiography: string = 'Biography'
    const enProjects: string = 'Projects'
    const enContact: string = 'Contact'
    const enLanguage: string = 'Languages'
    const enSpanish: string = 'Spanish'
    const enEnglish: string = 'English'

    english.push(enHome);
    english.push(enBiography);
    english.push(enProjects);
    english.push(enContact);
    english.push(enLanguage);
    english.push(enSpanish);
    english.push(enEnglish);

    spanish.push(spHome);
    spanish.push(spBiography);
    spanish.push(spProjects);
    spanish.push(spContact);
    spanish.push(spLanguage);
    spanish.push(spSpanish);
    spanish.push(spEnglish);

    if(language === 'En') setLanguageText(english)
      else setLanguageText(spanish)
  }

  useEffect(()=>{
    changeTexts()
  }, [language])

  return (
    <nav className='Navbar' id='Navbar'>
        <ul className='NavbarContainer'>
            <li className='NavbarItem'>{languageText[0]}</li>
            <li className='NavbarItem'>{languageText[1]}</li>
            <li className='NavbarItem'>{languageText[2]}</li>
            <li className='NavbarItem'>{languageText[3]}</li>
            <li className="NavbarItem" id="LengId">{languageText[4]}
              <span className="NavbarDropdown">
                <div className="lenguage" onClick={() => changeLanguage(false)}>
                  <p>{languageText[5]}</p>
                  <img src={spanish} alt="Spanish flag" />
                </div>
                <div className="lenguage" onClick={() => changeLanguage(true)}>
                  <p>{languageText[6]}</p>
                  <img src={english} alt="English flag" />
                </div>
              </span>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar