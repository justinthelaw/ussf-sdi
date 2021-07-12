var assert = require('assert');

describe("Array", function() {

  describe("#indexOf()", function() {
    it("should return -1 when a value is outside the range of a given array", function() {
      assert.strictEqual([1, 2, 3].indexOf(4), -1)
    })
  })

  describe("#includes()", function() {
    it("should return true if the value is in the range of the array", function() {
      assert.strictEqual([1, 2, 3].includes(3), true)
    })
  })

})