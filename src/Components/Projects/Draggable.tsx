import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Projects, Technologies } from './ProjectsList';

interface DraggableProps {
    i: number;
    p: Projects;
    id: string;
    technologies: Technologies [];    
}
const Draggable: React.FC<DraggableProps> = ({ id, p, i, technologies }) => {

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data: { project: p },
  });

  const style: React.CSSProperties = {
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
    padding: 20,
    color: 'black',
    cursor: 'grab',
    position: 'relative', 
    zIndex: 100,
  };

  return (    
    <li       
      key={i}
      className="ProjectItem"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
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
                    <div 
                        key={index} 
                        className='TechLabel'
                            style={{
                            backgroundColor:
                            t.techonology === 'TS' ? '#016FA0' :
                            t.techonology === 'HTML' ? '#FDB25A' :
                            t.techonology === 'CSS' ? '#00c0c0' :
                            t.techonology === 'Java' ? '#F9791E' :
                            t.techonology === 'C#' ? '#63A103' :
                            undefined,
                        }}
                        >                                                            
                    {t.techonology}</div>
                    ))
                }
            </div>
            </div>
        </li>    
  );
};

export default Draggable;