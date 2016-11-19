import React from 'react';
import imgPath from  '../images/krystal.png'
import styles from '../styles/main.scss';

var Contact = React.createClass({
  render: function(){
    return(
    <div className={styles.main__internal}>
      <h2>Contact</h2>
    </div>
    )
  }
});

module.exports = Contact;
