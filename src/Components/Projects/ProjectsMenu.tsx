import React from 'react';
import './css/ProjectsMenu.css'
import ProjectsList from './ProjectsList';
import FilterBy from './FilterBy';

const ProjectsMenu: React.FC = () => {
  return (
    <section className='ProjectsMenu'>
      <FilterBy/>
      <ProjectsList/>
    </section>
  );
};

export default ProjectsMenu;