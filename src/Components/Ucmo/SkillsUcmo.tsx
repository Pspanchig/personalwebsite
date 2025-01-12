import React, { useRef } from 'react';
import './css/SkillsUcmo.css';
import arrow from './imgs/left-arrow-svgrepo-com.svg'

const SkillsUcmo: React.FC = () => {


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
    <section className='SkillsUcmo' >
      <div className='UCIS' id='UCIS'  ref={skillsMobileContainer}>
      <div className='SkillItem' onMouseLeave={() => closeMoreInfo(0)} onMouseEnter={() => {smallRotation(0); ScrollToElement(0)}}>
        <div className='SkillItemContainer'>
          <img id='SkillImg' src="https://images.pexels.com/photos/9831612/pexels-photo-9831612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Skill Img" />
          <div className='SkillItemDescription'>
            <p>Computer Science</p>
            <h1>Computers & Modern Society</h1>
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
          <h1>Computers & Modern Society</h1>
          <p> The technical, social, legal, ethical, and economic implications of computing and the controversies they raise from a computer scientist’s perspective. </p>
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
            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Skill Img" 
          />
          <div className='SkillItemDescription'>
            <p>Software Engneering</p>
            <h1>Software Requiremnts Engneering</h1>
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
          <p>Software Engineering</p>
          <h1>Software Requiremnts Engneerng</h1>
          <p>
              Aims at equipping students with requirements engineering techniques for software-intensive systems. 
              Students will learn asystematic approach to discover, analyze, model, write, and validate requirements 
              from both theoretical and practical perspectives.
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
            src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Skill Img" 
          />
          <div className='SkillItemDescription'>
            <p>Software Engineering</p>
            <h1>Software Engineering</h1>
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
          <p>Software Engineering</p>
          <h1>Software Engineering</h1>
          <p>
              An introduction to software development process (Agile, Lean, Scrum and Kanban), 
              with emphasis on software design, team management, and application development. Students will gain 
              experience in developing and managing software projects. Ethical issues regarding software development will be discussed.
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
            src="https://images.pexels.com/photos/17485707/pexels-photo-17485707/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-illustration-visualises-an-artificial-neural-network-as-physical-objects-the-complex-structure-represents-a-network-of-infor.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Skill Img" 
          />
          <div className='SkillItemDescription'>
            <p>Computer Science</p>
            <h1>Algorithm Design and Analysis</h1>
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
          <h1>Algorithm Design and Analysis</h1>
          <p>
            Techniques needed to analyze and design algorithms are discussed. It covers a 
            large number of classical algorithms and their complexity. Topics such as sorting, 
            graph algorithms, and NP-completeness are discussed
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
            src="https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Skill Img" 
          />
          <div className='SkillItemDescription'>
            <p>Computer Science</p>
            <h1>Database Theory & Apps</h1>
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
          <h1>Database Theory & Apps</h1>
          <p>
            An introduction to database theory and applications. Topics include: E-R model, relational database design, 
            normalization theory, SQL, application design and development, security, and database administration. 
            A significant application-oriented project will be required.
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
            <p>Software Engineering</p>
            <h1>Software Design & Architecture</h1>
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
          <p>Software Engineering</p>
          <h1>Software Design & Architecture</h1>
          <p>
            In depth study of concepts and principles of software design and software architecture, 
            as well as practical approaches for employing design patterns and architectures in real systems. 
            Students will gain experiences with examples in design pattern application and case studies in software architecture. 
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
            src="https://images.pexels.com/photos/5380792/pexels-photo-5380792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Skill Img" 
          />
          <div className='SkillItemDescription'>
            <p>Software Engineering</p>
            <h1>Secure Software Engineering</h1>
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
          <h1>Secure Software Engineering</h1>
          <p>
            In depth study of secure development lifecycle. The course reevaluates each phase of the development 
            lifecycle from a security perspective and uses best practices from different secure SDL methodologies. 
            Students will learn how to practice risk analysis, static/dynamic analysis, penetration testing, and 
            secure code review in a dialectic process.
          </p>
          <div className='SkillItemMoreMobile' onClick={() => ReadLessMobile(6)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read less</p>
          </div>
        </div>
      </div>

      {/* Skill Item 7 */}
      <div className='SkillItem' onMouseLeave={() => closeMoreInfo(7)} onMouseEnter={() => {smallRotation(7); ScrollToElement(7)}}>
        <div className='SkillItemContainer'>
          <img 
            id='SkillImg' 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Skill Img" 
          />
          <div className='SkillItemDescription'>
            <p>Software Engineering</p>
            <h1>Senior Project</h1>
            <div className='SkillItemMore' onClick={() => ReadMore(7)}>
              <img 
                src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" 
                alt="atribute icon" 
              />
              <p>Read more</p>
            </div>
            <div className='SkillItemMoreMobile' onClick={() => ReadMoreMobile(7)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read more</p>
            </div>

          </div>
        </div>
        <div className='SkillMoreInfo'>
          <p>Software Engineering</p>
          <h1>Senior Project</h1>
          <p>
            Semester- long senior capstone project in which teams design, plan, implement, test, and deploy a software 
            development project. Selected topics in software development, group dynamics, project management, and 
            ethics and professional responsibility. Includes a formal presentation to the Computer Science faculty. 
          </p>
          <div className='SkillItemMoreMobile' onClick={() => ReadLessMobile(7)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read less</p>
          </div>
        </div>
      </div>
      
      {/* Skill Item 8 */}
      <div className='SkillItem' onMouseLeave={() => closeMoreInfo(8)} onMouseEnter={() => {smallRotation(8); ScrollToElement(8)}}>
        <div className='SkillItemContainer'>
          <img 
            id='SkillImg' 
            src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Skill Img" 
          />
          <div className='SkillItemDescription'>
            <p>Software Engineering</p>
            <h1>Software Testing & Quality Assurance</h1>
            <div className='SkillItemMore' onClick={() => ReadMore(8)}>
              <img 
                src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" 
                alt="atribute icon" 
              />
              <p>Read more</p>
            </div>
            <div className='SkillItemMoreMobile' onClick={() => ReadMoreMobile(8)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read more</p>
            </div>

          </div>
        </div>
        <div className='SkillMoreInfo'>
          <p>Software Engineering</p>
          <h1>Software Testing & Quality Assurance</h1>
          <p>
            Concepts and techniques for testing software and assuring its quality. Students learn the testing fundamentals, 
            the theory behind criteria-based test design and to apply that theory in practice. Topics include coverage 
            criteria for testing (graph coverage, logic coverage, input space partitioning, syntax-based testing); software 
            development process (SCRUM); test team organization; maturity models; software quality factors; and testing tools.
          </p>
          <div className='SkillItemMoreMobile' onClick={() => ReadLessMobile(8)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read less</p>
          </div>
        </div>
      </div>

      {/* Skill Item 9 */}
      <div className='SkillItem' onMouseLeave={() => closeMoreInfo(9)} onMouseEnter={() => {smallRotation(9); ScrollToElement(9)}}>
        <div className='SkillItemContainer'>
          <img 
            id='SkillImg' 
            src="https://images.pexels.com/photos/10725897/pexels-photo-10725897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Skill Img" 
          />
          <div className='SkillItemDescription'>
            <p>Software Engineering</p>
            <h1>Project Management</h1>
            <div className='SkillItemMore' onClick={() => ReadMore(9)}>
              <img 
                src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" 
                alt="atribute icon" 
              />
              <p>Read more</p>
            </div>
            <div className='SkillItemMoreMobile' onClick={() => ReadMoreMobile(9)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read more</p>
            </div>

          </div>
        </div>
        <div className='SkillMoreInfo'>
          <p>Software Engineering</p>
          <h1>Project Management</h1>
          <p>
            An introduction to project management and software tools for  project management. Topics include project 
            management process, scope management, time management and cost management. Students learn how a successful 
            project outcome will be achieved. This course helps students confidently prepare for PMP certificate. 
          </p>
          <div className='SkillItemMoreMobile' onClick={() => ReadLessMobile(9)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read less</p>
          </div>
        </div>
      </div>
      {/* Skill Item 10 */}
      <div className='SkillItem' onMouseLeave={() => closeMoreInfo(10)} onMouseEnter={() => {smallRotation(10); ScrollToElement(10)}}>
        <div className='SkillItemContainer'>
          <img 
            id='SkillImg' 
            src="https://images.pexels.com/photos/5380643/pexels-photo-5380643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Skill Img" 
          />
          <div className='SkillItemDescription'>
            <p>Cybersecurity </p>
            <h1>Secure Programming</h1>
            <div className='SkillItemMore' onClick={() => ReadMore(10)}>
              <img 
                src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" 
                alt="atribute icon" 
              />
              <p>Read more</p>
            </div>
            <div className='SkillItemMoreMobile' onClick={() => ReadMoreMobile(10)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read more</p>
            </div>

          </div>
        </div>
        <div className='SkillMoreInfo'>
          <p>Cybersecurity </p>
          <h1>Secure Programming</h1>
          <p>
          Introduction to secure and reliable programming practices. Topics include security loophole identification, 
          conversion of noncompliant code to compliant code, and best defensive programming practices
          </p>
          <div className='SkillItemMoreMobile' onClick={() => ReadLessMobile(10)}>
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

export default SkillsUcmo;