import React, { useEffect, useRef, useState } from 'react';
import './css/SkillsSnow.css';
import arrow from './imgs/left-arrow-svgrepo-com.svg'

const SkillsSnow: React.FC = () => {

  const skillsMobileContainer = useRef<HTMLDivElement>(null)
  const [moveScrollMobile, setMoveScrollMobile] = useState<number>(0);

  let listOfSkillsItem: NodeListOf<HTMLDivElement>;
  let listOfSkillsContainer: NodeListOf<HTMLDivElement>;
  let listOfImgsContainer: NodeListOf<HTMLImageElement>;
  let listOfMoreInfo: NodeListOf<HTMLDivElement>;
  
  useEffect(() => {
    listOfSkillsItem = document.querySelectorAll('.SkillItem');
    listOfSkillsContainer = document.querySelectorAll('.SkillItemContainer');
    listOfImgsContainer = document.querySelectorAll('#SkillImg');
    listOfMoreInfo = document.querySelectorAll('.SkillMoreInfo');
  }, []);
  
  //Get current size of the screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);    
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  function smallRotation(index: number): void{  
    if(window.innerWidth > 680)    {
      listOfSkillsItem[index].style.transform = 'rotate(5deg)';
      setTimeout(() => {      
        listOfSkillsItem[index].style.transform = 'rotate(-10deg)';
      }, 150);
      setTimeout(() => {      
        listOfSkillsItem[index].style.transform = 'rotate(0deg)';
      }, 250);
    }
    }

  function ReadMore(index: number): void{
    if(window.innerWidth > 680){
      listOfSkillsContainer[index].style.width = '55%';
      listOfSkillsItem[index].style.minWidth = '30vw';
      listOfSkillsContainer[index].style.borderTopRightRadius = '0em';
      listOfSkillsContainer[index].style.borderBottomRightRadius = '0em';
      listOfMoreInfo[index].style.display = 'flex';
      listOfImgsContainer[index].style.borderTopRightRadius = '0em';
      setTimeout(() => {
        listOfMoreInfo[index].style.width = '45%';      
      }, 100);      
      ScrollToElement(index);
      
    }
  }

  function closeMoreInfo(index: number): void{  
    
    if(window.innerWidth > 680){
      listOfSkillsContainer[index].style.width = '100%';
      listOfSkillsItem[index].style.minWidth = '16vw';    
      listOfMoreInfo[index].style.width = '0%';
  
      setTimeout(() => {
        listOfImgsContainer[index].style.borderTopRightRadius = '2.5em';
      }, 200);
      
      listOfSkillsContainer[index].style.borderTopRightRadius = '2.5em';
      listOfSkillsContainer[index].style.borderBottomRightRadius = '2.5em';     
      setTimeout(() => {      
        listOfMoreInfo[index].style.display = 'none';      
      }, 200);       
    }
  }

  function ScrollToElement(index: number): void{
    if(window.innerWidth > 680){
      const offsetItem: number = listOfSkillsItem[index].offsetLeft - 600;
      skillsMobileContainer.current?.scrollTo({left: offsetItem, behavior: 'smooth'})
      console.log('Working')
    }
  }

  function MoveCoursesMobile(direction: number): void{
    if(window.innerWidth < 680 && skillsMobileContainer.current){

      skillsMobileContainer.current?.scrollTo({left: moveScrollMobile + direction, behavior: 'smooth'})
      console.log(moveScrollMobile)
      if(moveScrollMobile >= skillsMobileContainer.current?.scrollWidth - 401 || moveScrollMobile < 0){
            setMoveScrollMobile(0)
        } else{
          setMoveScrollMobile(moveScrollMobile + direction); 
        }
    }
  } 

  function ReadMoreMobile(index: number): void{
    listOfSkillsItem[index].style.transform = 'rotate(-360deg)';    
    listOfSkillsContainer[index].style.display = 'none';
    listOfMoreInfo[index].style.display = 'flex';
    listOfMoreInfo[index].style.width = '100%';
    listOfMoreInfo[index].style.borderTopLeftRadius = '2.5em';
    listOfMoreInfo[index].style.borderBottomLeftRadius = '2.5em';
  }
  function ReadLessMobile(index: number): void{
    listOfSkillsItem[index].style.transform = 'rotate(0deg)';    
    listOfSkillsContainer[index].style.display = 'flex';
    listOfMoreInfo[index].style.display = 'none';
    listOfMoreInfo[index].style.width = '0%';
    listOfMoreInfo[index].style.borderTopLeftRadius = '0em';
    listOfMoreInfo[index].style.borderBottomLeftRadius = '0em';
  }

  return (
    <section className='SkillsSnow' >
      <div className='SCIS' id='SCIS'  ref={skillsMobileContainer}>
      <div className='SkillItem' onMouseLeave={() => closeMoreInfo(0)} onMouseEnter={() => {smallRotation(0); ScrollToElement(0)}}>
        <div className='SkillItemContainer'>
          <img id='SkillImg' src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Skill Img" />
          <div className='SkillItemDescription'>
            <p>Computer Science</p>
            <h1>Fundamentals Of Programing</h1>
            <div className='SkillItemMore' onClick={() => ReadMore(0)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read more</p>
            </div>
            <div className='SkillItemMoreMobile' onClick={() => ReadMoreMobile(0)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read more</p>
            </div>
          </div>
        </div>
        <div className='SkillMoreInfo'>
          <p>Computer Science</p>
          <h1>Fundamentals Of Programing</h1>
          <p>Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer languages, such as SQL, Java, Python, and C++.</p>
          <div className='SkillItemMoreMobile' onClick={() => ReadLessMobile(0)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read less</p>
          </div>
        </div>
        </div>

            {/* Skill Item 1 */}
      <div className='SkillItem' onMouseLeave={() => closeMoreInfo(1)} onMouseEnter={() => {smallRotation(1); ScrollToElement(1)}}>
        <div className='SkillItemContainer'>
          <img 
            id='SkillImg' 
            src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Skill Img" 
          />
          <div className='SkillItemDescription'>
            <p>Computer Science</p>
            <h1>Object-oriented Programming</h1>
            <div className='SkillItemMore' onClick={() => ReadMore(1)}>
              <img 
                src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" 
                alt="atribute icon" 
              />
              <p>Read more</p>
            </div>
            <div className='SkillItemMoreMobile' onClick={() => ReadMoreMobile(1)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read more</p>
            </div>

          </div>
        </div>
        <div className='SkillMoreInfo'>
          <p>Computer Science</p>
          <h1>Object-oriented Programming</h1>
          <p>
            Object-oriented programming (OOP) is a programming paradigm based on the 
            concept of “objects”, which can contain data and code. OOP helps organize 
            software design around data, or objects, rather than functions and logic.
          </p>
          <div className='SkillItemMoreMobile' onClick={() => ReadLessMobile(1)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read less</p>
          </div>
        </div>
      </div>


      {/* Skill Item 2 */}
      <div className='SkillItem' onMouseLeave={() => closeMoreInfo(2)}  onMouseEnter={() => {smallRotation(2); ScrollToElement(2)}}>
        <div className='SkillItemContainer'>
          <img 
            id='SkillImg' 
            src="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Skill Img" 
          />
          <div className='SkillItemDescription'>
            <p>Computer Science</p>
            <h1>Introduction to Web Development</h1>
            <div className='SkillItemMore' onClick={() => ReadMore(2)}>
              <img 
                src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" 
                alt="atribute icon" 
              />
              <p>Read more</p>
            </div>
            <div className='SkillItemMoreMobile' onClick={() => ReadMoreMobile(2)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read more</p>
            </div>
          </div>
        </div>
        <div className='SkillMoreInfo'>
          <p>Computer Science</p>
          <h1>Introduction to Web Development</h1>
          <p>
            Web development involves creating and maintaining websites. It includes 
            aspects such as web design, web publishing, web programming, and 
            database management.
          </p>
          <div className='SkillItemMoreMobile' onClick={() => ReadLessMobile(2)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read less</p>
          </div>
        </div>
      </div>


      {/* Skill Item 3 */}
      <div className='SkillItem' onMouseLeave={() => closeMoreInfo(3)} onMouseEnter={() => {smallRotation(3); ScrollToElement(3)}}>
        <div className='SkillItemContainer'>
          <img 
            id='SkillImg' 
            src="https://images.pexels.com/photos/17483848/pexels-photo-17483848/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-a-look-inside-how-ai-microchips-are-designed-it-was-created-by-champ-panupong-techawongthawon-as-part-of-the-v.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Skill Img" 
          />
          <div className='SkillItemDescription'>
            <p>Computer Science</p>
            <h1>Data Structures and Algorithms</h1>
            <div className='SkillItemMore' onClick={() => ReadMore(3)}>
              <img 
                src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" 
                alt="atribute icon" 
              />
              <p>Read more</p>
            </div>
            <div className='SkillItemMoreMobile' onClick={() => ReadMoreMobile(3)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read more</p>
            </div>

          </div>
        </div>
        <div className='SkillMoreInfo'>
          <p>Computer Science</p>
          <h1>Data Structures and Algorithms</h1>
          <p>
            Data structures organize data so it can be accessed and worked with 
            efficiently. Algorithms are sets of instructions that solve specific 
            problems. Mastering both is essential for efficient software development.
          </p>
          <div className='SkillItemMoreMobile' onClick={() => ReadLessMobile(3)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read less</p>
          </div>
        </div>
      </div>


      {/* Skill Item 4 */}
      <div className='SkillItem' onMouseLeave={() => closeMoreInfo(4)} onMouseEnter={() => {smallRotation(4); ScrollToElement(4)}}>
        <div className='SkillItemContainer'>
          <img 
            id='SkillImg' 
            src="https://images.pexels.com/photos/6636458/pexels-photo-6636458.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Skill Img" 
          />
          <div className='SkillItemDescription'>
            <p>Computer Science</p>
            <h1>Digital Circuits</h1>
            <div className='SkillItemMore' onClick={() => ReadMore(4)}>
              <img 
                src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" 
                alt="atribute icon" 
              />
              <p>Read more</p>
            </div>
            <div className='SkillItemMoreMobile' onClick={() => ReadMoreMobile(4)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read more</p>
            </div>

          </div>
        </div>
        <div className='SkillMoreInfo'>
          <p>Computer Science</p>
          <h1>Digital Circuits</h1>
          <p>
            Digital circuits use discrete signal levels to represent information for 
            processing and communication in computers and other digital devices. 
            They form the backbone of modern computing hardware.
          </p>
          <div className='SkillItemMoreMobile' onClick={() => ReadLessMobile(4)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read less</p>
          </div>
        </div>
      </div>


      {/* Skill Item 5 */}
      <div className='SkillItem' onMouseLeave={() => closeMoreInfo(5)} onMouseEnter={() => {smallRotation(5); ScrollToElement(5)}}>
        <div className='SkillItemContainer'>
          <img 
            id='SkillImg' 
            src="https://images.pexels.com/photos/5582591/pexels-photo-5582591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Skill Img" 
          />
          <div className='SkillItemDescription'>
            <p>Computer Science</p>
            <h1>Computer Organization and Architecture</h1>
            <div className='SkillItemMore' onClick={() => ReadMore(5)}>
              <img 
                src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" 
                alt="atribute icon" 
              />
              <p>Read more</p>
            </div>
            <div className='SkillItemMoreMobile' onClick={() => ReadMoreMobile(5)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read more</p>
            </div>

          </div>
        </div>
        <div className='SkillMoreInfo'>
          <p>Computer Science</p>
          <h1>Computer Organization and Architecture</h1>
          <p>
            Computer organization deals with hardware components that connect to 
            form a computer, while architecture involves the design of the system 
            and how hardware and software interact to achieve performance goals.
          </p>
          <div className='SkillItemMoreMobile' onClick={() => ReadLessMobile(5)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read less</p>
          </div>
        </div>
      </div>


      {/* Skill Item 6 */}
      <div className='SkillItem' onMouseLeave={() => closeMoreInfo(6)} onMouseEnter={() => {smallRotation(6); ScrollToElement(6)}}>
        <div className='SkillItemContainer'>
          <img 
            id='SkillImg' 
            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Skill Img" 
          />
          <div className='SkillItemDescription'>
            <p>Software Engineering</p>
            <h1>Back-end Web Development</h1>
            <div className='SkillItemMore' onClick={() => ReadMore(6)}>
              <img 
                src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" 
                alt="atribute icon" 
              />
              <p>Read more</p>
            </div>
            <div className='SkillItemMoreMobile' onClick={() => ReadMoreMobile(6)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read more</p>
            </div>

          </div>
        </div>
        <div className='SkillMoreInfo'>
          <p>Software Engineering</p>
          <h1>Back-end Web Development</h1>
          <p>
            Back-end development focuses on the server side of an application, 
            including databases, server logic, APIs, and integration of front-end 
            functionality to ensure data and services are delivered seamlessly.
          </p>
          <div className='SkillItemMoreMobile' onClick={() => ReadLessMobile(6)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read less</p>
          </div>
        </div>
      </div>
      </div>
      <div className='MoveSkillsArrows'>
          <img src={arrow} alt="leftArrow" onClick={() => MoveCoursesMobile(-1/7 * 1000)}/>
          <img src={arrow} alt="righttArrow" id='lASS' onClick={() => MoveCoursesMobile(1/7 * 1000)}/>
      </div>
    </section>
  );
}

export default SkillsSnow;