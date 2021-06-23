const expect = require('chai').expect
const Desk = require('../src').Desk

describe('Desk', function () {
  before(function () {
    this.properties = [ 60, 48, 48, false ]
  })

  describe('new Desk()', function () {
    it('should accept the following arguments: length, width, height, isWhiteboard', function () {
      const desk = new Desk(...this.properties)

      expect(desk).to.be.an.instanceof(Desk)
    })

    it('should have properties by the same name', function () {
      const desk = new Desk(...this.properties)
      const [ length, width, height, isWhiteboard ] = this.properties

      expect(desk.length).to.equal(length)
      expect(desk.width).to.equal(width)
      expect(desk.height).to.equal(height)
      expect(desk.isWhiteboard).to.equal(isWhiteboard)
    })

    it('should have a property of `content` which defaults to an empty string', function () {
      const desk = new Desk(...this.properties)

      expect(desk.content).to.equal('')
    })
  })

  describe('.write()', function () {
    it('should add the inputted string to the `content` property', function () {
      const desk = new Desk(...this.properties)
      desk.write('Hello')

      expect(desk.content).to.equal('Hello')
    })

    it('should allow for multiple writes', function () {
      const desk = new Desk(...this.properties)
      desk.write('Hello')
      desk.write('World')

      expect(desk.content).to.equal('HelloWorld')
    })
  })

  describe('.wipe()', function () {
    it('should clear the `content` if `isWhiteboard` is set to true', function () {
      const desk = new Desk(...this.properties)
      desk.isWhiteboard = true
      desk.content = 'HelloWorld'

      desk.wipe()

      expect(desk.content).to.equal('')
    })

    it('should *not* clear the `content` if `isWhiteboard` is set to false', function () {
      const desk = new Desk(...this.properties)
      desk.content = 'HelloWorld'

      desk.wipe()

      expect(desk.content).to.equal('HelloWorld')
    })
  })
})
