const expect = require('chai').expect
const Marker = require('../src').Marker

describe('Marker', function () {
  before(function () {
    this.properties = [ 'medium', 'pink', 100 ]
  })

  describe('new Marker()', function () {
    it('should accept the following arguments: size, color, remainingInk', function () {
      const marker = new Marker(...this.properties)

      expect(marker).to.be.an.instanceof(Marker)
    })

    it('should have properties by the same name', function () {
      const marker = new Marker(...this.properties)
      const [ size, color, remainingInk ] = this.properties

      expect(marker.size).to.equal(size)
      expect(marker.color).to.equal(color)
      expect(marker.remainingInk).to.equal(remainingInk)
    })
  })

  describe('.write()', function () {
    it('should decrement `remainingInk` by the number of characters written', function () {
      const marker = new Marker(...this.properties)
      const [ _size, _color, remainingInk ] = this.properties

      const word = 'hello'
      marker.write(word)

      expect(marker.remainingInk).to.equal(remainingInk - word.length)
    })

    it('should not decrement any characters that are spaces', function () {
      const marker = new Marker(...this.properties)
      const [ _size, _color, remainingInk ] = this.properties

      const word = 'hello world'
      marker.write(word)

      expect(marker.remainingInk).to.equal(remainingInk - word.replace(/\s/g, '').length)
    })

    it('should return the word that is inputted', function () {
      const marker = new Marker(...this.properties)

      const word = 'hello'
      const actual = marker.write(word)

      expect(actual).to.equal(word)
    })

    it('if the marker runs out of ink, it should only return the number of characters equal to remaining ink', function () {
      const marker = new Marker(...this.properties)
      marker.remainingInk = 3
      const actual = marker.write('hello')

      expect(actual).to.equal('hel')
    })

    it('if the marker runs out of ink, it can still write spaces', function () {
      const marker = new Marker(...this.properties)
      marker.remainingInk = 3
      const actual = marker.write('hi there')

      expect(actual).to.equal('hi t')
    })
  })
})
