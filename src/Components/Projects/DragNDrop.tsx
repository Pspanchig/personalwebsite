import React from 'react';
import './css/DragNDrop.css'

const DragNDrop: React.FC = () => {
  return (
    <section className='DragNDrop' onDrop={(e) => ('')}>
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