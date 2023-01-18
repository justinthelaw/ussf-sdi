console.clear();

const studentData = [
  {
    name: "Brandon",
    age: 25,
    location: "Atlanta",
    major: "English"
  },
  {
    name: "Katie",
    age: 27,
    location: "Denver",
    major: "Math"
  },
  {
    name: "Ash",
    age: 30,
    location: "San Francisco",
    major: "Art"
  },
  {
    name: "James",
    age: 29,
    location: "Minneapolis",
    major: "Science"
  },
  {
    name: "Peter",
    age: 27,
    location: "Miami",
    major: "English"
  },
  {
    name: "Becky",
    age: 31,
    location: "New York",
    major: "Math"
  },
  {
    name: "Nick",
    age: 21,
    location: "Austin",
    major: "Math"
  },
]

// I want a collection of just student NAMES
let studentNames = studentData.map(student => student.name);
console.log(studentNames);

// I want a list of the names of students who are Science majors
let scienceMaj = studentData.filter(student => student.major === 'Science').map(student => student.name);
console.log(scienceMaj);

// I want a list of the students who are older than 25
let oldStudents = studentData.filter(student => student.age > 25).map(student => student.name);
console.log(oldStudents);

// I want the average age of all students
let studentAvgAge = studentData.map(student => student.age).reduce((a, b) => (a + b), 0) / studentData.length
console.log(studentAvgAge);

// I want a list that returns an object for each major and how many students are studying that major, like this:
// [ {major: x, numberOfStudents: x}, ...]
let majorsCount = [];
studentData.map(student => student.major).forEach((element) => {
  if (majorsCount[element] === undefined) {
    majorsCount[element] = 1;
  } else {
    majorsCount[element]++
  }
})

let formattedCount = [];
for (let major in majorsCount) {
  formattedCount.push({'major': major, numberOfStudents: majorsCount[major]})
}
console.log(formattedCount);
