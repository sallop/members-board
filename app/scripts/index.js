import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from './components/App';
//import MemberTable from './components/MemberTable';

const render = (Component) => {
//const render = (Component, props) => {
  //console.log(JSON.stringify(props));
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);
//render(MemberTable);
//render(MemberTable, members);

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
