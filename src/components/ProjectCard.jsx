import React from 'react';
import styles from '../styles/main.scss';
import FlipMove from 'react-flip-move';
import { Link, IndexLink } from 'react-router';
import _ from 'lodash';


var ProjectCard = React.createClass({
  render: function(){
    return (
      <div className={styles.portfolio__imageWrapper}>
        <img src={`images/${this.props.thumb}`} className={styles.image} />
        <div className={styles.portfolio__description}>
           <div className={styles.portfolio__name}>{this.props.name}</div>
           <ul className={styles.category__list}>
            <li className={styles.category__list__item}>{this.props.category}</li>
           </ul>
           <div className={styles.button}>read more</div>
         </div>
       </div>
    )
  }
});

module.exports = ProjectCard;
