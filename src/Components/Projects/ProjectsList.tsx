import React, { useEffect, useState } from 'react';
import './css/ProjectsList.css'
import DragNDrop from './DragNDrop';
import supabase from '../Shared/supabase';
import Draggable from './Draggable';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import ProjectInformation from './ProjectInformation';

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

  const [isMobile] = useState<boolean>(window.innerWidth <= 680);
  const [searchbar, setSearchbar] = useState<string>('')
  const [projects, setProjects] = useState<Projects[]>([])
  const [technologies, setTechnologies] = useState<Technologies[]>([])
  const [currentProject, setCurrentProject] = useState<Projects | null>(null);
  const [haveProject, setHaveProject] = useState<boolean>(false);

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


  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over?.id === 'drop-zone') {
      const project: Projects = active.data.current?.project;
      setCurrentProject(project);

      if(project){
        setHaveProject(true);
      }
    }
  }

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

  const ProjectListContent = (
  <ul className="ProjectsContainer" role="list">
    <div className="ProjectContainerofitems">
      {
        (projects.length === 0 || projects === null) && (
          <li className="ProjectItem" style={{ maxHeight: '100px' }}>
            <p>Loading...</p>
          </li>
        )
      }
      {
        projects.map((p, i) => (
          <Draggable
            key={p.id || i}
            id={`project-${p.id || i}`}
            p={p}
            i={i}
            technologies={technologies}
          />
        ))
      }
    </div>
    <div className="ProjectDragAndDrop">
      <DragNDrop />
    </div>
  </ul>
  );

  return (
  <>
  {
    haveProject && (
      <ProjectInformation Close={setHaveProject} CurrentProject={currentProject}/>
    )
  }
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
      {
        !isMobile ? (
          <DndContext onDragEnd={handleDragEnd}>
            {ProjectListContent}
          </DndContext>
        ) : (
          ProjectListContent
        )
      }
    </section>
  </article>
  </>

  );
};

export default ProjectsList;