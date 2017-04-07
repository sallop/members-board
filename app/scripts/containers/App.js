import React from 'react';
import styles from '../../styles/App.scss';
import MemberTable from '../components/MemberTable';
import Editor from '../components/Editor';
import members from '../../../data/members.json';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from '../reducers'
let store = createStore(rootReducer);

//const App = () => (
//  <div className={styles.app}>
//    <div className={styles.editor}>
//      <Editor />
//    </div>
//    <div className={styles.memberTable}>
//      <MemberTable members={members} />
//    </div>
//  </div>
//);

//class TodoListContainer extends Component {
//  componentDidMount(){
//    let { dispatch } = this.props
//    let action = TodoActionCreators.addTodo('Use Redux')
//    dispatch(action)
//  }
//
//  render(){
//    let { todos, dispatch } = this.props
//    let boundActionCreators = bindActionCreators(
//        TodoActionCreators, dispatch )
//    return (<TodoList todos={todos} {...boundActionCreators} />);
//  }
//}

//export default connect(
//    state => ({ todos: state.todos })
//)(TodoListContainer)


//const App = ({editor, members}) => {
const App = () => {
  const member = members[0]

  return (
    <Provider store={store}>
      <div className={styles.app}>
        <div className={styles.editor}>
          <Editor member={member} />
        </div>
        <div className={styles.memberTable}>
          <MemberTable members={members} />
        </div>
      </div>
    </Provider>
  );
}

export default App;

//const boundedApp = App({
//  editor: members[0],
//  members: members
//})

//const boundedApp = <App editor=members[0] members=members />
//const boundedApp = <App editor={members[0]} members={members} />


//export default boundedApp;

//const mapStateToProps = state => ({
//  editor : state.editor,
//  members: state.members
//})
//
////bindActionCreators(actionCreators, dispatch)
//const mapDispatchToProps = dispatch => ({
//  actions: bindActionCreators(TodoActions, dispatch)
//})
//
//
//
//export default connect(
//  mapStateToProps,
//  mapDispatchToProps
//)(App)
