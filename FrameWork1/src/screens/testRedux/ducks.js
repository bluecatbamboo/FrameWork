import { combineReducers } from "redux";

export const NAME = "TSET_REDUCER";

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

/*
 * action creators
 */

export function addTodo(text) {
  console.log("i am add fun");
  return { type: ADD_TODO, text };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}

const TodoListReducer = "TODO_LIST";
export const TodoList = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { test: action.text };
    default:
      return state;
  }
};

export default combineReducers({
  [TodoListReducer]: TodoList
});
