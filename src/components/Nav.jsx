import React from 'react';
import styles from '../styles/main.scss';
import { Link, IndexLink } from 'react-router';

const ACTIVE = { borderBottom: '8px solid #FE0170' }

var Nav = React.createClass({
  render: function(){
    return(
      <div>
        <IndexLink activeStyle={ACTIVE} className={styles.menu__item} to="/">Home</IndexLink>
        <Link  activeStyle={ACTIVE} className={styles.menu__item} to="/portfolio">Portfolio</Link>
        <Link  activeStyle={ACTIVE} className={styles.menu__item} to="/about">About Me</Link>
        <a className={styles.menu__item} href="https://br.linkedin.com/in/krystalcampioni/en" target="_blank">Resume</a>
        <a className={styles.menu__item} href="https://medium.com/@krystalcampioni" target="_blank">Blog</a>
        <Link  activeStyle={ACTIVE} className={styles.menu__item} to="/contact">Contact</Link>
      </div>
    )
  }
});

module.exports = Nav;
