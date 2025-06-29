import React, { useEffect, useRef } from 'react';
import './css/Projects.css'
import Navbar from '../Components/Shared/Navbar';
import ProjectsMenu from '../Components/Projects/ProjectsMenu';

const Projects: React.FC = () => {

    const spanRef = useRef<HTMLSpanElement>(null);
  
    useEffect(() => {
      const scrollToTop = () => {
          spanRef.current?.scrollIntoView({ behavior: 'instant' });
      };
      scrollToTop();
    }, []);
    
  return (
    <main className='Projects'>
      <span ref={spanRef}></span>
      <Navbar language='En'/>
      <ProjectsMenu/>      
    </main>
  );
};

export default Projects;