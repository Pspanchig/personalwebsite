import React, { useEffect, useRef, useState } from 'react';
import './css/ProjectInformation.css';
import { Projects } from './ProjectsList';
import TechonolgiesHook from '../Shared/TechonolgiesHook';
import supabase from '../Shared/supabase';

interface ProjectInformationProps {
  CurrentProject: Projects | null;
  Close: (close: boolean) => void;
}
interface ProjectLinks {
  id?: string;
  link: string;
  linked_table: string;
}
const ProjectInformation: React.FC<ProjectInformationProps> = ({CurrentProject, Close}) => {

  const [projectLinks, setProjectLinks] = useState<ProjectLinks[]>([]);
  const informationContainer = useRef<HTMLDivElement>(null);
  const ProjectInformationContent = useRef<HTMLDivElement>(null);
  const {technologies, isLoading} = TechonolgiesHook()

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

  useEffect(() => {
    const handleLinks = async(): Promise<void> => {
      try{
        const data = await supabase
        .from('Projects_Links')
        .select('*')
        
        setProjectLinks(data.data!);
      }catch (err) {
        alert('Error in handleLinks:');
      }
    }
    handleLinks();
  },[])

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
        <hr />
        <p>
          {CurrentProject?.project_description}
        </p>                
        <hr />
        <div className='TechLabelContainerPI'>
          {
            isLoading ? (<p>Loading...</p>) 
            : (          (technologies.filter((t) => t.table_id === CurrentProject?.id).map((t, index) => (
            
            <div 
              key={index} 
              className='TechLabelPI'
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
          ))))
          }

        </div>
        <hr />
        <div className='LongInformation'>
          <p>{CurrentProject?.long_description}</p>
        </div>
        <hr />
        <div className='LinksProject'>
          <h3>Links</h3>
          {projectLinks.length === 0 
          ? (<div> <p>No links available for this project.</p> </div>) 
          : (
            <div>
              
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectInformation;