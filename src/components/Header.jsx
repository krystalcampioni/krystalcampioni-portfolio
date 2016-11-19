import React from 'react';
import imgPath from  '../images/logo.svg'
import styles from '../styles/main.scss';
import { Link, IndexLink } from 'react-router'

const ACTIVE = { borderBottom: '8px solid #FE0170' }

var Header = React.createClass({
  render: function(){
    return(
      <div>
      <header className={styles.header}>
        <div className={styles.main}>
          <Link to="/"><img src={imgPath} className={styles.header__logo} /></Link>
            <nav className={styles.menu}>
                <IndexLink activeStyle={ACTIVE} className={styles.menu__item} to="/">Home</IndexLink>
                <Link  activeStyle={ACTIVE} className={styles.menu__item} to="/portfolio">Portfolio</Link>
                <Link  activeStyle={ACTIVE} className={styles.menu__item} to="/about">About Me</Link>
                <Link  activeStyle={ACTIVE} className={styles.menu__item} to="/resume">Resume</Link>
                <Link  activeStyle={ACTIVE} className={styles.menu__item} to="/contact">Contact</Link>
            </nav>
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
