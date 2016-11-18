import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';
import Home from './components/Home.jsx';
import Header from './components/Header.jsx';
import './styles/main.scss';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

render(
  <Router history={hashHistory}>
    <Route path="/" component={Header}>
      <Route path="gyms/:gymId" component={Home}/>
      <IndexRoute component={Home} />
    </Route>
  </Router>,
    document.querySelector("#app")
);


//  <AppContainer><Home/></AppContainer>
// if (module.hot) {
//   module.hot.accept('./app.jsx', () => {
//     const App = require('./app.jsx').default;
//     render(
//       <AppContainer>
//         <Home/>
//       </AppContainer>,
//       document.querySelector("#app")
//     );
//   });
// }
