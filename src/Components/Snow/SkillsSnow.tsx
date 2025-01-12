import React, { useRef } from 'react';
import './css/SkillsSnow.css';
import arrow from './imgs/left-arrow-svgrepo-com.svg'

const SkillsSnow: React.FC = () => {


  const skillsMobileContainer = useRef<HTMLDivElement>(null)
  const indexScrollMobile = useRef<number>(0);
  
  function smallRotation(index: number): void{  
    const listOfSkillsItem = document.querySelectorAll('.SkillItem') as NodeListOf<HTMLDivElement>;

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
    const listOfSkillsItem = document.querySelectorAll('.SkillItem') as NodeListOf<HTMLDivElement>;
    const listOfSkillsContainer = document.querySelectorAll('.SkillItemContainer') as NodeListOf<HTMLDivElement>;
    const listOfMoreInfo = document.querySelectorAll('.SkillMoreInfo') as NodeListOf<HTMLDivElement>;
    const listOfImgsContainer  = document.querySelectorAll('#SkillImg') as NodeListOf<HTMLImageElement>;

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
      setTimeout(() => {        
        ScrollToElement(index);
      }, 300);
      
    }
  }

  function closeMoreInfo(index: number): void{  
    const listOfSkillsItem = document.querySelectorAll('.SkillItem') as NodeListOf<HTMLDivElement>;
    const listOfImgsContainer  = document.querySelectorAll('#SkillImg') as NodeListOf<HTMLImageElement>;
    const listOfSkillsContainer = document.querySelectorAll('.SkillItemContainer') as NodeListOf<HTMLDivElement>;
    const listOfMoreInfo = document.querySelectorAll('.SkillMoreInfo') as NodeListOf<HTMLDivElement>;

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
      const listOfSkillsItem = document.querySelectorAll('.SkillItem') as NodeListOf<HTMLDivElement>;

      const offsetItem: number = listOfSkillsItem[index].offsetLeft - 600;
      skillsMobileContainer.current?.scrollTo({left: offsetItem, behavior: 'smooth'})
    }
  }

  function MoveCoursesMobile(direction: number): void {
    const listOfSkillsItem = document.querySelectorAll('.SkillItem') as NodeListOf<HTMLDivElement>;
  
    if (window.innerWidth < 680 && skillsMobileContainer.current && listOfSkillsItem.length > 0) {
  
      let newIndex = indexScrollMobile.current + direction;  
      newIndex = Math.max(0, Math.min(newIndex, listOfSkillsItem.length - 1));   
      indexScrollMobile.current = newIndex;      

      const targetElement = listOfSkillsItem[newIndex];      
      const targetOffsetLeft = targetElement.offsetLeft - 65;

      skillsMobileContainer.current.scrollTo({
        left: targetOffsetLeft,
        behavior: 'smooth'
      });
    }
  }
  function ReadMoreMobile(index: number): void{
    const listOfSkillsItem = document.querySelectorAll('.SkillItem') as NodeListOf<HTMLDivElement>;
    const listOfMoreInfo = document.querySelectorAll('.SkillMoreInfo') as NodeListOf<HTMLDivElement>;
    const listOfSkillsContainer = document.querySelectorAll('.SkillItemContainer') as NodeListOf<HTMLDivElement>;

    listOfSkillsItem[index].style.transform = 'rotate(-360deg)';    
    listOfSkillsContainer[index].style.display = 'none';
    listOfMoreInfo[index].style.display = 'flex';
    listOfMoreInfo[index].style.width = '100%';
    listOfMoreInfo[index].style.borderTopLeftRadius = '2.5em';
    listOfMoreInfo[index].style.borderBottomLeftRadius = '2.5em';
  }

  function ReadLessMobile(index: number): void{
    const listOfSkillsItem = document.querySelectorAll('.SkillItem') as NodeListOf<HTMLDivElement>;
    const listOfMoreInfo = document.querySelectorAll('.SkillMoreInfo') as NodeListOf<HTMLDivElement>;
    const listOfSkillsContainer = document.querySelectorAll('.SkillItemContainer') as NodeListOf<HTMLDivElement>;

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
          <p>
            This course introduces the discipline of computing and emphasizes problem-solving and programming. 
            Considerable time is devoted to learning how to solve problems using a current programming language (C#). 
            Basic principles of program design and implementation are introduced.
          </p>
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
            This course continues the development of the discipline of computing. It introduces the concepts of object-oriented 
            programming. Basic data structures, recursion, and fundamental computing algorithms are introduced.
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
            This course covers data structures and algorithms in some depth. Topics include data structures, 
            recursion, problem solving strategies, and complexity analysis. Sorting and searching algorithms are covered in detail.
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
            This course is an introduction to digital systems, logic gates, combinational logic circuits, and sequential
             logic circuits. It includes minimization techniques and implementation with encoders, decoders, multiplexers, 
             and programmable logic devices. It considers Mealy and Moore models of state machines, state minimization, 
             and state assignment. It also introduces a hardware description language.
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
            This course introduces organization and architecture of computer systems. Topics include assembly 
            language programming, instruction sets, pipelining, and memory systems.
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
            src="https://images.pexels.com/photos/2881233/pexels-photo-2881233.jpeg?auto=compress&cs=tinysrgb&w=600" 
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
            This course focuses on the concepts and technologies needed to develop dynamic web-based applications. 
            Students build data-driven websites and APIs using modern languages and tools.
          </p>
          <div className='SkillItemMoreMobile' onClick={() => ReadLessMobile(6)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read less</p>
          </div>
        </div>
      </div>
      </div>
      <div className='MoveSkillsArrows'>
          <img src={arrow} alt="leftArrow" onClick={() => MoveCoursesMobile(-1)}/>
          <img src={arrow} alt="righttArrow" id='lASS' onClick={() => MoveCoursesMobile(1)}/>
      </div>
    </section>
  );
}

export default SkillsSnow;