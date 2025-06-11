import React, { useState } from 'react';
import pic_1 from './imgs/Myself.jpg'
import pic_2 from './imgs/img2.jpg'
import pic_3 from './imgs/img3.jpg'
import './css/GDescription.css'
import { Link } from 'react-scroll';

const GeneralDescription: React.FC = () => {

  const imgs = [pic_1, pic_2, pic_3];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function changeImage(index: number) {
     const buttons = document.querySelectorAll('.ImgButtonSelector') as NodeListOf<HTMLButtonElement>;  
    //  const imgs = document.querySelectorAll('.PhotosContainer img') as NodeListOf<HTMLImageElement>;  

     if(index !== currentIndex) {
      buttons[currentIndex].style.backgroundColor = '#D7D7D7';
      buttons[currentIndex].style.border = '2px solid black';
      
      buttons[index].style.backgroundColor = '#FFFF00';
      buttons[index].style.border = '2px solid #F59A23';

      // imgs[currentIndex].style.transform = 'rotateY(9deg)';
      // setTimeout(() => {        
        setCurrentIndex(index);
      //   imgs[index].style.transform = 'rotateY(360deg)';
      // }, 1000);

     }
  }


  return (
    <section className='GeneralDescription'>
      <div className='GeneralInformationContainer'>
        <div className='GeneralInformationGD'>
          <div className='TextDescription'>
            <h1>Pablo S. Panchig</h1>
            <div className='ShortDescription'>
              <h2>Software engineer && Full stack developer</h2>
              <h2>Dreamer with a passion for innovation</h2>
            </div>
            <div className='YearCountry'>
              <h2>21 Years old</h2>
              <h2>Ecuadorian</h2>
            </div>
            <Link to='BiographyTextHeader' className='LinkToText' smooth={true} duration={500}><p>Read more</p></Link>

          </div>        
        </div>
        <div className='ProfilePicture'>
          <div className='PhotosContainer'>
            <img src={imgs[currentIndex]} onClick={() => changeImage(currentIndex > 1 ? 0 : currentIndex + 1)} alt="ProfilePhotos" />
            <div className='ImgSelector'>
              <div className='ImgSelectorContainer'>
                <button className='ImgButtonSelector' onClick={() => changeImage(0)}></button>
                <button className='ImgButtonSelector' onClick={() => changeImage(1)} style={{backgroundColor: '#D7D7D7', border: '2px solid black'}}></button>
                <button className='ImgButtonSelector' onClick={() => changeImage(2)} style={{backgroundColor: '#D7D7D7', border: '2px solid black'}}></button>          
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GeneralDescription;