import React from 'react';
import styles from '../styles/main.scss';
import axios from 'axios';
import _ from 'lodash';

var Project = React.createClass({
  getInitialState: function() {
    return {
      currentProject: this.props.params,
    }
  },

  componentDidMount: function() {
   var self = this;
   this.serverRequest =
     axios
       .get("./data.json")
       .then(function(result) {
         self.setState({
           projects: result.data.projects
         });
       })
       .catch(function (error) {
         console.log(error);
       })
  },

  render: function(){

    return(
    <div className={styles.main__internal}>
      <h2>Project</h2>
    </div>
    )
  }
});

module.exports = Project;
