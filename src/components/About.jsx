import React from 'react';
import styles from '../styles/main.scss';
import ChatBubble from './ChatBubble'
import Rocket from './Rocket'

var About = React.createClass({
  render: function(){
    return(
      <div className={styles.rocket__wrapper}>
        <h2>About</h2>
      </div>
    )
  }
});

module.exports = About;
