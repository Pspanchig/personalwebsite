import React, { useEffect, useRef } from 'react';
import SnowGenInfo from './SnowGenInfo';
import SnowArticles from './SnowArticles';
import './css/UpperSection.css';

const UpperSection: React.FC = () => {
  const upperSection = useRef<HTMLElement>(null)

  useEffect(()=>{
    console.log('Working')
    const scrollToTop = () =>{
      upperSection.current?.scrollTo({top: 0, behavior: 'smooth'})      
      console.log(upperSection.current?.scrollTop)
    }
    scrollToTop()
  }, [])

  return (
    <section className='UpperSection' ref={upperSection}>
        <SnowGenInfo />
        <SnowArticles />
    </section>
  );
}

export default UpperSection;