import React from 'react';
import './css/Projects.css'
import Navbar from '../Components/Shared/Navbar';
import ProjectsMenu from '../Components/Projects/ProjectsMenu';

const Projects: React.FC = () => {
  return (
    <main className='Projects'>
      <Navbar language='En'/>
      <ProjectsMenu/>      
    </main>
  );
};

export default Projects;