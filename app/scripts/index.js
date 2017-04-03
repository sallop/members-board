import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import App from './components/App';
import MemberTable from './components/MemberTable';

var members = [{
  id: 1,
  group: 1,
  name: "Arthur Dent",
  pronounce: "",
  spiritualName: "Arthur",
  birthday: "1991/9/11",
  telephone: "999-9999",
  postcode: "999-9999",
  address: "9999-9999",
  info: "",
},{
  id: 2,
  group: 2,
  name: "Ford Prefect",
  pronounce: "",
  spiritualName: "ford",
  birthday: "1991/4/11",
  telephone: "444-4444",
  postcode: "444-4444",
  address: "444-4444",
  info: "",
},{
  id: 3,
  group: 3,
  name: "Trillian",
  pronounce: "",
  spiritualName: "trillian",
  birthday: "1991/3/11",
  telephone: "333-3333",
  postcode: "333-3333",
  address: "333-3333",
  info: "", 
}];

//const render = (Component) => {
const render = (Component, props) => {
  console.log(JSON.stringify(props));
  ReactDOM.render(
    <AppContainer>
    {/* <Component props={props}/> */}
      <Component members={props}/>
    </AppContainer>,
    document.getElementById('root')
  );
};

//render(App);
//render(MemberTable);
render(MemberTable, members);

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
