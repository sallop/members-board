import React from 'react';
import styles from '../../styles/App.scss';
//import MemberTable from '../components/MemberTable';
//import Editor from '../components/Editor';
import MemberTable from './MemberTable';
import Editor from './Editor';


//import * from '../actions';
import * as actions from '../actions';
import members from '../../../data/members.json';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from '../reducers'
//let store = createStore(rootReducer);

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


const App = () => {
//const App = ({editor, members}) => { // come from root store
  //const member = members[0]
  //let store = createStore(rootReducer);

  //console.log("App = ({editor, members})") 
  //console.log("store = ${store}") 
  //console.log("JSON.stringify(editory)")
  //console.log(JSON.stringify(editor))
  //console.log("JSON.stringify(members)")
  //console.log(JSON.stringify(members))


  //return (
  //  <Provider store={createStore(rootReducer)}>
  //    <div className={styles.app}>
  //      <div className={styles.editor}>
  //        <Editor member={editor} />
  //      </div>
  //      <div className={styles.memberTable}>
  //        <MemberTable members={members} />
  //      </div>
  //    </div>
  //  </Provider>
  //);
  //return (
  //	<div className={styles.app}>
  //	  <div className={styles.editor}>
  //	    <Editor member={editor} />
  //	  </div>
  //	  <div className={styles.memberTable}>
  //	    <MemberTable members={members} />
  //	  </div>
  //	</div>
  //);

  return (
  	<div className={styles.app}>
  	  <div className={styles.editor}>
  	    <Editor/>
  	  </div>
  	  <div className={styles.memberTable}>
  	    <MemberTable/>
  	  </div>
  	</div>
  );
}

//export default App;

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
//export default connect(
//  mapStateToProps,
//  mapDispatchToProps
//)(App)

//const mapStateToProps = (state, ownProps) => ({
const mapStateToProps = (state) => ({
  editor : state.editor,
  members: state.members
})

//bindActionCreators(actionCreators, dispatch)
const mapDispatchToProps = dispatch => ({
  //actions: bindActionCreators(TodoActions, dispatch)
  //actions: bindActionCreators(TodoActions, dispatch)
  //actions: {
  //  //bindActionCreators(TodoActions, dispatch),
  //  //dispatch(toggleTodo(id))
  //}
  onEditor: (member) => {
    console.log("onEditor: (member) => {}")
    console.log(JSON.stringify(member))
    //bindActionCreators(TodoActions, dispatch),
    //dispatch(toggleTodo(id))
    //dispatch(setValueToEditor(member))
    dispatch(actions.setValueToEditor(member))
  },
  onTable: (members) => {
    console.log("onTable: (member) => {}")
    console.log(JSON.stringify(members))
    //bindActionCreators(TodoActions, dispatch),
    //dispatch(setValueToTable(members))
    dispatch(actions.setValueToTable(members))
  }
})
 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

//bindActionCreators(actionCreators, dispatch)
// const mapDispatchToProps = dispatch => ({
//  
// //  state => ({ todos: state.todos })
// //  editor: members[0],
// //  members: members
//   //editor: members[0],
//   //members: members
// )(App)

