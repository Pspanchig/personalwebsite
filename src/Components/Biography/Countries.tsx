import React from 'react';
import './css/Countries.css'
import ECU from './imgs/ECUFlag.svg'
import USA from './imgs/USAFlag.svg'

const Countries: React.FC = () => {
  return (
    <section className='Countries'>
        <div className='CountriesContainer'>
            <div className='CountriesTitle'>
                <h2>Cities I've lived in</h2>
            </div>
            <div className='CitiesContainer'>
                <div className='CityElement'>
                    <h3>2004 - 2022</h3>
                    <img src={ECU} alt="Ecuador Flag" />
                    <h3>Quito, Ecuador</h3>
                </div>
                <div className='CityElement'>
                    <h3>Ephraim, Utah</h3>
                    <img src={USA} alt="USA Flag" />
                    <h3>2022 - 2023</h3>
                </div>
                <div className='CityElement'>
                    <h3>2024 - Now</h3>
                    <img src={USA} alt="USA Flag" />
                    <h3>Warrensburg, Missouri</h3>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Countries;