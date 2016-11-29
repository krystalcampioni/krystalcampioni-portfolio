import React from 'react';
import styles from '../styles/main.scss';
import axios from 'axios';
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
       .get("./resume.json")
       .then(function(result) {
         console.log(result)
         self.setState({
           projects: result.data.projects,
           allProjects: result.data.projects
         });
       })
       .catch(function (error) {
         console.log(error);
       })
  },

  render: function(){
    return(
    <div className={styles.main__internal}>
      <h2 className={styles.about__title}>Resume</h2>
    </div>
    )
  }
});

module.exports = Portfolio;
