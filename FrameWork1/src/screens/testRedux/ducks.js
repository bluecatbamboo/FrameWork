import { combineReducers } from "redux";
import get from "lodash/get";
export const NAME = "TSET_REDUCER";

// action types
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

// Action Creators
export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function deleteTodo(name) {
  return { type: DELETE_TODO, name };
}

const TodoListReducerName = "TODO_LIST";
// todolist reducer
export const todoListReducer = (state = [], action) => {
  //action like  {type: "ADD_TODO", text: "Eat"}
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.text];
    case DELETE_TODO:
      const newState = [];
      state.forEach(item => {
        if (item !== action.name) {
          newState.push(item);
        }
      });
      return newState;
    default:
      return state;
  }
};

export const getTodoList = state =>
  get(state, `${NAME}.${TodoListReducerName}`);

export default combineReducers({
  [TodoListReducerName]: todoListReducer
});
