import React from "react";

//creating this as a class component just for practice.
class CoursesPage extends React.Component {
  state = {
    course: {
      title: ""
    }
  };

  // arrow functions inhreit the binding context of enclosing scope
  //todo: I am not sure what this all means
  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    // this.setState({ course: course });
    this.setState({ course }); // object shorthand syntax
  };

  handleSubmit = event => {
    event.preventDefault(); // keep the form from posting back (means getting back to server) before the alert is caused
    alert(this.state.course.title);
  };

  render() {
    return (
      // we use onSubmit attached to form instead of onClick on button.
      // this is because we want the form to be submitted on hitting enter key
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default CoursesPage;
