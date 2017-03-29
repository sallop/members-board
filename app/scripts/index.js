import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from './components/App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// home module replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}


//import _ from 'lodash';
//import '../styles/style.css';
//import '../styles/style.scss';
//function component () {
//  var element = document.createElement('div');
//  element.innerHTML = _.join(['Hello', 'webpack', '!!!!!'], ' ');
//  return element;
//}
//document.body.appendChild(component());
