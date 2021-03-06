import React from 'react';
import styles from '../styles/main.scss';

var Rocket = React.createClass({
  render: function(){
    return(
      <div className={styles.rocket}>
        <ul className={styles.rocket__windows}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul className={styles.rocket__frontFin}>
          <li></li>
          <li></li>
        </ul>
        <div className={styles.rocket__body}></div>
        <div className={styles.rocket__nose}></div>
        <div className={styles.rocket__jetsCover}></div>
        <ul className={styles.flames}>
          <li className={styles.flames__red}></li>
          <li className={styles.flames__orange}></li>
          <li className={styles.flames__yellow}></li>
          <li className={styles.flames__white}></li>
        </ul>
        <ul className={styles.rocket__fins}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul className={styles.rocket__jets}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    )
  }
});

module.exports = Rocket;
