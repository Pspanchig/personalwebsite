import React, { useEffect, useState } from 'react';
import './css/ProjectsList.css'
import DragNDrop from './DragNDrop';
import supabase from '../Shared/supabase';
import Draggable from './Draggable';
import { DndContext } from '@dnd-kit/core';

export interface Projects {
  id?: string,
  project_name: string,
  project_date: string,
  project_description: string  
}
export interface Technologies{
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

    // if((t.innerText.toLowerCase().includes(searchbar.toLocaleLowerCase()) === false)){
    //   span.current!.style.display = 'block'
    //   setTimeout(() => {        
    //     span.current!.style.display = 'none'
    //   }, 1000);
    // }
  });
  


  setSearchbar('');
  };
  

  useEffect(() =>{
    getProjectsInfo()
    getTechnologies()
  },[])
  
useEffect(() => {
  applyFilters();
}, [update]);

const handleDragEnd = (event: any) => {
    const { active, over } = event;
    console.log('Dropped:', active.id, 'over', over?.id);
  };

const applyFilters = (): void => {
  const projectItems = document.querySelectorAll('.ProjectItem') as NodeListOf<HTMLDivElement>;
  const projectDates = document.querySelectorAll('.ProjectItem h3') as NodeListOf<HTMLHeadingElement>;
  
  projectItems.forEach((item, index) => {
    const passesYearFilter = checkYearFilter(projectDates[index]);
    const passesTechFilter = checkTechFilter(item);
    
    item.style.display = (passesYearFilter && passesTechFilter) ? 'flex' : 'none';
  });
};

const checkYearFilter = (dateElement: HTMLHeadingElement): boolean => {
  if (initialDate === 0 && finalDate === 0) {
    return true;
  }
  
  if (initialDate !== null && finalDate !== null) {
    const projectYear = Number(dateElement.innerText.substring(0, 4));
    return projectYear >= initialDate! && projectYear <= finalDate!;
  }
  
  return true;
  };

  const checkTechFilter = (item: HTMLDivElement): boolean => {
    if (!cSharp && !js && !ts && !html && !css && !java) {
      return true;
    }
    
    const activeTechs: string[] = [];
    if (cSharp) activeTechs.push('C#');
    if (js) activeTechs.push('JS');
    if (ts) activeTechs.push('TS');
    if (html) activeTechs.push('HTML');
    if (css) activeTechs.push('CSS');
    if (java) activeTechs.push('Java');
    
    const techLabels = item.querySelectorAll('.TechLabel') as NodeListOf<HTMLDivElement>;
    const labels = Array.from(techLabels).map(label => label.textContent?.trim());
    
    return labels.some(label => activeTechs.includes(label!));
  };


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
          {/* <span ref={span}>Nothing was found</span> */}
          {
            (projects.length === 0 || projects === null) &&(
              <li className="ProjectItem" style={{maxHeight:'100px'}}>
                <p>Loading...</p>
              </li>
            )
          }
          {
            projects.map((p, i) => (
              <DndContext onDragEnd={handleDragEnd}>
                <Draggable p={p} i={i} technologies={technologies} key={i}/>
              </DndContext>
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