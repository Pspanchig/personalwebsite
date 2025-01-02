import React from 'react';
import './css/SnowArticles.css';
const SnowArticles: React.FC = () => {
  return (
    <section className='SnowArticles'>
         <article className='MainTextInstitution'>
          <div className='EducationTitle'>Why Snow?</div>          
          <p>I chose Snow College for my first two years of education in software engineering
             because it offered the ideal blend of academic challenge and a nurturing campus
              atmosphere. From the moment I set foot on campus, I sensed the tight-knit 
              community that thrives in smaller class settings. This close environment made 
              it easy to interact with professors, who were genuinely interested in helping 
              me succeed. Their mentorship not only strengthened my foundational coding skills
              and problem-solving abilities, but also inspired me to explore new areas of tech 
              with confidence and curiosity.

              Another reason Snow College stood out is its practical, hands-on approach. Rather 
              than just memorizing theory, I worked on real-world projects that helped me 
              understand the bigger picture of software development. This approach, paired 
              with the supportive culture among fellow students, fostered a sense of teamwork 
              that’s often missing in large, impersonal universities. On top of that, 
              the beautiful surroundings and smaller campus helped me stay focused and motivated, 
              while still offering enough activities and events to round out my college experience.
              Ultimately, Snow College gave me both the technical grounding and personal growth 
              I needed to take the next steps in my career as a software engineer.
          </p>
         </article>
         <div className='ArticleContinaerInstitutions'>
          <article className='ArticleInstitutions' id='Article2'>
            <div className='EducationTitle InstitutionTitle'>Rankings</div>
            <div className='RankingList'>
                <ul>                
                  <li><p>#33 in Regional Colleges West</p></li>
                  <li><p>#11 in Top Public Schools</p></li>
                  <li><p>#236-286 in Engineering Programs </p></li>
                  <li> <a href="https://amspub.abet.org/aps/name-search?searchType=institution&keyword=Snow%20college"><p>Abet Acredited</p> </a><img src="https://www.millersville.edu/computerscience/img/abet-cac-2x.png" alt="Abet Img" /></li>
                </ul>
            </div>
          </article>
            <article className='ArticleInstitutions' id='Article3'>
              <div className='EducationTitle InstitutionTitle'>Mascot</div>
              <div className='Mascot'>
              <img src="https://i.pinimg.com/originals/52/2e/5a/522e5a1a82af633116221954f56bca3a.jpg" alt="badgerSnow" />
              <h2>Badger!</h2>
              </div>
            </article>
            <button id='ShowNextInstitution'>Show next</button>
         </div>
    </section>
  );
}

export default SnowArticles;