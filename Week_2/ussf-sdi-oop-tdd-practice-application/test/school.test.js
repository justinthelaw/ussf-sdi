const expect = require('chai').expect
const School = require('../src').School

describe('School', () => {
    describe('new School instantiation', () => {
      it('takes the following arguments: name, location, gradeLevels, numberOfStudents, numberOfTeachers, principal, mascot', () => {
        const school = new School('PS 135', 'New York City', [8, 9, 10, 11, 12], 321, 44, 'Joe Schmow', 'Roaring Elephants')

        expect(school).to.be.an.instanceof(School)
        expect(school.name).to.deep.equal('PS 135')
        expect(school.location).to.deep.equal('New York City')
        expect((school.gradeLevels).length).to.deep.equal(5)
        expect(school.numberOfStudents).to.deep.equal(321)
        expect(school.numberOfTeachers).to.deep.equal(44)
        expect(school.principal).to.deep.equal('Joe Schmow')
        expect(school.mascot).to.deep.equal('Roaring Elephants')
      })
    })

     describe('updateName', () => {
        it('updates the `name` of the school with a given argument',() => {
          const school = new School('PS 135', 'New York City', [8, 9, 10, 11, 12], 321, 44, 'Joe Schmow', 'Roaring Elephants')
          school.updateName('Suntree')
        expect(school.name).to.deep.equal('Suntree')

        })

      })

      describe('updateLocation', () => {
        it('updates the `location` of the school with a given argument',() => {
          const school = new School('PS 135', 'New York City', [8, 9, 10, 11, 12], 321, 44, 'Joe Schmow', 'Roaring Elephants')
          school.updateLocation('Florida')
          expect(school.location).to.deep.equal('Florida')

        })

      })

      describe('updateGradeLevels', () => {
        it('updates the `Grade Levels` of the school with a given argument',() => {
          const school = new School('PS 135', 'New York City', [8, 9, 10, 11, 12], 321, 44, 'Joe Schmow', 'Roaring Elephants')

          school.updateGradeLevels([8, 9, 10, 11])

          expect(school.gradeLevels).to.deep.equal([8, 9, 10, 11])

        })

      })

      describe('removeStudents', () => {
        it('updates the `Number Of Students` of the school with a given argument',() => {
          const school = new School('PS 135', 'New York City', [8, 9, 10, 11, 12], 321, 44, 'Joe Schmow', 'Roaring Elephants')

          school.removeStudents(301)

          expect(school.numberOfStudents).to.deep.equal(20)

        })

      })

      describe('addStudents', () => {
        it('updates the `Number Of Students` of the school with a given argument',() => {
          const school = new School('PS 135', 'New York City', [8, 9, 10, 11, 12], 321, 44, 'Joe Schmow', 'Roaring Elephants')

          let numExpect = 301
          school.addStudents(numExpect)

          expect(school.numberOfStudents).to.deep.equal(321 + numExpect)

        })

      })

    })




// it('should accept the following arguments: name, operatingSystem, processor, memory, graphics', function () {
//     const computer = new Computer(...this.properties)

//     expect(computer).to.be.an.instanceof(Computer)
//   })