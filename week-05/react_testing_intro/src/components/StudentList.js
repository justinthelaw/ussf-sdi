import React from 'react'

export default class StudentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    }
  }

  componentDidMount() {
    fetch('/api/students')
      .then(response => response.json(),
        error => console.log(error.status),
        success => console.log(success.status))
      .then(students => this.setState({ students: students }))
  }

  render() {
    return (
      <ul>
        {this.state.students.map((student, index) => <li key={index}>{student.firstName} {student.lastName}</li>)}
      </ul>
    )
  }
}