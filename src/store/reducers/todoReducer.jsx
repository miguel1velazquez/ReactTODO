const initState = {
  todos: []
};

export const REMOVE_TODO = "REMOVE_TODO";
export const ADD_TODO = "ADD_TODO";
export const NUKE_TODOS = "NUKE_TODOS";

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case REMOVE_TODO:
      return {
        ...state,
        todos: action.payload
      };
    case ADD_TODO:
      return {
        ...state,
        todos: action.payload
      };
    case NUKE_TODOS:
      return {
        ...state,
        todos: action.payload
      };
    default:
      return state;
  }
};

export default todoReducer;
