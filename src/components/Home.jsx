import React from 'react';
import styles from '../styles/main.scss';
import ChatBubble from './ChatBubble'
import Rocket from './Rocket'

var Home = React.createClass({
  render: function(){
    return(
      <div className={styles.rocket__wrapper}>
        <ChatBubble />
        <Rocket />
      </div>
    )
  }
});

module.exports = Home;
