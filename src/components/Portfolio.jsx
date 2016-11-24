import React from 'react';
import styles from '../styles/main.scss';
import axios from 'axios';
import FlipMove from 'react-flip-move';
import { Link, IndexLink } from 'react-router';
import _ from 'lodash';
import ProjectCard from './ProjectCard'

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
    let projectCards = this.state.projects.map(function(project, index) {
      return (
        <Link to={`projects/${project.link}`} key={project.link} className={styles.portfolio__item}>
        <ProjectCard
          name={project.name}
          thumb={project.thumb}
          category={project.category}
          />
         </Link>
      );
    });

    return(
    <div className={styles.main__internal}>
      <h2 className={styles.about__title}>Portfolio</h2>
      <div className={styles.portfolio__filterWrapper}>
        <button autoFocus={focus} className={styles.portfolio__filter} onClick={this.showAll} autofocus> All </button>
        <button className={styles.portfolio__filter} onClick={() => this.filterBy('Frontend')}>Frontend</button>
        <button className={styles.portfolio__filter} onClick={() => this.filterBy('Games')}>Games and VR</button>
        <button className={styles.portfolio__filter} onClick={() => this.filterBy('Design')}>Design</button>
      </div>
      <FlipMove easing="ease-in-out">
          {projectCards}
        </FlipMove>
    </div>
    )
  }
});

module.exports = Portfolio;
