class Venue {
  constructor(name, capacity, location, isOpen, hasCovidMeasures) {
    this.name = name;
    this.capacity = capacity;
    this.location = location;
    this.isOpen = isOpen;
    this.hasCovidMeasures = hasCovidMeasures;
  }

  close() {
    if (this.isOpen) {
      this.isOpen = false;
    } else {
      console.log(`${this.name} is already closed!`);
    }
  }

  open() {
    if (!this.isOpen) {
      this.isOpen = true;
    } else {
      console.log(`${this.name} is already open!`);
    }
  }

  set changeCapacity(number) {
    this.capacity += number;
  }

}

class ThemePark extends Venue {
  constructor(name, capacity, location, isOpen, hasCovidMeasures, rides) {
    super(name, capacity, location, isOpen, hasCovidMeasures);
    this.rides = rides;
  }

  open() {
    super.open()
    console.log(`${this.name} HAS OPENED! GIVE US YOUR MONEY!`)
  }

  close() {
    super.close()
    console.log(`${this.name} HAS CLOSED! THANK YOU FOR THE MONEY!`)
  }

}

var assert = require('assert');

describe("ThemePark", function() {

  describe("#changeCapacity()", function() {
    it("should change capacity by the specified value", function() {
      let sixFlagsRides = ['Tatsu', 'Goliath', 'West Coast Racers', 'Full Throttle', 'Tower of Doom'];
      let sixFlags = new ThemePark('Six Flags', 20000, 'New Jersey', false, true, sixFlagsRides)

      sixFlags.changeCapacity = 500;

      assert.strictEqual(sixFlags.capacity, 20500)
    })
  })

})