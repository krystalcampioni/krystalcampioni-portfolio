import React from 'react';
import styles from '../styles/main.scss';
import axios from 'axios';
import _ from 'lodash';

var Project = React.createClass({
  getInitialState: function() {
    return {
      projects: [],
      currentProject: this.props.params.project,
    }
  },

  componentDidMount: function() {
   var self = this;
   this.serverRequest =
     axios
       .get("./data.json")
       .then(function(result) {
         self.setState({
           currentProject:  _.filter(result.data.projects, ['link', self.props.params.project])
         });
       })
       .catch(function (error) {
         console.log(error);
       })
  },

  render: function(){
    console.log(this.state.currentProject[0].name)
    return(
    <div className={styles.main__internal}>
      <h2>{this.state.currentProject[0].name}</h2>
      <p>{this.state.currentProject[0].description}</p>
    </div>
    )
  }
});

module.exports = Project;
