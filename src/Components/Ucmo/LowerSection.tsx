import React from 'react';
import './css/LowerSection.css';
import SkillsSnow from './SkillsSnow';

const LowerSection: React.FC = () => {
  return (
    <section className='LowerSection'>
      <div className='LoweSectionHeader'>
        <h1>What Did I learned at UCM?</h1>
      </div>
      <SkillsSnow/>
      <article>
        <h2>More about  Software Engineering at Snow College</h2>
        <p>The Snow College Software Engineering program provides students with an educational experience that builds upon traditional computer science and engineering and produces software engineers that create high-quality software in a systematic, controlled, and efficient manner. This is accomplished in the following ways:</p>
        <p>The degree has a strong emphasis on mathematics and use of engineering methods in software design.
          Courses place an emphasis on software processes and lifecycles and utilize a team approach to building software with active learning (“learning by doing”) which also provides leadership opportunities, such as software development team lead roles, for every student.
        </p>
        <p>Courses include significant learning in management areas such as project planning, resource allocation, quality assurance, testing, metrics, maintenance and troubleshooting, configuration management and personnel management.</p>
        <p>Find even more information at <a href="https://www.snow.edu/academics/science_math/engineering/se/">Snow College website</a></p>
      </article>
    </section>
  );
}

export default LowerSection;