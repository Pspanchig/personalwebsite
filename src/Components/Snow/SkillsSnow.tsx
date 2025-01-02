import React, { useEffect } from 'react';
import './css/SkillsSnow.css';

const SkillsSnow: React.FC = () => {

  let listOfSkillsItem: NodeListOf<HTMLDivElement>;
  let listOfSkillsContainer: NodeListOf<HTMLDivElement>;
  let listOfImgsContainer: NodeListOf<HTMLImageElement>;
  let listOfMoreInfo: NodeListOf<HTMLDivElement>;

  useEffect(() => {
    listOfSkillsItem = document.querySelectorAll('.SkillItem');
    listOfSkillsContainer = document.querySelectorAll('.SkillItemContainer');
    listOfImgsContainer = document.querySelectorAll('.SkillItemContainer img');
    listOfMoreInfo = document.querySelectorAll('.SkillMoreInfo');
  }, []);

  function smallRotation(index: number): void{      
    listOfSkillsItem[index].style.transform = 'rotate(5deg)';
    setTimeout(() => {      
      listOfSkillsItem[index].style.transform = 'rotate(-10deg)';
    }, 150);
    setTimeout(() => {      
      listOfSkillsItem[index].style.transform = 'rotate(0deg)';
    }, 250);
  }

  function ReadMore(index: number): void{
    
    listOfSkillsItem[index].style.minWidth = '30vw';
    listOfSkillsContainer[index].style.width = '50%';
    listOfImgsContainer[index].style.borderTopRightRadius = '0em';
    listOfSkillsContainer[index].style.borderTopRightRadius = '0em';
    listOfSkillsContainer[index].style.borderBottomRightRadius = '0em';
    listOfMoreInfo[index].style.display = 'flex';
    setTimeout(() => {
      listOfMoreInfo[index].style.width = '50%';      
    }, 100);

  }

  function closeMoreInfo(index: number): void{    
    listOfSkillsItem[index].style.minWidth = '16vw';
    listOfSkillsContainer[index].style.width = '100%';
    listOfImgsContainer[index].style.borderTopRightRadius = '2.5em';
    listOfSkillsContainer[index].style.borderTopRightRadius = '2.5em';
    listOfSkillsContainer[index].style.borderBottomRightRadius = '2.5em';
    listOfMoreInfo[index].style.width = '0%';
    setTimeout(() => {
      listOfMoreInfo[index].style.display = 'none';      
    }, 100);
  }

  return (
    <section className='SkillsSnow'>
      <div className='SkillItem' onMouseLeave={() => closeMoreInfo(0)} onMouseEnter={() => smallRotation(0)}>
        <div className='SkillItemContainer'>
          <img id='SkillImg' src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Skill Img" />
          <div className='SkillItemDescription'>
            <p>Computer Science</p>
            <h1>Fundamentals Of Programing</h1>
            <div className='SkillItemMore' onClick={() => ReadMore(0)}>
              <img src="https://www.svgrepo.com/show/512467/menu-navigation-grid-1530.svg" alt="atribute icon" />
              <p>Read more</p>
            </div>
          </div>
        </div>
        <div className='SkillMoreInfo'>
          <p>Computer Science</p>
          <h1>Fundamentals Of Programing</h1>
          <p>Programming is the process of creating a set of instructions that tell a computer how to perform a task. Programming can be done using a variety of computer languages, such as SQL, Java, Python, and C++.</p>
        </div>
        </div>
            {/* Skill Item 1 */}
      <div className='SkillItem' onMouseLeave={() => closeMoreInfo(1)} onMouseEnter={() => smallRotation(1)}>
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
        </div>
      </div>


      {/* Skill Item 2 */}
      <div className='SkillItem' onMouseLeave={() => closeMoreInfo(2)}  onMouseEnter={() => smallRotation(2)}>
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
        </div>
      </div>


      {/* Skill Item 3 */}
      <div className='SkillItem' onMouseLeave={() => closeMoreInfo(3)}  onMouseEnter={() => smallRotation(3)}>
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
        </div>
      </div>


      {/* Skill Item 4 */}
      <div className='SkillItem' onMouseLeave={() => closeMoreInfo(4)}  onMouseEnter={() => smallRotation(4)}>
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
        </div>
      </div>


      {/* Skill Item 5 */}
      <div className='SkillItem' onMouseLeave={() => closeMoreInfo(5)}  onMouseEnter={() => smallRotation(5)}>
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
        </div>
      </div>


      {/* Skill Item 6 */}
      <div className='SkillItem' onMouseLeave={() => closeMoreInfo(6)}  onMouseEnter={() => smallRotation(6)}>
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
        </div>
      </div>
    </section>
  );
}

export default SkillsSnow;