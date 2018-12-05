// Redux
import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

// Compbine all reducers for our app
const rootReducer = combineReducers({
    cs: todoReducer
});

// Make the root reducers (all reducers) public to our app
export default rootReducer;
