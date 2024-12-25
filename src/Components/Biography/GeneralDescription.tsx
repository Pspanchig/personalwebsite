import React from 'react';
import pic_1 from './imgs/Myself.jpg'
import './css/GDescription.css'

const GeneralDescription: React.FC = () => {
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
              <h2>20 Years old</h2>
              <h2>Ecuadorian</h2>
            </div>
            <a href="#BiographyTextHeader">
            <button>Read more</button>
            </a>
          </div>        
        </div>
        <div className='ProfilePicture'>
          <div className='PhotosContainer'>
            <img src={pic_1} alt="MyPhoto-1" />
            <div className='ImgSelector'>
              <div className='ImgSelectorContainer'>
                <button className='ImgButtonSelector'></button>
                <button className='ImgButtonSelector' style={{backgroundColor: '#D7D7D7', border: '2px solid black'}}></button>
                <button className='ImgButtonSelector' style={{backgroundColor: '#D7D7D7', border: '2px solid black'}}></button>          
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GeneralDescription;