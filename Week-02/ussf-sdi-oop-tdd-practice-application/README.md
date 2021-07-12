## TDD in Practice!

For this activity, you and a pair will fulfill the following requirements by test-driving your code!

## FIRST STEP:
Fork & clone this repository

### Remember:
This means you only write code to make failing tests pass. You write a test - then write the code!

This is an Object Oriented project, so use JavaScript Classes to implement the following functionality.


## Repo Directions
- run `npm install` to install dependencies
- run `npm test` to run the tests
- The first test is set up for you! This is to help you get started. You can run `npm test` to see the first passing test/corresponding code.


## Project Specs

### Create a `School` class
    - This class has `name` (string), `location` (string), `gradeLevels` (array of numbers, kingergarten being 0), `numberOfStudents` (number), `numberOfTeachers` (number) and `principal` (string), and `mascot` properties
    - This class has methods:
        - `updateName()` that updates the `name` of the school with a given argument
        - `updateLocation()` that updates the `location` with a given argument
        - `updateGradeLevels()` which takes in an array of `gradeLevels` which replaces the schools' existing `gradeLevels` property
        - `removeStudents()` which removes a given # of students from the `numberOfStudents`
        - `addStudents()` which adds a given # of students to the `numberOfStudents`
        -  `removeTeachers()` which removes a given # of teachers from the `numberOfTeachers`
        - `addTeachers()` which adds a given # of teachers to the `numberOfTeachers`
        - `updatePrincipal()` which updates the `principal` value to the function't input string
        - `changeMascot()` which updates the `mascot` to the input value


### Create a `Teacher` class
    - This class has `name` (string), `subjectTaught` (string), `universityAttended` (string), `yearsAsTeacher` (num) properties
    - This class has methods:
        - `updateTeacherName()` which updates the teacher's name to the input argument
        - `changeSubjectTaught()` which changes the teacher's `subjectTaught` to the input string
        - `updateYearsAsTeacher()` which increments the `yearsAsTeacher` property by 1 each time it is called


### Create a `Student` class
    - This class has a `name` (string), `age` (num), `gradeLevel` (num), `averageTestScore` (num 1-100), `graduationYear` (num), `activities` (array of strings)
    - This class has methods:
        - `updateStudentName()` which updates the student's `name` to the given argument
        - `incrementAge()` which increments the student's `age` by 1 each time it is called
        - `incrementGradeLevel()` which increments the student's `gradeLevel` each time it is called
        - `incrementAverageTestScore()` which increments a student's `averageTestScore` by a given number up to 100 (do not let this exceed 100)
        - `decrementAverageTestScore()` which decrements a student's `averageTestSCore` by a given number down to 0 (do not let this fall below 0)
        - `changeGraduationYear()` which updates a student's `graduationYear` to the input number
        - `addActivity()` which adds an activity to the student's `activities`
        - `removeActivity()` which removes a given activity from the student's `activities`


### Create an `IndividualClass` class
    - This class has `subject` (string), `gradeLevel` (num), `teacher` (Teacher), and `student` (array of `Student`s) properties
    - This class has method:
        - `updateSubject()` which changes the `subject` value to the input string
        - `changeTeacher()` which changes the `teacher` value to the input Teacher
        - `addStudent()` which adds a `Student` to the `students` array
        - `removeStudent()` which removes a `Student` from the `students` array


### Create a `Grade` class
    - This class has a `studentCount` (num), `students` (array of `Student`s), `graduationYear` (num)
    - This class has methods:
        - `decrementStudentCount()` which decrements the `studentCount` by the given number
        - `incrementStudentCount()` which increments the `studentCount` by the given number
        - `addStudent` which adds a given `Student` to the `students` array
        - `removeStudent` which removes a given `Student` from the `students` array
        - `changeGraduationYear` which updates this `Grade`'s `graduationYear` to the given number