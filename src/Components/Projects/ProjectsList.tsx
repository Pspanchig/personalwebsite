import React, { useEffect, useState } from 'react';
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
const ProjectsList: React.FC = () => {

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
      console.error('Error fetching users:', error)      
    }
    setProjects(data!)
  }
  
  useEffect(() =>{
    getProjectsInfo()
    getTechnologies()
  },[])
  
  return (
    <article className='ProjectsList'>
      <div className='ProjectListHeader'>
        <h1>Projects list</h1>
        <div className='PLSearchBar'>
          <input 
            type="text" 
            placeholder='Find a project here...'/>
          <img 
            src="https://www.svgrepo.com/show/507417/search-circle.svg" 
            alt="search img" />
        </div>
      </div>

      <section className="ProjectsO">  
        <ul className="ProjectsContainer" role="list">
          {
            projects.map((p, i) => (
            <li key={i} className="ProjectItem" draggable>
              <h2>{p.project_name}</h2>
              <h3>{p.project_date}</h3>
              <p>{p.project_description}</p>              
              {
                technologies
                  .filter((t) => t.table_id === p.id)
                  .map((t, index) => (
                    <div key={index}>{t.techonology}</div>
                  ))
              }
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