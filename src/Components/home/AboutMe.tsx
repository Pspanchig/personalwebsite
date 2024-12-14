import React from 'react';
import './css/AboutMe.css'
import aspnet from './imgs/aspnet.svg'
import csharp from './imgs/csharp.svg'
import css from './imgs/css.svg'
import git from './imgs/git.svg'
import html from './imgs/html.svg'
import js from './imgs/js.svg'
import mysql from './imgs/mysql.svg'
import reactvite from './imgs/react.svg'
import typescript from './imgs/typescript.svg'
import arrow from './imgs/arrowDown.svg'

const AboutMe: React.FC = () => {
  return (
    <article className='AboutMe'>
      <div className='AboutTitle'>
          About Me
      </div>      
      <div className='AboutMeInInformationContainer'>
        <div className='AboutMeSkills'>
          <h2>Skills</h2>
          <div className='SkillsContainer'>
            <div className='Skill'>
              <div className='SkillName'>
                <img src={reactvite} alt="React Img" />
                <h3>React + Vite</h3>
              </div>
              <div className='SkillPointContainer'>
                <div className='SkillPoint' style={{backgroundColor: 'lightblue'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'lightblue'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'lightblue'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'lightblue'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'gray'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'gray'}}></div>                
              </div>
            </div>
            <div className='Skill'>
              <div className='SkillName'>
                <img src={typescript} alt="Tsx Img" />
                <h3>TypeScript</h3>
              </div>
              <div className='SkillPointContainer'>
                <div className='SkillPoint' style={{backgroundColor: 'blue'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'blue'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'blue'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'gray'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'gray'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'gray'}}></div>
              </div>
            </div>
            <div className='Skill'>
              <div className='SkillName'>
                <img src={js} alt="Js Img" />
                <h3>JavaScript</h3>
              </div>
              <div className='SkillPointContainer'>
                <div className='SkillPoint' style={{backgroundColor: 'yellow'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'yellow'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'yellow'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'yellow'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'yellow'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'gray'}}></div>
              </div>
            </div>
            <div className='Skill'>
              <div className='SkillName'>
                <img src={html} alt="Html Img" />
                <h3>HTML</h3>
              </div>
              <div className='SkillPointContainer'>
                <div className='SkillPoint' style={{backgroundColor: 'orange'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'orange'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'orange'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'orange'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'orange'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'orange'}}></div>
              </div>
            </div>
            <div className='Skill'>
              <div className='SkillName'>
                <img src={css} alt="Css Img" />
                <h3>CSS</h3>
              </div>
              <div className='SkillPointContainer'>
                <div className='SkillPoint' style={{backgroundColor: 'rgb(12, 12, 155)'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'rgb(12, 12, 155)'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'rgb(12, 12, 155)'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'rgb(12, 12, 155)'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'gray'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'gray'}}></div>
              </div>
            </div>
            <div className='Skill'>
              <div className='SkillName'>
                <img src={csharp} alt="C# Img" />
                <h3>C-Sharp</h3>
              </div>
              <div className='SkillPointContainer'>
                <div className='SkillPoint' style={{backgroundColor: 'purple'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'purple'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'purple'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'purple'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'gray'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'gray'}}></div>
              </div>
            </div>
            <div className='Skill'>
              <div className='SkillName'>
                <img src={aspnet} alt=".net Img" />
                <h3>ASP.NET</h3>
              </div>
              <div className='SkillPointContainer'>
                <div className='SkillPoint' style={{backgroundColor: 'green'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'green'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'green'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'gray'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'gray'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'gray'}}></div>
              </div>
            </div>
            <div className='Skill'>
              <div className='SkillName'>
                <img src={mysql} alt="Sql Img" />
                <h3>MySQL</h3>
              </div>
              <div className='SkillPointContainer'>
                <div className='SkillPoint' style={{backgroundColor: 'black'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'black'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'black'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'black'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'gray'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'gray'}}></div>
              </div>
            </div>
            <div className='Skill'>
              <div className='SkillName'>
                <img src={git} alt="Git Img" />
                <h3>GitHub</h3>
              </div>
              <div className='SkillPointContainer'>
                <div className='SkillPoint' style={{backgroundColor: 'red'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'red'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'red'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'red'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'gray'}}></div>
                <div className='SkillPoint' style={{backgroundColor: 'gray'}}></div>
              </div>
            </div>
          </div>
          <div className='ScrollDownSkills'>
            <p>show more</p>
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className='AboutMeFocusAreas'>

        </div>
      </div>  
    </article>
  );
}

export default AboutMe;