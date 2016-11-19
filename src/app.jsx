// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';
import styles from './styles/main.scss';
import Header from './components/Header';
import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>It Works!</h1>
        <p>This React project just works including <span className={styles.header}>module</span> local styles.</p>
        <p>Global bootstrap css import works too as you can see on the following button.</p>
        <p><a href="/" className={styles.rocket}>Enjoy!</a></p>
      </div>
    )
  }
}
