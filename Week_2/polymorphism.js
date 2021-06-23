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

  set increaseCapacity(number) {
    this.capacity += number;
  }

}

// let staplesCenter = new Venue('Staples Center', 10000, 'Los Angeles', false, true);
// console.log(staplesCenter, '\n');

// staplesCenter.open();
// staplesCenter.open();
// staplesCenter.close();
// staplesCenter.increaseCapacity = 500;

// console.log('\n', staplesCenter);

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

// let sixFlagsRides = ['Tatsu', 'Goliath', 'West Coast Racers', 'Full Throttle', 'Tower of Doom'];

// let sixFlags = new ThemePark('Six Flags', 20000, 'New Jersey', false, true, sixFlagsRides)
// console.log(sixFlags);

// sixFlags.open();
// sixFlags.close();