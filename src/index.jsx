import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';
import Home from './home.jsx';
import './styles/main.scss';

render( <AppContainer><Home/></AppContainer>, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept('./app.jsx', () => {
    const App = require('./app.jsx').default;
    render(
      <AppContainer>
        <Home/>
      </AppContainer>,
      document.querySelector("#app")
    );
  });
}
