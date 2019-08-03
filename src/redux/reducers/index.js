import { combineReducers } from "redux";
import courses from "./courseReducer";
// each reducer handles a slice of state
// so even though we have one store in redux,
// reducers let you slice up the management of your state's changes
// into a number of separate functions.

// a root reducer to compose different reducer functions together
const rootReducer = combineReducers({
  courses //short hand syntax for courses: courses
});

export default rootReducer;
