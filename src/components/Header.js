import React from 'react';
import imgPath from  '../images/logo.svg'
import styles from '../styles/main.scss';

var Header = React.createClass({
  render: function(){
    return(
      <header className={styles.header}>
        <div className={styles.main}>
          <img src={imgPath} className={styles.header__logo} />
      </div>
    </header>
    )
  }
});

module.exports = Header;
