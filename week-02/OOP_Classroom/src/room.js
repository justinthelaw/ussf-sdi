class Room {
  constructor (name, description) {
    this.name = name
    this.description = description
    this.contents = []
  }

  add (item) {
  this.contents.push(item)
  return this;
  }

  has (item) {
  if (this.contents.indexOf(item) !== -1) {
    return true;
    } else {
    return false;
    }
  }
}


module.exports = Room
