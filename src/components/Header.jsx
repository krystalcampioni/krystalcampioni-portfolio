import React from 'react';
import imgPath from  '../images/logo.svg'
import styles from '../styles/main.scss';
import { Link, IndexLink } from 'react-router';
import Nav from './Nav';

var Header = React.createClass({
  render: function(){
    return(
      <div>
      <header className={styles.header}>
        <div className={styles.main}>

          <div className="entire-menu">
            <input type="checkbox" id="change-hamburguer" />
            <a className="hamburguer" href="#">
              <span></span>
              <label htmlFor="change-hamburguer"></label>
            </a>
            <div className="menuMobile">
              <Nav />
            </div>
          </div>
          <IndexLink to="/"><img src={imgPath} className={styles.header__logo} /></IndexLink>
          <nav className={styles.menuDesktop}><Nav /></nav>
        </div>
      </header>
      <div className={styles.rocket__wrapper}>
       {this.props.children}
        <ul className={styles.stars}>
          <li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li><li> </li>
        </ul>
      </div>
     </div>
    )
  }
});

module.exports = Header;
