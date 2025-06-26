import React from 'react';
import './css/DragNDrop.css'
// import { useDroppable } from '@dnd-kit/core';

const DragNDrop: React.FC = () => {

  // const { isOver, setNodeRef } = useDroppable({
  //   id: 'drop-zone',
  // });

  // const style: React.CSSProperties = {
  //   background: isOver ? '#2ecc71' : '#bdc3c7',
  //   padding: 40,
  //   marginTop: 20,
  //   textAlign: 'center',
  //   borderRadius: 8,
  //   transition: 'background 0.2s ease',
  // };

  // return (
  //   <div ref={setNodeRef} style={style}>
  //     {isOver ? 'Release to drop!' : 'Drop here'}
  //   </div>
  // );
  // };


  return (
    <section className='DragNDrop'>
      <h3>Show project information</h3>
      <article>
        <div className='DropProject'>
            <img 
                src="https://www.svgrepo.com/show/345706/drag-drop.svg" 
                alt="DragNDrop" />
        </div>
        <p>Please drag the project into the square to display all the information about that project</p>
      </article>
    </section>
  );
};

export default DragNDrop;