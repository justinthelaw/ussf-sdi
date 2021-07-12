const expect = require('chai').expect
const Student = require('../src').Student

describe('Student', function () {
  before(function () {
    this.properties = [ 'Shelly Vasquez', 44 ]
  })

  describe('new Student()', function () {
    it('should accept the following arguments: name, skillLevel', function () {
      const student = new Student(...this.properties)

      expect(student).to.be.an.instanceof(Student)
    })

    it('should have properties by the same name', function () {
      const student = new Student(...this.properties)
      const [ name, skillLevel ] = this.properties

      expect(student.name).to.equal(name)
      expect(student.skillLevel).to.equal(skillLevel)
    })

    it('should have a property of `assignments` which defaults to an empty array', function () {
      const student = new Student(...this.properties)

      expect(student.assignments).to.deep.equal([])
    })
  })

  describe('.study()', function () {
    it('should increase the student\'s `skillLevel` by 1', function () {
      const student = new Student(...this.properties)
      student.study()

      expect(student.skillLevel).to.equal(this.properties[1] + 1)
    })

    it('should cannot increase the student\'s `skillLevel` above 100', function () {
      const student = new Student(...this.properties)
      student.skillLevel = 100
      student.study()

      expect(student.skillLevel).to.equal(100)
    })

    it('should be chainable (e.g. student.study().study().study())', function () {
      const student = new Student(...this.properties)
      student.study().study()

      expect(student.skillLevel).to.equal(this.properties[1] + 2)
    })
  })

  describe('.doHomework()', function () {
    it('accepts an object that includes a `skillLevel` key and marks it as complete (i.e. adds a key of `completed` with a value of `true` to the homework) if the student\'s skill level is above the inputted homework\'s `skillLevel`', function () {
      const student = new Student(...this.properties)

      const homework = { title: 'Crushing Candy Code', skillLevel: 38 }
      student.doHomework(homework)

      expect(homework.completed).to.be.true
    })

    it('marks homework as incomplete (i.e. `complete: false`) if the skillLevel is too high', function () {
      const student = new Student(...this.properties)

      const homework = { title: 'OOP Classroom', skillLevel: 47 }
      student.doHomework(homework)

      expect(homework.completed).to.be.false
    })

    it('adds the homework to the `assignments` array whether or not it is completed', function () {
      const student = new Student(...this.properties)

      const homework = { title: 'Crushing Candy Code', skillLevel: 38 }
      student.doHomework(homework)

      expect(student.assignments).to.include(homework)
    })

    it('does not add the homework to the `assignments` array if it does not have a `skillLevel`', function () {
      const student = new Student(...this.properties)

      const homework = { title: 'Crushing Candy Code' }
      student.doHomework(homework)

      expect(student.assignments).to.not.include(homework)
    })

    it('does not add the homework to the `assignments` array if it\'s `skillLevel` is below 1', function () {
      const student = new Student(...this.properties)

      const homework = { title: 'Crushing Candy Code', skillLevel: 0 }
      student.doHomework(homework)

      expect(student.assignments).to.not.include(homework)
    })

    it('does not add the homework to the `assignments` array if it\'s `skillLevel` is above 100', function () {
      const student = new Student(...this.properties)

      const homework = { title: 'Get us to Pluto', skillLevel: 101 }
      student.doHomework(homework)

      expect(student.assignments).to.not.include(homework)
    })

    it('if no argument is added, attempts to complete all incomplete homework and will complete it if the `skillLevel` is higher', function () {
      const student = new Student(...this.properties)

      const homework = { title: 'OOP Classroom', skillLevel: 47 }
      student.doHomework(homework)

      expect(student.assignments).to.include(homework)

      student.study().study().study().study()
      student.doHomework()

      expect(student.assignments[0].completed).to.be.true
    })

    it('if no argument is added, attempts to complete all incomplete homework but it will stay incomplete if `skillLevel` is still not enough', function () {
      const student = new Student(...this.properties)

      const homework = { title: 'Capstone Project', skillLevel: 90 }
      student.doHomework(homework)

      expect(student.assignments).to.include(homework)

      student.study().study().study().study()
      student.doHomework()

      expect(student.assignments[0].completed).to.be.false
    })
  })
})
