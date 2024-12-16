import './css/Education.css'
import SnowLogo from './imgs/SnowLogo.png'
import UcmoLogo from './imgs/ucmoLogo.png'

const Education: React.FC = () => {

  function moveScrollBar(direction: boolean): void{ 
      const scrollbar = document.getElementById('scrollbarEd') as HTMLDivElement;
      if(direction === true){
        scrollbar.scrollTo({ top: 0, behavior: 'smooth' });;
      } else{
        scrollbar.scrollTo({ top: scrollbar.scrollHeight, behavior: 'smooth' });;
        
      }
  }

  return (
    <article className='Education'>
        <div className='EducationTitle'>
            Education
        </div>
        <div className='EducationInformationContainer' id='scrollbarEd'>
          <div className='EducationInformation' onMouseOver={()=> moveScrollBar(true)}>
            <div className='EducationItem'>
              <div className='Text'>
                <h2>Snow College</h2>
                <p>Ephraim, Utah</p>
                <p>Enrolled as Software engineer</p>
                <p>Associates AS</p>
              </div>
              <img src={SnowLogo} alt="Snow College Img" />              
            </div>
            <u><span>click here for more information</span></u>
          </div>        

          <div className='EducationInformation'onMouseOver={()=> moveScrollBar(false)} id='UcmoEd'>
            <div className='EducationItem'>
              <div className='Text'>
                <h2>University of Central Missouri</h2>
                <p>Warrensburg, Missorui</p>
                <p>Enrolled as Software engineer</p>
                <p>Bachelor B.S</p>
              </div>
              <img src={UcmoLogo} alt="Snow College Img" />
            </div>
            <u><span>click here for more information</span></u>

          </div>
        </div>
    </article>
  );
}

export default Education;