import React from 'react';
import styles from '../styles/main.scss';
import FlipMove from 'react-flip-move';
import { Link, IndexLink } from 'react-router';
import _ from 'lodash';


var ProjectCard = React.createClass({
  render: function(){
    return (
      <div className={styles.portfolio__imageWrapper}>
        <img src={this.props.thumb} className={styles.image} />
        <div className={styles.portfolio__description}>
           <div className={styles.portfolio__name}>{this.props.name}</div>
           <div className={styles.portfolio__category}>{this.props.category}</div>
           <div className={styles.portfolio__readMore}>read more</div>
         </div>
       </div>
    )
  }
});

module.exports = ProjectCard;
