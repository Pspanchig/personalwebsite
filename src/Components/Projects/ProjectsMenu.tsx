import React, { useState } from 'react';
import './css/ProjectsMenu.css'
import ProjectsList from './ProjectsList';
import FilterBy from './FilterBy';

const ProjectsMenu: React.FC = () => {
  const [cSharp, setCSharp] = useState<boolean>(false)
  const [js, setJs] = useState<boolean>(false)
  const [ts, setTs] = useState<boolean>(false)
  const [html, setHTML] = useState<boolean>(false)
  const [css, setCss] = useState<boolean>(false)
  const [java, setJava] = useState<boolean>(false)
  const [update, setUpdate] = useState<boolean>(false);
  const [initialDate, setInitialDate] = useState<number>(0);
  const [finalDate, setFinalDate] = useState<number>(0);
  return (
    <section className='ProjectsMenu'>
      <FilterBy 
        setCSharp={setCSharp} 
        setJs={setJs} 
        setTs={setTs} 
        setHTML={setHTML} 
        setCss={setCss}
        setJava={setJava}
        setUpdate={setUpdate}
        update={update}
        setFinalDate={setFinalDate}
        setInitialDate={setInitialDate}
      />
      <ProjectsList
        cSharp={cSharp}
        js={js}
        ts={ts}
        html={html}
        css={css}
        java={java}
        update={update}
        initialDate={initialDate}
        finalDate={finalDate}
      />
    </section>
  );
};

export default ProjectsMenu;