import React from 'react';
import imgPath from  '../images/krystal.png'
import styles from '../styles/main.scss';
import Typewriter from './TypeWritter'

var ChatBubble = React.createClass({
  render: function(){
    return(
    <div className={styles.main}>
      <div className={styles.chat__wrapper}>
        <h2 className={styles.chat__text}>
          <span>Hi, I’m Krystal and I</span>
            <Typewriter
              speed={18}
              tag="p"
              text={["work with front-end development", "like coding spaceships", "create awesome interfaces"]}
              randomSpeed={true} />

        </h2>
        <img src={imgPath} />
      </div>
    </div>
    )
  }
});

module.exports = ChatBubble;
