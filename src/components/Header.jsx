import React from 'react';
import imgPath from  '../images/logo.svg'
import styles from '../styles/main.scss';
import { Link, IndexLink } from 'react-router';
import Nav from './Nav';
import classNames from 'classnames';

var Header = React.createClass({

  getInitialState: function() {
    return {
      hamburguer: null,
    }
  },

  toggleMenu: function(){
    this.setState({
      hamburguer: !this.state.hamburguer
    });
  },

  render: function(){
    const classes = classNames({
      'hamburguer--is-open': this.state.hamburguer,
      'hamburguer': true
    });

    const slidingClasses = classNames({
      'hamburguer--is-open': this.state.hamburguer,
      'menuMobile': true
    });

    return(
      <div>
      <header className={styles.header}>
        <div className={styles.main}>

          <button className={classes} onClick={this.toggleMenu}>
            <span></span>
          </button>
          <div onClick={this.toggleMenu} className={slidingClasses}>
            <Nav />
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
