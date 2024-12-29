import React from 'react';
import './css/SnowGenInfo.css'; 
import snowLogo from'../home/imgs/SnowLogo.png';

const SnowGenInfo: React.FC = () => {
  return (
    <article className="SnowGenInfo">
      <img src={snowLogo} alt="snow logo" />
      <h1>Snow College</h1>    

      <section>
        <h3>Attendece time</h3>
        <p>August 2022 - December 2023</p>      
        <h3>Degree Earned</h3>
        <p>Associates of Science</p>
        <h3>Location</h3>
        <p>150 College Av, Ephraim, Utah</p>
      </section>
      
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1964.0071354274342!2d-111.58130285402119!3d39.36055359497651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874c718e6e1a2073%3A0x57eb0289350243f!2sSnow%20College!5e1!3m2!1sen!2sus!4v1735427989337!5m2!1sen!2sus"
          width="350"
          height="205"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      
</article>

  );
}

export default SnowGenInfo;

