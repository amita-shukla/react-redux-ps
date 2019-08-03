import React from "react";

//creating this as a class component just for practice.
class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: ""
      }
    };

    //else you get an error: "Cannot read property of undefined" when trying to type a course for add course
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const course = { ...this.state.course, title: event.target.value };
    // this.setState({ course: course });
    this.setState({ course }); // object shorthand syntax
  }

  render() {
    return (
      <form>
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
