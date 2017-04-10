/* action types */
export const SET_VALUE_TO_EDITOR = "SET_VALUE_TO_EDITOR"
export const SET_VALUE_TO_TABLE = "SET_VALUE_TO_TABLE"

/* other constants */
// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// }

//export function setValueToEditor(member) {
//export function setValueToTable(members) {
/*
 * action creators
 */
export function setValueToEditor(member) {
  return { 
    type: SET_VALUE_TO_EDITOR,
    payload: { member }
  }
  // error
  //{
  //  type: 'SET_VALUE_TO_EDITOR',
  //  payload: new Error(),
  //  error: true
  //}
}

export function setValueToTable(members) {
  return { 
    type: SET_VALUE_TO_TABLE,
    payload: { members }
  }
  // error
  //{
  //  type: 'SET_VALUE_TO_TABLE',
  //  payload: new Error(),
  //  error: true
  //}
}


//let nextTodoId = 0
//export const setValueToEditor = (member) => {
//  return {
//    type: "SET_VALUE_TO_EDITOR",
//    //payload: { member }
//    payload: { editor: member }
//  }
//}

// traditional flux
//function addTodoWithDispatch(text){
//  const action = {
//    type: ADD_TODO,
//    text
//  }
//  dispatch(action)
//}

// redux
//dispatch(setValueToEditor(member))
//const boundSetValueToEditor = (member) => dispatch(setValueToEditor(member))
//connect()

// reducer
// (previousState, action) => newState
//Array.prototype.reduce(reducer, ?initialValue)
//import { setValueToEditor } from '../actions'
//const initialState = {
//  //editor: setValueToEditor,
//  editor: {
//    id: "",
//    group: "",
//    name: "",
//    pronounce: "",
//    spiritualName: "",
//    birthday: "",
//    telephone: "",
//    postcode: "",
//    address: "",
//    info: "",
//  },
//  members: []
//}

//function setValueToEditor(state, action){
//  if (typeof state === 'undefined'){
//    return initialState
//  }
//  return state
//}

//function setValueToEditor(state = initialState, action){
//  switch(action.type) {
//    case "SET_VALUE_TO_EDITOR":
//      return Object.assign({}, state, {
//        members: action.member
//      })
//      //return { ...state, ...newState }
//      // _.assign()
//    //case "ADD_TODO":
//    //  return Object.assign({}, state, {
//    //    todos: [
//    //      ...state.todos,
//    //      {
//    //        text: action.text,
//    //        completed: false
//    //      }
//    //    ]
//    //  })
//    default:
//      return state
//  }
//}

//let store = createStore(setValueToEditor);
//
//store.subscribe(() => console.log(store.getState()))
//
//store.dispatch({type:'SET_VALUE_TO_EDITOR'})

//export const MEMBER = {
//    id:"番号",
//    group:"班",
//    name:"氏名",
//    pronounce:"ふりがな",
//    spiritualName:"霊名",
//    birthday:"生年月日",
//    telephone:"電話",
//    postcode:"郵便番号",
//    address:"住所",
//    info:"備考",
//};

// return {
//   type: "SET_VALUE_TO_EDITOR",
//   payload: new Error(),
//   error: true
// }

//
//export const addTodo = (text) => {
//  return {
//    type: 'add_todo',
//    id: nextTodoId++,
//    text
//  }
//}
//
//export const setVisibilityFilter = (filter) => {
//  return {
//    type: 'SET_VISIBILITY_FILTER',
//    filter
//  }
//}
//
//export const toggleTodo = (id) => {
//  return {
//    type: '',
//    id
//  }
//}

