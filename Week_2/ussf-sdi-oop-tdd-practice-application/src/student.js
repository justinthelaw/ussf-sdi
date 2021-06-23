class Student {
  constructor (name, age, gradeLevel, averageTestScore, graduationYear, activities) {
    this.name = name
    this.age = age
    this.gradeLevel = gradeLevel
    this.averageTestScore = averageTestScore
    this.graduationYear = graduationYear
    this.activities = activities
  }

  updateStudentName(newName){
      this.name = newName
  }

  incrementAge(){
    this.age += 1
}

incrementGradeLevel(){
    this.gradeLevel += 1
}

incrementAverageTestScore(number){
  let currentTestScore = this.averageTestScore
  currentTestScore += number

  if (currentTestScore <= 100) {
    this.averageTestScore += number
  } else {return}
}

decrementAverageTestScore(number){
    let currentTestScore = this.averageTestScore
    currentTestScore -= number
    if (currentTestScore >= 0) {
      this.averageTestScore -= number
    } else {return}
  }

  addActivity(activity){
   if(this.activities.includes(activity)){
   } else {
       this.activities.push(activity)
   }

  }

  removeActivity(activity){
    if(this.activities.includes(activity)){
      let index = this.activities.indexOf(activity)
      this.activities.splice(index, 1)
    } else {return}

   }

}

module.exports = Student