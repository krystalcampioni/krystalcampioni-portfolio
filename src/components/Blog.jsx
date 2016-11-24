import React from 'react';
import styles from '../styles/main.scss';
import { Link } from 'react-router'

import imgPath from  '../images/krystal.png'
import oil from  '../images/oil_thumb.jpg'
import d3 from  '../images/3d_thumb.jpg'
import svg from  '../images/svg.jpg'

var Blog = React.createClass({
  render: function(){
    return(
      <div>
        <h2 className={styles.about__title}>ARTICLES</h2>
          <p className={styles.about__subtitle}>From time to time, I write articles about code, design and 3D modeling. Here are the latest ones:</p>
          <div className={styles.about__project}>
            <img src={oil} />
            <div className={styles.about__text}>
              <b>Oiling the Color Wheel with Jade + Sass</b>
              One of the things that I found the hardest when I started working with design was finding...
            </div>
            <a href="https://journal.helabs.com/oiling-the-color-wheel-with-jade-sass-5688ceada87c" target="_blank" className={styles.about__link}>Read more</a>
          </div>

          <div className={styles.about__project}>
            <img src={d3} />
            <div className={styles.about__text}>
              <b>3D modeling for UI Designers - Part 1</b>
              Recently I've had the opportunity to work in an awesome project at HE:labs. It was an interactive isometric map...
            </div>
            <a href="https://journal.helabs.com/3d-modeling-for-ui-designers-3c59a75caad0" target="_blank" className={styles.about__link}>Read more</a>
          </div>

          <div className={styles.about__project}>
            <img src={svg} />
            <div className={styles.about__text}>
              <b>Alien Invasions, SVGs and CSS Animations</b>
              I have been a bit obsessed with SVGs and CSS animations lately, so I thought it could be a good idea to share my...
            </div>
            <a href="https://journal.helabs.com/alien-invasions-svgs-and-css-animations-d56c4d757209" target="_blank" className={styles.about__link}>Read more</a>
          </div>
      </div>
    )
  }
});

module.exports = Blog;
