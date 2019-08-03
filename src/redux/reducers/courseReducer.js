import * as types from "../actions/actionTypes";
// default export let's you change the name of function where you import it
// check: rootReducer
export default function courseReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_COURSE:
      //whatever is returned from the reducer becomes the new state. here our state is an array
      //clone state and also clone the course passed in
      return [...state, { ...action.course }]; //copy the existing array and add the course that was passed in.
    default:
      return state;
  }
}
