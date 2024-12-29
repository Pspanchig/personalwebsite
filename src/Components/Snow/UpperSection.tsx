import React from 'react';
import SnowGenInfo from './SnowGenInfo';
import SnowArticles from './SnowArticles';
import './css/UpperSection.css';

const UpperSection: React.FC = () => {
  return (
    <section className='UpperSection'>
        <SnowGenInfo />
        <SnowArticles />
    </section>
  );
}

export default UpperSection;