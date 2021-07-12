const expect = require('chai').expect
const Student = require('../src').Student

describe('Student', () => {
    describe('new Student instantiation', () => {
      it('`name` (string), `age` (num), `gradeLevel` (num), `averageTestScore` (num 1-100), `graduationYear` (num), `activities` (array of strings)', () => {

        const student = new Student('Michael Scott', 40, 12 ,70, 1998, ['Student Council', 'Basketball'])


        expect(student.name).to.deep.equal('Michael Scott')

        expect(student.age).to.deep.equal(40)

        expect(student.gradeLevel).to.deep.equal(12)

        expect(student.averageTestScore).to.deep.equal(70)

        expect(student.graduationYear).to.deep.equal(1998)

        expect(student.activities).to.deep.equal(['Student Council', 'Basketball'])
      })
    })

    describe('updateStudentName()', () => {
        it('updates the students\'s name to the input argument', () => {
            const student = new Student('Michael Scott', 40, 12 ,70, 1998, ['Student Council', 'Basketball'])

          student.updateStudentName('Michael Scott')

          expect(student.name).to.deep.equal('Michael Scott')
        })
      })

      describe('incrementAge()', () => {
        it('updates the students\'s age by 1', () => {
            const student = new Student('Michael Scott', 40, 12 ,70, 1998, ['Student Council', 'Basketball'])

          student.incrementAge()

          expect(student.age).to.deep.equal(40+1)
        })
      })
      describe('incrementGradeLevel()', () => {
        it('updates the students\'s GradeLevel by 1', () => {
            const student = new Student('Michael Scott', 40, 12 ,70, 1998, ['Student Council', 'Basketball'])

          student.incrementGradeLevel()

          expect(student.gradeLevel).to.deep.equal(12+1)
        })
      })

      describe('incrementAverageTestScore()', () => {
        it('updates the students\'s averageTestScore by 1, but will not exceed 100', () => {
            const student = new Student('Michael Scott', 40, 12, 70, 1998, ['Student Council', 'Basketball'])

          student.incrementAverageTestScore(30)

          expect(student.averageTestScore).to.deep.equal(70+30)

          student.incrementAverageTestScore(1)

          expect(student.averageTestScore).to.deep.equal(100)
        })
      })

      describe('decrementAverageTestScore()', () => {
        it('updates the students\'s averageTestScore by -1, but will not fall below 0', () => {
            const student = new Student('Michael Scott', 40, 12, 70, 1998, ['Student Council', 'Basketball'])

          student.decrementAverageTestScore(70)

          expect(student.averageTestScore).to.deep.equal(70-70)

          student.decrementAverageTestScore(1)

          expect(student.averageTestScore).to.deep.equal(0)
        })
      })

      describe('addActivity()', () => {
        it('which adds an activity to the student\'s `activities`', () => {
            const student = new Student('Michael Scott', 40, 12, 70, 1998, ['Student Council', 'Basketball'])

          student.addActivity('Soccer')

          expect(student.activities).to.deep.equal(['Student Council', 'Basketball','Soccer'])

          student.addActivity('Soccer')

          expect(student.activities).to.deep.equal(['Student Council', 'Basketball','Soccer'])
        })
      })

      describe('removeActivity()', () => {
        it('which removes an activity to the student\'s `activities`', () => {
            const student = new Student('Michael Scott', 40, 12, 70, 1998, ['Student Council', 'Basketball'])

          student.removeActivity('Basketball')

          expect(student.activities).to.deep.equal(['Student Council'])

          student.removeActivity('Soccer')

          expect(student.activities).to.deep.equal(['Student Council'])
        })
      })
  })