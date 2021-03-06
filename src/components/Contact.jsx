import React from 'react';
import imgPath from  '../images/krystal.png'
import styles from '../styles/main.scss';

var Contact = React.createClass({
  render: function(){
    return(
    <div className={styles.main__internal}>
      <h2 className={styles.about__title}>Get in touch</h2>
      <h2 className={styles.social__email}><a href="mailto:hello@krystalcampioni.com">hello@krystalcampioni.com</a></h2>
      <ul className={styles.social}>
          <li><a href="http://codepen.io/krystalcampioni/" target="_blank"><img src="images/socialbox/codepen.jpg" className={styles.social__image}/></a></li>
          <li><a href="https://github.com/krystalcampioni" target="_blank"><img src="images/socialbox/github.jpg" className={styles.social__image}/></a></li>
          <li><a href="https://www.linkedin.com/in/krystalcampioni" target="_blank"><img src="images/socialbox/linkedin.jpg" className={styles.social__image}/></a></li>
          <li><a href="http://www.twitter.com/krystalcampioni" target="_blank"><img src="images/socialbox/twitter.jpg" className={styles.social__image}/></a></li>
          <li><a href="https://dribbble.com/krystalcampioni" target="_blank"><img src="images/socialbox/dribbble.jpg" className={styles.social__image}/></a></li>
          <li><a href="https://medium.com/@krystalcampioni" target="_blank"><img src="images/socialbox/medium.jpg" className={styles.social__image}/></a></li>
        </ul>
    </div>
    )
  }
});

module.exports = Contact;
