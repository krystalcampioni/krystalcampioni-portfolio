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

      var projectIframe = this.state.currentProject[0].iframe ? <div className={styles.flexVideo}><iframe src={this.state.currentProject[0].iframe} /></div> : null;
      var projectExternalLink = this.state.currentProject[0].external_link ? <a href={this.state.currentProject[0].external_link} className={styles.button}>{this.state.currentProject[0].external_cta}</a> : null;

      return(
        <div className={styles.main__internal}>
          <div className={styles.project__description}>
            <Link to="/portfolio" className={styles.project__backLink}>Back to portfolio</Link>
            <h2>{this.state.currentProject[0].name}</h2>
            <p>{this.state.currentProject[0].description}</p>
            {projectExternalLink}
          </div>
          <div className={styles.project__gallery}>
            {projectImages}
            {projectIframe}
          </div>
      </div>
        )
    }
  }
});

module.exports = Project;
