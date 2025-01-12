import React from 'react';
import './css/LowerSection.css';
import SkillsSnow from './SkillsUcmo';

const LowerSection: React.FC = () => {
  return (
    <section className='LowerSection'>
      <div className='LoweSectionHeader'>
        <h1>What did I learned at UCM?</h1>
      </div>
      <SkillsSnow/>
      <article>
        <h2>More about Software Engineering at the University of Central Missouri</h2>
        <p>The Software Engineering program at the University of Central Missouri offers students a robust educational experience that combines computer science and engineering principles to produce proficient software engineers. It is the first and only ABET-accredited undergraduate Software Engineering program in Missouri.</p>
        <p>The degree emphasizes mathematics and the use of engineering methods in software design. Courses focus on software processes and lifecycles, adopting a team-based approach to building software. Active learning methods, such as “learning by doing,” provide leadership opportunities, including software development team lead roles, for every student.</p>
        <p>Courses also include significant training in management areas, such as project planning, resource allocation, quality assurance, testing, metrics, maintenance and troubleshooting, configuration management, and personnel management.</p>
        <p>Find even more information at <a href="https://www.ucmo.edu/academics/programs/majors/chst/comp-sci-and-cybersecurity/computer-science/software-engineering-bs/index.php">UCM website</a></p>
      </article>
    </section>
  );
}

export default LowerSection;