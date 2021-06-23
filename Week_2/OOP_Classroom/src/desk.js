const { Marker } = require(".")

class Desk {
  constructor (length, width, height, isWhiteboard) {
    this.length = length
    this.width = width
    this.height = height
    this.isWhiteboard = isWhiteboard
    this.content = ''
  }
  write(string) {
    this.content += string
  }

  wipe () {
    if (this.isWhiteboard === true) {this.content = ''}
    else {return}
  }
}

module.exports = Desk
