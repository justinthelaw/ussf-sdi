class Teacher {
  constructor (name, subjectTaught, universityAttended, yearsAsTeacher) {
    this.name = name
    this.subjectTaught = subjectTaught
    this.universityAttended = universityAttended
    this.yearsAsTeacher = yearsAsTeacher
  }
  updateName (string) {
    this.name = string
  }

  changeSubjectTaught (string) {
    this.subjectTaught = string
  }
  updateYearsAsTeacher(){
    this.yearsAsTeacher+=1
  }
}

module.exports = Teacher