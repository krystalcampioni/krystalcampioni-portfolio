import React from 'react';
import styles from '../styles/main.scss';
import axios from 'axios';

var Portfolio = React.createClass({
  getInitialState: function() {
    return {
      projects: []
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
           jobs: result.data.projects
         });
       })
       .catch(function (error) {
         console.log(error);
       })
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function(){
    return(
    <div className={styles.main__internal}>
      <h2>Portfolio</h2>
    </div>
    )
  }
});

module.exports = Portfolio;
