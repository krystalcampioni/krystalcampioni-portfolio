import React from 'react';
import imgPath from  '../images/logo.svg'
import styles from '../styles/main.scss';
import { Link } from 'react-router'

var Header = React.createClass({
  render: function(){
    return(
      <div>
      <header className={styles.header}>
        <div className={styles.main}>
          <Link to="/"><img src={imgPath} className={styles.header__logo} /></Link>
            <nav className={styles.menu}>
                <Link className={styles.menu__item} to="/portfolio">Portfolio</Link>
                <Link className={styles.menu__item} to="/about">About Me</Link>
                <Link className={styles.menu__item} to="/resume">Resume</Link>
                <Link className={styles.menu__item} to="/contact">Contact</Link>
            </nav>
        </div>
      </header>
       {this.props.children}
     </div>
    )
  }
});

module.exports = Header;
