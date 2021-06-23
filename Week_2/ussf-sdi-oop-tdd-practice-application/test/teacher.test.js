const expect = require('chai').expect
const Teacher = require('../src').Teacher

describe('Teacher', () => {
    describe('new Teacher instantiation', () => {
      it('takes the following arguments: name, subjectTaught, universityAttended, yearsAsTeacher', () => {

        const teacher = new Teacher('Jessie', 'Math', 'University of Central Florida', 5)


        expect(teacher.name).to.deep.equal('Jessie')

        expect(teacher.subjectTaught).to.deep.equal('Math')

        expect(teacher.universityAttended).to.deep.equal('University of Central Florida')

        expect(teacher.yearsAsTeacher).to.deep.equal(5)
      })
    })

    describe('updateName()', () => {
      it('updates the teacher\'s name to the input argument', () => {
        const teacher = new Teacher('Jessie', 'Math', 'University of Central Florida', 5)

        teacher.updateName('Katie')

        expect(teacher.name).to.deep.equal('Katie')
      })
    })

    describe('changeSubjectTaught()', () => {
      it('which changes the teacher\'s `subjectTaught` to the input string', () => {
        const teacher = new Teacher('Jessie', 'Math', 'University of Central Florida', 5)

        teacher.changeSubjectTaught('English')

        expect(teacher.subjectTaught).to.deep.equal('English')
      })
    })

    describe('updateYearsAsTeacher()', () => {
      it('which changes the teacher\'s `yearsAsTeacher` by incrementing 1', () => {
        const teacher = new Teacher('Jessie', 'Math', 'University of Central Florida', 5)

        teacher.updateYearsAsTeacher()

        expect(teacher.yearsAsTeacher).to.deep.equal(5+1)
      })
    })

  })
