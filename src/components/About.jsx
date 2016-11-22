import React from 'react';
import styles from '../styles/main.scss';
import imgPath from  '../images/krystal.png'
import vr from  '../images/vr_thumb.jpg'
import { Link } from 'react-router'

var About = React.createClass({
  render: function(){
    return(
      <div className={styles.main__internal}>
        <div className={styles.about__bio}>
          <img src={imgPath} />
          <p className={styles.about__chat}>I’ve been working with Front-end Development and Design for 8 years now. During this time, I’ve had the opportunity to work on amazing projects for clients in Brazil, Canada and Europe</p>
        </div>
        <div className={styles.about__col}>
          <h2 className={styles.about__title}>Project Highlights</h2>
          <div className={styles.about__project}>
            <img src={vr} />
            <div className={styles.about__text}>I created 3D models for Summit Tech Montréal, for a Virtual Reality project presented at the Mobile World Conference 2016 in Barcelona.</div>
            <Link to="/portfolio" className={styles.about__link}>Back to portfolio</Link>
          </div>

          <div className={styles.about__project}>
            <img src={vr} />
            <div className={styles.about__text}>I created 3D models for Summit Tech Montréal, for a Virtual Reality project presented at the Mobile World Conference 2016 in Barcelona.</div>
            <Link to="/portfolio" className={styles.about__link}>Back to portfolio</Link>
          </div>

          <div className={styles.about__project}>
            <img src={vr} />
            <div className={styles.about__text}>I created 3D models for Summit Tech Montréal, for a Virtual Reality project presented at the Mobile World Conference 2016 in Barcelona.</div>
            <Link to="/portfolio" className={styles.about__link}>Back to portfolio</Link>
          </div>
        </div>
    </div>
    )
  }
});

module.exports = About;
