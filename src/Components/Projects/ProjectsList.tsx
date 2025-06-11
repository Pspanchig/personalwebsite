import React, { useEffect, useRef, useState } from 'react';
import './css/ProjectsList.css'
import DragNDrop from './DragNDrop';
import supabase from '../Shared/supabase';

interface Projects {
  id?: string,
  project_name: string,
  project_date: string,
  project_description: string  
}
interface Technologies{
  id?: string,
  techonology: string,
  table_id: string
}
interface TechnolgiesToUse{
  cSharp: boolean;    
  js: boolean;
  ts: boolean;
  html: boolean;
  css: boolean;
  java: boolean
  update: boolean;
  initialDate?: number;
  finalDate?: number;
}
const ProjectsList: React.FC<TechnolgiesToUse> = ({
  cSharp,
  js,
  ts,
  html,
  css,
  java,
  update,
  initialDate,
  finalDate
  }) => {

  const [searchbar, setSearchbar] = useState<string>('')
  const [projects, setProjects] = useState<Projects[]>([])
  const [technologies, setTechnologies] = useState<Technologies[]>([])
  const span = useRef<HTMLSpanElement>(null)

  const getTechnologies = async(): Promise<void> =>{
    const {data, error} = await supabase
    .from('Technologies')
    .select('*')
    if (error) {
      console.error('Error fetching technologies:', error)      
    }
    setTechnologies(data!)
  }

  const getProjectsInfo = async(): Promise<void> =>{
    const { data, error } = await supabase
    .from('Projects List')
    .select('*')
    if (error) {
      console.error('Error fetching users:', error)      ;
    }
    setProjects(data!)
  }

  const cleanSearch = (): void =>{
      const Projects = document.querySelectorAll('.ProjectItem') as NodeListOf<HTMLElement>;
      Projects.forEach(p => {
          p.style.display = 'flex'
      })
  }

  const handleSearchBar = (): void => {
  const ProjectsName = document.querySelectorAll('.ProjectItem h2') as NodeListOf<HTMLElement>;
  const Projects = document.querySelectorAll('.ProjectItem') as NodeListOf<HTMLElement>;

  ProjectsName.forEach((t, index) => {
    if (t.innerText.toLowerCase().includes(searchbar.toLocaleLowerCase())) {
      Projects[index].style.display = '';    
    }else {
      Projects[index].style.display = 'none'      
    }

    if((t.innerText.toLowerCase().includes(searchbar.toLocaleLowerCase()) === false)){
      span.current!.style.display = 'block'
      setTimeout(() => {        
        span.current!.style.display = 'none'
      }, 1000);
    }
  });

  setSearchbar('');
  };
  // This change the color of the technologies names when page is loaded
  useEffect(() =>{
    const technologiesLabel = (): void =>{
    const technologies = document.querySelectorAll('.TechLabel') as NodeListOf<HTMLElement>
        technologies.forEach(t => {
          if(t.innerText === 'TS'){
            t.style.backgroundColor = '#016FA0'
          }
          else if(t.innerText === 'HTML'){
            t.style.backgroundColor = '#FDB25A'
          }
          else if(t.innerText === 'CSS'){
            t.style.backgroundColor = '#00c0c0'
          }
          else if(t.innerText === 'Java'){
            t.style.backgroundColor = '#F9791E'
          }
          else if(t.innerText === 'C#'){
            t.style.backgroundColor = '#63A103'
          }
        })
      }

      technologiesLabel()        

  },[technologies])

  useEffect(() =>{
    getProjectsInfo()
    getTechnologies()
  },[])
  
  useEffect(() => {
    filterByTechnology();
    filterByYear();
  },[update])
  
  const filterByTechnology = (): void => {
    const projectItems = document.querySelectorAll('.ProjectItem') as NodeListOf<HTMLDivElement>;
    projectItems.forEach((item) => {
      const techLabels = item.querySelectorAll('.TechLabel') as NodeListOf<HTMLDivElement>;
      const labels = Array.from(techLabels).map(label => label.textContent?.trim());

      const activeTechs: string[] = [];
      
      if (cSharp) activeTechs.push('C#');
      if (js) activeTechs.push('JS');
      if (ts) activeTechs.push('TS');
      if (html) activeTechs.push('HTML');
      if (css) activeTechs.push('CSS');
      if (java) activeTechs.push('Java');

      const shouldShow = labels.some(label => activeTechs.includes(label!));
      item.style.display = shouldShow ? 'flex' : 'none';

      if(!cSharp && !js && !ts && !html && !css && !java) {
        item.style.display = 'flex';
      }
    });
  };

  const filterByYear = (): void => {

    const projectItems = document.querySelectorAll('.ProjectItem') as NodeListOf<HTMLDivElement>;
    const projectDate = document.querySelectorAll('.ProjectItem h3') as NodeListOf<HTMLHeadingElement>;

    projectDate.forEach((date, index) => {
      var projectsDate: number = (Number)(date.innerText.substring(0, 4));
      if(initialDate !== null && finalDate !== null){
        if(projectsDate >= initialDate! && projectsDate <= finalDate!){
          projectItems[index].style.display = 'flex';
        }else projectItems[index].style.display = 'none';
      }
    })
      
  }

  return (
    <article className='ProjectsList'>
      <div className='ProjectListHeader'>
        <h1>Projects list</h1>
        <div className='PLSearchBar'>
          <button onClick={cleanSearch}>clean</button>
          <input 
            type="text" 
            value={searchbar}
            onChange={(e) => setSearchbar(e.target.value)}
            placeholder='Find a project here...'/>
          <img 
          onClick={handleSearchBar}
            src="https://www.svgrepo.com/show/507417/search-circle.svg" 
            alt="search img" />
        </div>
      </div>

      <section className="ProjectsO">  
        <ul className="ProjectsContainer" role="list">
          <span ref={span}>Nothing was found</span>
          {
            projects.length === 0 &&(
              <li className="ProjectItem" draggable>
                <p>Loading...</p>
              </li>
            )
          }
          {
            projects.map((p, i) => (
            <li key={i} className="ProjectItem" draggable>
              <div className='ProjectItemInformation'>
                <h2>{p.project_name}</h2>
                <div style={{display: 'flex'}}>
                  <p>Created at </p><h3 style={{marginLeft: '1%'}}>{p.project_date}</h3>
                </div>
                <p>{p.project_description}</p>              
                <div className='TechLabelContainer'>
                {
                  technologies
                    .filter((t) => t.table_id === p.id)
                    .map((t, index) => (
                        <div key={index} className='TechLabel'>{t.techonology}</div>
                      ))
                    }
                </div>
              </div>
            </li>
            ))
          }          
        </ul>

        <div className="ProjectDragAndDrop">
          <DragNDrop/>
        </div>
    </section>
    </article>
  );
};

export default ProjectsList;