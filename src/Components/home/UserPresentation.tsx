import React from 'react'
import '../Shared/css/General-Main.css'
import './css/UserPresentation.css'
import Education from './Education'
import AboutMe from './AboutMe'
import SocialNetworks from './SocialNetworks'

const UserPresentation: React.FC = () => {
  return (
    <section>
      <div className='DivContainers'>
        <div className='DivsDividerContainers' id='one'>
          <div className='UpperDiv'>
            <h1>Pablo S. Panchig</h1>
            <h3>Software Engineer ☻</h3>
          </div>
          <div className='LowerDiv'>
            <Education/>
          </div>
        </div>      
        <div className='DivsDividerContainers' id='two'>
          <div className='LowerDiv'>
          <AboutMe/>
          </div>
          <div className='UpperDiv'>
          <SocialNetworks/>
          </div>
            
        </div>      
      </div>

    </section>
  )
}

export default UserPresentation