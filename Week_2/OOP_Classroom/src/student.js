class Student {
  constructor (name, skillLevel) {
    this.name = name
    this.skillLevel = skillLevel
    this.assignments = []
  }

  study () {
    if (this.skillLevel === 100) {
      return this
    } else if (this.skillLevel < 100) {
      this.skillLevel++
      return this
    }
  }

  doHomework (object) {
    if (object === undefined) {
      for (let i = 0; i < this.assignments.length; i++) {
        if (this.assignments[i].completed === true) {return}
        else {
          this.doHomework(this.assignments[i])
        }
      }
      return this
    }

    if (this.skillLevel > object.skillLevel) {
      object.completed = true
    } else {
      object.completed = false
    }

    if (object.skillLevel === undefined || object.skillLevel < 1 || object.skillLevel > 100) {return}
    else if (this.assignments.indexOf(object) === -1) {
      this.assignments.push(object)
    }

    return this
  }
}

module.exports = Student


