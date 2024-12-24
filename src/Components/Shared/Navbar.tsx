import React, { useEffect, useState } from 'react'
import './css/Navbar.css'
import spanish from './imgs/spanish-flag.svg'
import english from './imgs/uk-flag.svg'
import optionsImg from './imgs/menuOptions.svg'
import closeIcon from './imgs/close.svg'
import { useNavigate } from 'react-router-dom'

interface languageChanger{
  language: string;
  setLanguage: (value: string) => void;
}

const Navbar: React.FC<languageChanger> = ({language, setLanguage}) => {

  const navigate = useNavigate();
  const [languageText, setLanguageText] = useState<string[]>([])
  const [close, setClose] = useState<boolean>(true);
  // const [screenPixels] = useState<number>(window.innerWidth)

  function changeLanguage(value: boolean): void{
    if(value === true) setLanguage('En');
    else setLanguage('Sp')
    console.log(language)
  }

  function showMobileNavbar(): void{
    const openNav = document.getElementById('openNav') as HTMLImageElement;
    const closeNav = document.getElementById('closeNav') as HTMLImageElement;
    const navContainer = document.getElementById('Navbar') as HTMLElement;
    const innerNavbar = document.getElementById('NavbarContainer') as HTMLUListElement;
    const navButtons = document.querySelectorAll('.NavbarItem') as NodeListOf<HTMLLIElement>

    if(close === true){
      openNav.style.transform = 'rotate(180deg)'
      setTimeout(() => {
        openNav.style.opacity = '0'        
      }, 10);
      setTimeout(() => {
        openNav.style.display = 'none'      
      }, 150);
      setTimeout(() => {
        setTimeout
        closeNav.style.display = 'block'
        closeNav.style.opacity = '1'
        closeNav.style.transform = 'rotate(-90deg)'        
      }, 160);
    } else{
      closeNav.style.transform = 'rotate(90deg)'
      setTimeout(() => {
        closeNav.style.opacity = '0'        
      }, 10);
      setTimeout(() => {
        closeNav.style.display = 'none'      
      }, 150);
      setTimeout(() => {
        setTimeout
        openNav.style.display = 'block'
        openNav.style.opacity = '1'
        openNav.style.transform = 'rotate(-180deg)'        
      }, 160);
    }

    if(close === false){
      navContainer.style.height = '10%'
      navContainer.style.backgroundColor ='#33333300'
      innerNavbar.style.backgroundColor ='#33333300'
      innerNavbar.style.width = '0%'

      navButtons.forEach((button)=>{
        button.style.display = 'none';
        button.style.opacity = '0';
      })
    } else{
      navContainer.style.height = '100%'
      navContainer.style.backgroundColor ='#33333379'
      innerNavbar.style.backgroundColor ='#333333'
      innerNavbar.style.width = '60%'

      navButtons.forEach((button)=>{
        button.style.display = 'block'
        button.style.opacity = '1';
      })
    }

    setClose(!close)
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

  // function FixFullScreen(): void{
  //   const hideMobileButtons = document.querySelectorAll('.NavbarIcon') as NodeListOf<HTMLImageElement>;
    
  //   if(screenPixels > 680){
  //     hideMobileButtons.forEach((img) =>{
  //       img.style.display = 'none'
  //     })
  //   } else{
  //     hideMobileButtons.forEach((img) =>{
  //       img.style.display = 'block'
  //     })
  //   }
  // }

  useEffect(()=>{
    changeTexts()
    // FixFullScreen()
  }, [language])

  return (
    <nav className='Navbar' id='Navbar'>
      <img className='NavbarIcon' id='openNav' onClick={showMobileNavbar} src={optionsImg} alt="menu bars" />
      <img className='NavbarIcon' id='closeNav' onClick={showMobileNavbar} src={closeIcon} alt="menu bars" />
        <ul className='NavbarContainer' id='NavbarContainer'>
            <li className='NavbarItem' onClick={() => navigate('/')} id='firstMobileButton'>{languageText[0]}</li>
            <li className="NavbarItem" onClick={() => navigate('/biography')}>{languageText[1]}</li>
            <li className='NavbarItem' onClick={() => navigate('/')}>{languageText[2]}</li>
            <li className='NavbarItem' onClick={() => navigate('/')}>{languageText[3]}</li>
            <li className="NavbarItem" onClick={() => navigate('/')} id="LengId">{languageText[4]}
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