import React from 'react';
import imgPath from  './logo.svg'
import styles from '../styles/main.scss';

var Header = React.createClass({
  render: function(){
    return(
      <header className={styles.header}>
        <div className={styles.main}>
          <h1>logo</h1>
          <img src={imgPath} />
      </div>
    </header>
    )
  }
});

module.exports = Header;
