import { ADD_TODO, NUKE_TODOS, REMOVE_TODO } from "../reducers/todoReducer";
import _ from "lodash";

export const removeTodo = id => {
  return (dispatch, getState) => {
    const { todos } = getState().cs;
    console.log(todos);
    console.log(id);
    _.remove(todos, todo => todo.id === id);
    console.log(todos);
    dispatch({ type: REMOVE_TODO, payload: todos });
  };
};

export const addTodo = todo => {
  return (dispatch, getState) => {
    const { todos } = getState().cs;
    todos.push(todo);
    console.log(todos);
    dispatch({ type: ADD_TODO, payload: todos });
  };
};

export const nukeTodos = () => {
  return dispatch => {
    dispatch({ type: NUKE_TODOS, payload: [] });
  };
};
