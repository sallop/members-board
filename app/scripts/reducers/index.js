import { combineReducers } from 'redux'
//import * from '../actions'
import * as actions from '../actions'
//export const SET_VALUE_TO_EDITOR = "SET_VALUE_TO_EDITOR":
//export const SET_VALUE_TO_TABLE = "SET_VALUE_TO_TABLE":


//import memberTable from './memberTable'
//import editor from './editor'
const initialState = {
  editor: {
    id: "",
    group: "",
    name: "",
    pronounce: "",
    spiritualName: "",
    birthday: "",
    telephone: "",
    postcode: "",
    address: "",
    info: "",
  },
  members: []
}

//function setValueToEditor(state = initialState, action){
function editor(state = initialState, action){
  console.log("JSON.stringify(state)")
  console.log(JSON.stringify(state))
  console.log("JSON.stringify(action)")
  console.log(JSON.stringify(action))
  let { type, payload } = action
  //if (payload == Error){
  //}
  //switch(action.type) {
  switch(type) {
    //case "SET_VALUE_TO_EDITOR":
    case actions.SET_VALUE_TO_EDITOR:
      return Object.assign({}, state, {
        //members: action.member
        members: payload.member
      })
      //return { ...state, ...newState }
      // _.assign()
    //case "ADD_TODO":
    //  return Object.assign({}, state, {
    //    todos: [
    //      ...state.todos,
    //      {
    //        text: action.text,
    //        completed: false
    //      }
    //    ]
    //  })
    default:
      return state
  }
}

//function setValueToTable(state = initialState, action){
function members(state = initialState, action){
  console.log("JSON.stringify(state)")
  console.log(JSON.stringify(state))
  console.log("JSON.stringify(action)")
  console.log(JSON.stringify(action))

  let { type, payload } = action

  switch(type) {
    //case "SET_VALUE_TO_TABLE":
    case actions.SET_VALUE_TO_TABLE:
      return Object.assign({}, state, {
        //members: action.member
        members: payload.members
      })

    default:
      return state
  }
}


//import todos from './todos'
//import visibilityFilter from './visibilityFilter'
//
//const todoApp = combineReducers({
//  todos,
//  visibilityFilter
//})
//
//export default todoApp

export default combineReducers({
  editor,
  members
  //memberTable,
  //setValueToEditor,
  //setValueToTable
})
