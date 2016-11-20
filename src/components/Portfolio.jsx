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

  filterBy: function(){
    this.setState({
      projects: _.filter(this.state.projects, ['category', 'Frontend'])
    });
  },

  showAll: function(){
    this.setState({
      projects: this.state.allProjects
    })
  },

  render: function(){
    var projectCards = this.state.projects.map(function(result, index) {
      return (
        <div key={result.link}>
          <Link to={`projects/${result.link}`}>Link</Link>
          <h1>{result.name}</h1>
        </div>
      );
    });

    return(
    <div className={styles.main__internal}>
      <h2>Portfolio</h2>
        <button onClick={this.showAll}> All </button>
        <button onClick={this.filterBy}>Frontend</button>
        <FlipMove easing="ease-in-out">
          {projectCards}
         </FlipMove>
    </div>
    )
  }
});

module.exports = Portfolio;
