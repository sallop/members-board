import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

//import App from './components/App';
import App from './containers/App';
//import MemberTable from './components/MemberTable';
import rootReducer from './reducers'

import { Provider, connect } from 'react-redux';
import { createStore } from 'redux'

let store = createStore(rootReducer)

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)


// const render = (Component) => {
// //const render = (Component, props) => {
//   //console.log(JSON.stringify(props));
//   ReactDOM.render(
//     <AppContainer>
//       <Component />
//     </AppContainer>,
//     document.getElementById('root')
//   );
// };
// 
// //render(<div>Hello World</div>, document.getElementById('root'));
// //render(connected, document.getElementById('root'));
// //render(MemberTable);
// //render(MemberTable, members);
// 
// render(App)
// //// home module replacement API
// if (module.hot) {
//   //module.hot.accept('./components/App', () => {
//   module.hot.accept('./containers/App', () => {
//     render(App)
//   });
// }

//Redux - how to keep the reducer state during hot reload
//http://stackoverflow.com/questions/34655695/redux-how-to-keep-the-reducer-state-during-hot-reload
//export default function configureStore(initialState) {
//  const store = createStore(rootReducer, initialState);
//
//  if(module.hot) {
//    // Enable Webpack hot module replacement for reducers
//    module.hot.accept('../reducers', () => {
//      const nextReducer = require('../reducers/index').default;
//
//      store.replaceReducer(nextReducer);
//    });
//  }
//
//  return store;
//}


//import _ from 'lodash';
//import '../styles/style.css';
//import '../styles/style.scss';
//function component () {
//  var element = document.createElement('div');
//  element.innerHTML = _.join(['Hello', 'webpack', '!!!!!'], ' ');
//  return element;
//}
//document.body.appendChild(component());
