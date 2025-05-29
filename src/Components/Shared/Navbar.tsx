import React, { useEffect, useRef, useState } from 'react'
import './css/Navbar.css'
// import spanish from './imgs/spanish-flag.svg'
// import english from './imgs/uk-flag.svg'
import optionsImg from './imgs/menuOptions.svg'
import closeIcon from './imgs/close.svg'
import { useNavigate } from 'react-router-dom'

interface languageChanger{
  language: string;
  // setLanguage: (value: string) => void;
}

const Navbar: React.FC<languageChanger> = ({language}) => {

  const navigate = useNavigate();
  const [languageText, setLanguageText] = useState<string[]>([])
  const [close, setClose] = useState<boolean>(true);
  const navbar = useRef<HTMLElement>(null);
  const navbarMobile = useRef<HTMLImageElement>(null);

  // function changeLanguage(value: boolean): void{
  //   if(value === true) setLanguage('En');
  //   else setLanguage('Sp')
  //   console.log(language)
  // }

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

  useEffect(()=>{
    changeTexts()
  }, [language])

  useEffect(() => {
    let prevScrollPos: number = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos: number = window.pageYOffset;
      if(window.innerWidth > 680){
        if (prevScrollPos > currentScrollPos) {
          navbar.current!.style.top = '0';
          navbar.current!.style.transition = 'ease-in-out 0.5s';
          if(currentScrollPos === 0){
            navbar.current!.style.backgroundColor = 'rgba(255, 255, 255, 0)'
            navbar.current!.style.color = 'black'
          }else{
            navbar.current!.style.color = 'white'
            navbar.current!.style.backgroundColor = '#343434'
          }
        } else {
          navbar.current!.style.top = '-100px';
        } 
      } else{
        if(window.innerWidth < 680 && close === true){
          if (prevScrollPos > currentScrollPos) {
            navbarMobile.current!.style.top = '20px';          
            if(currentScrollPos <= 0 ){         
              navbarMobile.current!.style.backgroundColor = 'rgba(255, 255, 255, 0)';
              navbarMobile.current!.style.top = '20px';          
            }else{
              navbarMobile.current!.style.backgroundColor = '#343434';

            }
          } else {
            navbarMobile.current!.style.top = '-100px';
  
          } 
        }
      }
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(()=>{
    const ShowAtBeginning = () =>{
      navbar.current!.style.top = '0';
      navbar.current!.style.backgroundColor = 'rgba(255, 255, 255, 0)'
      navbar.current!.style.color = 'black'
    }
    setTimeout(() => {      
      ShowAtBeginning();
    }, 100);
  },[])

  return (
    <nav className='Navbar' id='Navbar' ref={navbar}>
      <img className='NavbarIcon' id='openNav' onClick={showMobileNavbar} src={optionsImg} alt="menu bars" ref={navbarMobile}/>
      <img className='NavbarIcon' id='closeNav' onClick={showMobileNavbar} src={closeIcon} alt="menu bars" />
        <ul className='NavbarContainer' id='NavbarContainer'>
            <li className='NavbarItem' onClick={() => navigate('/')} id='firstMobileButton'>{languageText[0]}</li>
            <li className="NavbarItem" onClick={() => navigate('/biography')}>{languageText[1]}</li>
            <li className='NavbarItem' onClick={() => navigate('/')}>{languageText[2]}</li>
            <li className='NavbarItem' onClick={() => navigate('/contact')}>{languageText[3]}</li>
            {/* <li className="NavbarItem" onClick={() => navigate('/')} id="LengId">{languageText[4]}
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
            </li> */}
        </ul>
    </nav>
  )
}

export default Navbar