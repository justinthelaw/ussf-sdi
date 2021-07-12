const expect = require('chai').expect
const Room = require('../src').Room

describe('Room', function () {
  before(function () {
    this.properties = [ 'Hogwarts', 'a magical school' ]
  })

  describe('new Room()', function () {
    it('should accept the following arguments: name, description', function () {
      const room = new Room(...this.properties)

      expect(room).to.be.an.instanceof(Room)
    })

    it('should have properties by the same name', function () {
      const room = new Room(...this.properties)
      const [ name, description ] = this.properties

      expect(room.name).to.equal(name)
      expect(room.description).to.equal(description)
    })

    it('should have a property of `contents` which defaults to an empty array', function () {
      const room = new Room(...this.properties)

      expect(room.contents).to.deep.equal([])
    })
  })

  describe('.add()', function () {
    it('should add the given item to the room', function () {
      const room = new Room(...this.properties)

      const student = { firstName: 'Draco', lastName: 'Malfoy' }
      room.add(student)

      expect(room.contents).to.include(student)
    })

    it('should be chainable (e.g. room.add(1).add(2).add(3))', function () {
      const room = new Room(...this.properties)

      const student = { firstName: 'Draco', lastName: 'Malfoy' }
      const teacher = { name: 'Professor Dumbledore' }
      const actual = room.add(student).add(teacher)

      expect(room.contents).to.include(student)
      expect(room.contents).to.include(teacher)
    })
  })

  describe('.has()', function () {
    it('should return true if the given reference is in the array', function () {
      const room = new Room(...this.properties)

      const student = { firstName: 'Draco', lastName: 'Malfoy' }
      room.add(student)

      expect(room.has(student)).to.be.true
    })

    it('should return false if the given reference is not in the array', function () {
      const room = new Room(...this.properties)

      const student = { firstName: 'Draco', lastName: 'Malfoy' }
      room.add(student)

      expect(room.has({ firstName: 'Ron', lastName: 'Weasley' })).to.be.false
    })
  })
})
