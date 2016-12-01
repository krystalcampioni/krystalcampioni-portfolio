import React from 'react';
import styles from '../styles/main.scss';
import axios from 'axios';

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

      let languages = this.state.resume.languages.values.map(function(language) {
        return (
        <div key={language.id} className={styles.resume__languages_item}>
          {language.language.name}
          <span>{language.language.level}</span>
        </div>
        );
      });

      let positions = this.state.resume.positions.values.map(function(position, index) {
        return (
        <div key={index} className={styles.resume__wrapper}>
          <h5 className={styles.resume__date}>{position.startDate.month}/{position.startDate.year} -  {position.isCurrent ? "present" :  `${position.endDate.month}/${position.endDate.year}`} </h5>
          <h4 className={styles.resume__position}>{position.title}</h4>
          <h4 className={styles.resume__company}>{position.company.name}</h4>
          <p className={styles.resume__text}>{position.summary}</p>
          <hr />
        </div>
        );
      });

      let educations = this.state.resume.educations.values.map(function(education, index) {
        return (
        <div key={index} className={styles.resume__wrapper}>
          <h5 className={styles.resume__date}>{education.startDate.year} - {education.endDate.year} </h5>
          <h4 className={styles.resume__position}>{education.schoolName}</h4>
          <h4 className={styles.resume__degree}>{education.fieldOfStudy} - {education.degree}</h4>
          <p className={styles.resume__text}>{education.notes}</p>
          <hr />
        </div>
        );
      });

      let certifications = this.state.resume.certifications.values.map(function(certification) {
        return (
        <div key={certification.id} className={styles.resume__wrapper}>
          <h4 className={styles.resume__position}>{certification.name}</h4>
          <h4 className={styles.resume__degree}>{certification.school}</h4>
        </div>
        );
      });

      return(
      <div className={styles.main__internal}>
        <h2 className={styles.about__title}>Resume
          <a href="javascript:window.print()" className={styles.resume__print}>
            <svg className={styles.resume__print__icon}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 358V154c.3-.7.8-1.4 1-2.2C5.4 136.9 17.2 128 32.9 128h446.9c18.3 0 32.2 14 32.2 32.3v191.5c0 18.3-14 32.1-32.3 32.2H416v95c0 19.3-13.7 33-33 33H129c-19.4 0-33-13.6-33-33v-89.5-5.5H31.9c-13.8 0-25.5-8.4-30.1-21.4-.6-1.5-1.2-3.1-1.8-4.6zm383.8-69.7H128.4v191.4h255.4V288.3zm96.2-96.2c.1-17.3-14.3-31.9-31.6-32.1-17.5-.2-32.3 14.3-32.4 31.9-.1 17.3 14.3 31.9 31.6 32.2 17.4.2 32.3-14.5 32.4-32zM390 0c4.3 2 9 3.6 12.9 6.2 7.8 5.3 12.7 13.2 12.9 22.6.5 22.1.2 44.3.2 66.8h-31.9V32.2H128.2v63.4H96.3c-.1-1.6-.3-3.2-.3-4.8v-57c0-17.1 8.2-28 24.7-33 .5-.1.8-.5 1.2-.8H390z"/><path d="M160.2 351.6v-31.3h191.5v31.3H160.2zM319.8 384.4v31.3H160.3v-31.3h159.5z"/></svg>
            Print this resume
          </a>
        </h2>
        <div className={styles.resume__bio}>
          <img className={styles.resume__picture} src={this.state.resume.pictureUrl} />
          <h1 className={styles.resume__title}>{this.state.resume.formattedName}</h1>
          <h3 className={styles.resume__headline}>{this.state.resume.headline}</h3>
          <hr />
          <div className={styles.resume__contact}>
            <svg className={styles.resume__contact_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 563.2 469.7"><path d="M0 433.9V141.3c1.9 1.4 3.9 2.8 5.8 4.2 63.7 48.2 127.8 95.9 195.5 138.4 19.2 12 39.5 22.3 59.4 33.1 13.7 7.4 27.8 7.3 41.6.2 19.3-10 38.9-19.7 57.4-31.1 62.9-38.9 122-83.1 180.7-127.8 7.6-5.7 15.3-11.3 22.9-16.9v289.3c-.9 2.7-1.8 5.5-2.8 8.2-5.4 14.9-20.7 31-47.8 30.9-154.2-.3-308.4-.1-462.6-.1-2.6 0-5.1 0-7.7-.3C23.8 467.6 10.8 457.9 3 441c-1.1-2.4-2-4.7-3-7.1z"/><path d="M563.2 39v31.9c-1.9 1.3-3.9 2.6-5.8 4.1-61.5 48.4-123.3 96.4-188.9 139.1-21.6 14.1-44.5 26-67 38.6-13.3 7.4-27.1 7.4-40.4-.2-23-13.2-46.5-25.7-68.5-40.4C125.9 167.8 62.7 118.5 0 68.7v-33c1.4-3.1 2.5-6.4 4.1-9.4C13.8 7.9 29.4 0 49.9 0c154.4.1 308.8 0 463.3.1 2.2 0 4.4.1 6.6.3C540.5 2 556.9 15.9 562 36.1c.3 1 .8 2 1.2 2.9z"/></svg>
            {this.state.resume.emailAddress}
          </div>
          <div className={styles.resume__contact}>
            <svg className={styles.resume__contact_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 204v-27c1-6.2 2-12.4 3-18.7C15.3 84 74.8 21.1 148.1 5.1 157.7 3 167.4 1.7 177 0h30c9.6 1.7 19.5 2.6 28.9 5.1 75.2 20 123 67.8 143 143 2.5 9.4 3.5 19.2 5.1 28.9v27c-.3.6-.7 1.2-.8 1.8-2.6 23.3-9.7 45.5-18.8 67-31.8 75.3-75.9 143-129.3 204.6-11.7 13.4-23.8 26.5-40.1 34.7h-6c-14-7-24.8-17.8-35.1-29.2-47-51.9-85.3-109.8-117-172-13.1-25.7-24.3-52.1-31.4-80.1-2.2-8.9-3.7-17.9-5.5-26.8zm64-12.1c-.1 70.2 57.4 127.8 127.7 128.1 70.3.3 128.3-57.6 128.3-128 0-70.2-57.4-127.8-127.7-128.1C122 63.8 64 121.5 64 191.9z"/></svg>
            Sao Paulo, Brazil</div>
          <hr />
          <div className={styles.resume__languages}>{languages}</div>
          <hr />
          <h1 className={styles.resume__section_title}>Education</h1>
          {educations}

          <h1 className={styles.resume__section_title}>Certifications</h1>
          {certifications}

        </div>
        <div className={styles.resume__col}>
          <h1 className={styles.resume__section_title}>Work Experience</h1>
          <hr />
          {positions}
        </div>
      </div>
      )
    }
  }
});

module.exports = Portfolio;
