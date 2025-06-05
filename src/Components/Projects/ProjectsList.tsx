import React, { useEffect, useState } from 'react';
import './css/ProjectsList.css'
import DragNDrop from './DragNDrop';
import supabase from '../Shared/supabase';

const ProjectsList: React.FC = () => {

  const [email] = useState<string>('pspanchig@outlook.com');
  const [password] = useState<string>('superSecure123');

  const signUp = async (): Promise<void> => {    
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password
    });

    if (error) {      
      alert(`Sign-up failed: ${error.message}`);
      console.error('Supabase signUp error details:', error);
      return;
    }

    console.log('Signup successful, user data:', data);    
  };

  useEffect(() => {
    signUp();
  }, []);

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
          <li className="ProjectItem" draggable>
            Coming soon!
          </li>
          <li className="ProjectItem" draggable>
            Coming soon!
          </li>
          <li className="ProjectItem" draggable>
            Coming soon!
          </li>
          <li className="ProjectItem" draggable>
            Coming soon!
          </li>
        </ul>

        <div className="ProjectDragAndDrop">
          <DragNDrop/>
        </div>
    </section>
    </article>
  );
};

export default ProjectsList;