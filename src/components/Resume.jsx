import React from 'react';
import styles from '../styles/main.scss';
import axios from 'axios';
import _ from 'lodash';

var Portfolio = React.createClass({
  getInitialState: function() {
    return {
      resume: []
    }
  },

  componentDidMount: function() {
   var self = this;
   this.serverRequest =
     axios
       .get("./resume.json")
       .then(function(result) {
         self.setState({
           resume: result.data
         });
       })
       .catch(function (error) {
         console.log(error);
       })
  },

  render: function(){
    if(this.state.resume.length === 0){
      return <h1>"loading"</h1>
    }
    else {
      console.log(this.state.resume)

      let certifications = this.state.resume.certifications.values.map(function(certification) {
        return (
        <div key={certification.id} className={styles.resume__certification}>{certification.name}</div>
        );
      });

      let positions = this.state.resume.positions.values.map(function(position, index) {
        return (
        <div key={index} className={styles.resume__certification}>
          <h4>{position.company.name}</h4>
          <p className={styles.resume__text}>{position.summary}</p>
        </div>
        );
      });

      return(
      <div className={styles.main__internal}>
        <h2 className={styles.about__title}>Resume</h2>
        <div className={styles.about__bio}>
          <img src={this.state.resume.pictureUrl} />
          <h1 className={styles.resume__title}>{this.state.resume.formattedName}</h1>
          <h3>{this.state.resume.headline}</h3>
          <div className={styles.resume__contact}>{this.state.resume.emailAddress}</div>
          <div className={styles.resume__contact}>Sao Paulo, Brazil</div>
        </div>
        <div className={styles.about__col}>
          {positions}
          <hr />
          {certifications}
        </div>
      </div>
      )
    }
  }
});

module.exports = Portfolio;
