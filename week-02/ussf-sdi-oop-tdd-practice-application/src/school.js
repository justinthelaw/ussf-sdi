class School {
    constructor(name, location, gradeLevels, numberOfStudents, numberOfTeachers, principal, mascot) {
        this.name = name,
        this.location = location,
        this.gradeLevels = gradeLevels,
        this.numberOfStudents = numberOfStudents,
        this.numberOfTeachers = numberOfTeachers,
        this.principal = principal,
        this.mascot = mascot
    }
    updateName(string){
        this.name = string
    }
    updateLocation(location) {
        this.location = location
    }
    updateGradeLevels(array) {
        this.gradeLevels = array
    }
    removeStudents(number) {
        this.numberOfStudents -= number
    }
    addStudents(number) {
        this.numberOfStudents += number
    }
}

module.exports = School