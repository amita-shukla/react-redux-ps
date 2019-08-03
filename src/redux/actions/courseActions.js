// this file will hold our course related action creators

//an action has a type property
export function createCourse(course) {
  // return {type: "CREATE_COURSE", course: course};
  return { type: "CREATE_COURSE", course }; //shorthand syntax
}
