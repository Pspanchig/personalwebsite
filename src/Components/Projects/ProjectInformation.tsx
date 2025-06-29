import React, { useEffect, useRef } from 'react';
import './css/ProjectInformation.css';
import { Projects } from './ProjectsList';

interface ProjectInformationProps {
    CurrentProject: Projects | null;
    Close: (close: boolean) => void;
}
const ProjectInformation: React.FC<ProjectInformationProps> = ({CurrentProject, Close}) => {

    const informationContainer = useRef<HTMLDivElement>(null);
    const ProjectInformationContent = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleBeggining = (): void => {
            if (informationContainer.current) {
                ProjectInformationContent.current!.style.display = 'flex';
                setTimeout(() => {                    
                    informationContainer.current!.style.height = '80%';            
                }, 50);
            }
        }
        handleBeggining();
    }, []);

    const handleClose = (): void => {
            if (informationContainer.current) {
                informationContainer.current.style.height = '0%';
                setTimeout(() => {
                    ProjectInformationContent.current!.style.display = 'none';
                    Close(false);
                }, 150);
            }
        };
  return (
    <section className='ProjectInformation' ref={ProjectInformationContent}>
      <div className='ProjectInformationContent' ref={informationContainer}>
        <span className='ClosePI' onClick={handleClose}>X</span>
        <h1>{CurrentProject?.project_name}</h1>
        <p>
          {CurrentProject?.project_description}
        </p>                
      </div>
    </section>
  );
};

export default ProjectInformation;