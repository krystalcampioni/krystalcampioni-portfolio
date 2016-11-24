import React from 'react';
import imgPath from  '../images/krystal.png'
import styles from '../styles/main.scss';
import Typewriter from './TypeWritter';
import { Link } from 'react-router';

var ChatBubble = React.createClass({
  render: function(){
    return(
    <Link to="/about" className={styles.chat__link}>
      <div className={styles.main}>
        <div className={styles.chat__wrapper}>
          <h2 className={styles.chat__text}>
            <span>Hi, I’m Krystal and I</span>
              <Typewriter
                speed={18}
                tag="p"
                text={["work with frontend development", "work with web design","like coding spaceships"]}
                randomSpeed={true} />
          </h2>
          <img src={imgPath} />
        </div>
      </div>
    </Link>
    )
  }
});

module.exports = ChatBubble;
