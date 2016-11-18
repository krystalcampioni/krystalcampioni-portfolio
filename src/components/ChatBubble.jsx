import React from 'react';
import imgPath from  '../images/krystal.png'
import styles from '../styles/main.scss';

var ChatBubble = React.createClass({
  render: function(){
    return(
    <div className={styles.main}>
      <div className={styles.chat__wrapper}>
        <h2 className={styles.chat__text}>
          <span>Hi, I’m Krystal and I</span>
          work with front-end development
        </h2>
        <img src={imgPath} />
      </div>
    </div>
    )
  }
});

module.exports = ChatBubble;
