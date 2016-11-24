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

          <div className="entire-menu">
            <input type="checkbox" id="change-hamburguer" />
            <a className="hamburguer" href="#">
              <span></span>
              <label htmlFor="change-hamburguer"></label>
            </a>
            <div className="menu">
              <a href="#">Item</a>
              <a href="#">Item</a>
              <a href="#">Item</a>
              <a href="#">Item</a>
              <a href="#">Item</a>
              <p><a href="#">Item</a></p>
            </div>
          </div>
          <Link to="/"><img src={imgPath} className={styles.header__logo} /></Link>
            <nav className={styles.menu}>
                <IndexLink activeStyle={ACTIVE} className={styles.menu__item} to="/">Home</IndexLink>
                <Link  activeStyle={ACTIVE} className={styles.menu__item} to="/portfolio">Portfolio</Link>
                <Link  activeStyle={ACTIVE} className={styles.menu__item} to="/about">About Me</Link>
                <a className={styles.menu__item} href="https://br.linkedin.com/in/krystalcampioni/en" target="_blank">Resume</a>
                <a className={styles.menu__item} href="https://medium.com/@krystalcampioni" target="_blank">Blog</a>
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
