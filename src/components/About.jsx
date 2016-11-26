import React from 'react';
import styles from '../styles/main.scss';

import { Link } from 'react-router'
import Blog from './Blog'


import imgPath from  '../images/krystal.png'
import vr from  '../images/vr_thumb.jpg'
import ms from  '../images/ms_thumb.jpg'
import espn from  '../images/espn_thumb.jpg'

var About = React.createClass({
  render: function(){
    return(
      <div className={styles.main__internal}>
        <div className={styles.about__bio}>
          <img src={imgPath} />
          <p className={styles.about__chat}>I’ve been working with Front-end Development and Design for 8 years now. During this time, I’ve had the opportunity to work on amazing projects for clients in Brazil, Canada and Europe</p>
            <div className={styles.about__tech}>
              <hr />
              <h2 className={styles.about__title}>Tech that I love</h2>
              <ul className={styles.about__tech1}>
                <li>Github</li>
                <li>React</li>
                <li>Angular</li>
                <li>Sass</li>
              </ul>
              <ul className={styles.about__tech2}>
                <li>Bourbon</li>
                <li>Sketch</li>
                <li>Adobe CC</li>
                <li>Gulp</li>
              </ul>
            </div>
      </div>
        <div className={styles.about__col}>
          <hr className={styles.hideForDesktop}/>
          <h2 className={styles.about__title}>Project Highlights</h2>
          <div className={styles.about__project}>
            <img src={vr} />
            <div className={styles.about__text}>I created 3D models for Summit Tech Montréal, for a Virtual Reality project presented at the Mobile World Conference 2016 in Barcelona.</div>
            <a href="http://www2.summit-tech.ca/vr/" className={styles.about__link} targer="_blank" >Read about the project</a>
          </div>

          <div className={styles.about__project}>
            <img src={ms} />
            <div className={styles.about__text}>I designed the interface and characters of the game Monster Crusher, launched by Gamma Play. The game currently has more than 50k downloads and 4.4 stars in Google Play.</div>
            <Link to="/projects/monster" className={styles.about__link}>Read about the project</Link>
          </div>

          <div className={styles.about__project}>
            <img src={espn} />
            <div className={styles.about__text}>I designed and implemented the responsive interface of the soccer website of ESPN Brazil, the ESPN FC, for HE:labs</div>
            <Link to="/projects/espn" className={styles.about__link}>Read about the project</Link>
          </div>

          <hr />
          <h2 className={styles.about__title}>Talk to me in</h2>
          <div className={styles.about__languages}>
            <h3>Portuguese 🇧🇷</h3>
            I’m Brazilian and a native speaker
          </div>

          <div className={styles.about__languages}>
            <h3>English 🇬🇧</h3>
            I might have a slight accent but i'm fluent
          </div>

          <div className={styles.about__languages}>
            <h3>French 🇫🇷</h3>
            If you’re patient, we can understand each other
          </div>

          <hr />
          <Blog />
        </div>
    </div>
    )
  }
});

module.exports = About;
