import React, {  useState } from 'react';
import './css/UcmoArticles.css';

const UcmoArticles: React.FC = () => {
  const [showFirst, setShowFirst] = useState<boolean>(false)

  function NextArticle(): void{
    const articles = document.querySelectorAll('.ArticleInstitutions') as NodeListOf<HTMLElement>
    
    if(showFirst === false){
      articles[0].style.width = '0%'
      articles[0].style.transform = 'rotate(-360deg)'
      articles[1].style.transform = 'rotate(0deg)'
      
      setTimeout(() => {        
        articles[1].style.display = 'flex'
        articles[0].style.display = 'none'      
        setTimeout(() => {       
          articles[1].style.width = '70%'
        }, 100);
        articles[1].style.color = 'black'
      }, 500);
    } else{
      articles[1].style.width = '0%'
      articles[1].style.transform = 'rotate(360deg)'
      articles[0].style.transform = 'rotate(0deg)'
      
      setTimeout(() => {        
        articles[0].style.display = 'flex'
        articles[1].style.display = 'none'
        setTimeout(() => {          
          articles[0].style.width = '70%'
        }, 100);
        articles[0].style.color = 'black'
      }, 500);
    }
    
    setShowFirst(!showFirst);
  }


  return (
    <section className='UcmoArticles'>
         <article className='MainTextInstitution'>
          <div className='EducationTitle'>Why UCM?</div>          
          <p>
            I chose the University of Central Missouri (UCM) for my software engineering degree because its curriculum seamlessly integrates theory with practical application. UCM emphasizes real-world development practices—such as agile methodologies, code reviews, and collaborative project work—that closely mirror industry standards. This hands-on approach allowed me to work on team projects in simulated software development environments, honing skills in version control, debugging, and system design while gaining experience with cutting-edge tools.
            The faculty at UCM are experts who prepare students for evolving technical challenges. Their mentorship guided me through complex algorithms, architectural design, and performance optimization, while smaller class sizes enabled personalized feedback and deep engagement. UCM’s collaborative culture also extended beyond the classroom through developer clubs and hackathons, reinforcing teamwork and adaptability.
            Overall, UCM provided a strong technical foundation, instilled best practices, and prepared me to tackle complex problems in a fast-paced software engineering career.
          </p>
         </article>
         <div className='ArticleContinaerInstitutions'>
          <article className='ArticleInstitutions' id='Article2'>
            <div className='EducationTitle InstitutionTitle'>Rankings</div>
            <div className='RankingList'>
                <ul>                
                  <li><p>#22 in Top Public Schools</p></li>
                  <li><p>#73 in Regional Universities Midwest</p></li>
                  <li><p>#203 in Engineering Programs category</p></li>
                  <li> <a href="https://amspub.abet.org/aps/name-search?searchType=institution&keyword=Central%20Misso"><p>Abet Acredited</p> </a><img src="https://www.millersville.edu/computerscience/img/abet-cac-2x.png" alt="Abet Img" /></li>
                </ul>
            </div>
          </article>
            <article className='ArticleInstitutions' id='Article3'>
              <div className='EducationTitle InstitutionTitle'>Mascot</div>
              <div className='Mascot'>
              <img src="https://www.ucmo.edu/offices/integrated-marketing-and-communications/internal-resources/fac-staff/ucm-branding/ucm-logos/images/mule-rt-b.png" alt="Mule Ucmo" />
              <h2>Mule!</h2>
              </div>
            </article>
            <button id='ShowNextInstitution' onClick={NextArticle}>Show next</button>
         </div>
    </section>
  );
}

export default UcmoArticles;