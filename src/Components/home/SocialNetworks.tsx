import React from 'react';
import './css/SocialN.css'
import git from './imgs/gitlogo.svg'
import linkedin from './imgs/linkedin-svgrepo-com.svg'
import instagram from './imgs/instagram-1-svgrepo-com.svg'

const SocialNetworks: React.FC = () => {
  return (
    <article className='SocialNetwork'>
        <h2>Social network</h2>
        <p>you can find me on my social networks so take a look</p>
        <div className='SNImgContainer'>
            <a href="https://github.com/Pspanchig/">
            <img src={git} alt="github logo" /></a>
            <a href="https://www.instagram.com/panchigsantiago/">
            <img src={instagram} alt="instagram logo" /></a>
            <a href="https://www.linkedin.com/in/pablo-panchig-35a532241/">
            <img src={linkedin} alt="linkedin logo" /></a>
            
        </div>
    </article>
  );
}

export default SocialNetworks;