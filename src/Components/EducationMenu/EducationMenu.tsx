import React from 'react';
import './EducationMenu.css';
import Ucmo from '../home/imgs/ucmoLogo.png'
import Snow from '../home/imgs/snowLogo.png'
import { useNavigate } from 'react-router-dom';

const EducationMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className='EducationMenu'>
        <h1>Choose an institution to continue</h1>
        <section className='InstitutionsContainer'>
          <div className='InstitutionItem' onClick={() => navigate('/education/ucmo')}>
            <img src={Ucmo} alt="" />
            <h2>University of Central Missouri</h2>
          </div>
          <div className='InstitutionItem' onClick={() => navigate('/education/snow')}>
            <img src={Snow} alt="" />
            <h2>Snow College</h2>
          </div>

        </section>

    </main>
  );
}

export default EducationMenu;