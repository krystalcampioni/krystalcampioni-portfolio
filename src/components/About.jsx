import React from 'react';
import styles from '../styles/main.scss';
import imgPath from  '../images/krystal.png'

var About = React.createClass({
  render: function(){
    return(
      <div className={styles.main__internal}>
        <h2>About</h2>
          <div className={styles.about__bio}>
            <img src={imgPath} />
            <p className={styles.about__text}>Hello there! I’m Krystal.<br/>
            I’ve been working with Front-end Development and Design for 8 years now. During this time, I’ve had the opportunity to work on the design and development of projects for clients in Brazil, Canada and Europe</p>
          </div>
    </div>
    )
  }
});

module.exports = About;
