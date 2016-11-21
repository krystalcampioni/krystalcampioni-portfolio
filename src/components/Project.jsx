import React from 'react';
import styles from '../styles/main.scss';
import axios from 'axios';
import _ from 'lodash';
import { Link } from 'react-router'

var Project = React.createClass({
  getInitialState: function() {
    return {
      projects: [],
      currentProject: {},
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
    if ( !this.state.currentProject[0] ) {
     return <div>Loading</div>
    }
    else {
      var projectImages = this.state.currentProject[0].gallery.map(function(image, index) {
        return (
          <img key={index} src={image} className={styles.project__image}/>
        );
      });

      return(
        <div className={styles.main__internal}>
          <div className={styles.project__description}>
            <h2>{this.state.currentProject[0].name}</h2>
            <p>{this.state.currentProject[0].description}</p>
            <Link to="/portfolio" className={styles.project__backLink}>Back to portfolio</Link>
          </div>
          <div className={styles.project__gallery}>
            {projectImages}
          </div>
      </div>
        )
    }
  }
});

module.exports = Project;
