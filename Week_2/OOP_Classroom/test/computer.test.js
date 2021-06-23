const expect = require('chai').expect
const Computer = require('../src').Computer

describe('Computer', function () {
  before(function () {
    this.properties = [
      'MacBook Air',
      'macOS',
      '2.3GHz dual-core Intel Core i5',
      '8GB',
      'Intel Iris Plus Graphics 640'
    ]
  })

  describe('new Computer()', function () {
    it('should accept the following arguments: name, operatingSystem, processor, memory, graphics', function () {
      const computer = new Computer(...this.properties)

      expect(computer).to.be.an.instanceof(Computer)
    })

    it('should have properties by the same name', function () {
      const computer = new Computer(...this.properties)
      const [ name, operatingSystem, processor, memory, graphics ] = this.properties

      expect(computer.name).to.equal(name)
      expect(computer.operatingSystem).to.equal(operatingSystem)
      expect(computer.processor).to.equal(processor)
      expect(computer.memory).to.equal(memory)
      expect(computer.graphics).to.equal(graphics)
    })

    it('should have a property of `on` which defaults to false', function () {
      const computer = new Computer(...this.properties)

      expect(computer.on).to.be.false
    })
  })

  describe('.power()', function () {
    it('should turn the computer `on` if it is off', function () {
      const computer = new Computer(...this.properties)

      expect(computer.on).to.be.false
      computer.power()
      expect(computer.on).to.be.true
    })

    it('should turn the computer `off` if it is on', function () {
      const computer = new Computer(...this.properties)
      expect(computer.on).to.be.false
      computer.power()
      expect(computer.on).to.be.true
      computer.power()
      expect(computer.on).to.be.false
    })
  })
})
