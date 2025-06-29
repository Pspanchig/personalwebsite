import React from 'react';
import './css/DragNDrop.css'
import { useDroppable } from '@dnd-kit/core';

const DragNDrop: React.FC = () => {

  const { isOver, setNodeRef } = useDroppable({
    id: 'drop-zone',
  });


  return (
    <section className='DragNDrop' ref={setNodeRef}>
      <h3>Show project information</h3>
      <article>
        {/* backgroundColor={isOver ? '#3498db' : '#f0f0f0'} */}
        <div className='DropProject' style={{backgroundColor: isOver ? '#c5ff8e' : 'white'}} >
          {isOver ? 'Release to drop!' : 'Drop here'}
          <img
            src="https://www.svgrepo.com/show/345706/drag-drop.svg"
            alt="DragNDrop"
          />
        </div>
        <p>
          Please drag the project into the square to display all the information
          about that project
        </p>
      </article>
    </section>
  );
};

export default DragNDrop;