import React from 'react';
import styles from '../styles/main.scss';
import axios from 'axios';
import FlipMove from 'react-flip-move';
import { Link, IndexLink } from 'react-router';
import _ from 'lodash';

var Portfolio = React.createClass({
  getInitialState: function() {
    return {
      projects: [],
      allProjects: []
    }
  },

  componentDidMount: function() {
   var self = this;
   this.serverRequest =
     axios
       .get("./data.json")
       .then(function(result) {
         console.log(result.data.projects);
         self.setState({
           projects: result.data.projects,
           allProjects: result.data.projects
         });
       })
       .catch(function (error) {
         console.log(error);
       })
  },

  filterBy: function(val){
    this.setState({
      projects: _.filter(this.state.allProjects, ['category', val])
    });
  },

  showAll: function(){
    this.setState({
      projects: this.state.allProjects
    })
  },

  render: function(){
    var projectCards = this.state.projects.map(function(project, index) {
      return (
        <Link to={`projects/${project.link}`} key={project.link} className={styles.portfolio__item}>
        <div className={styles.portfolio__imageWrapper}>
          <img src={`images/${project.thumb}`} className={styles.image} />
          <div className={styles.portfolio__description}>
             <div className={styles.portfolio__name}>{project.name}</div>
             <ul className={styles.category__list}>
              <li className={styles.category__list__item}>{project.category}</li>
             </ul>
             <div className={styles.button}>read more</div>
           </div>
         </div>
         </Link>
      );
    });

    return(
    <div className={styles.main__internal}>
      <h2>Portfolio</h2>
        <button className={styles.button__filter} onClick={this.showAll}> All </button>
        <button className={styles.button__filter} onClick={() => this.filterBy('Frontend')}>Frontend</button>
        <button className={styles.button__filter} onClick={() => this.filterBy('Games')}>Games and VR</button>
        <button className={styles.button__filter} onClick={() => this.filterBy('Design')}>Design</button>
        <FlipMove easing="ease-in-out">
          {projectCards}
         </FlipMove>
    </div>
    )
  }
});

module.exports = Portfolio;
