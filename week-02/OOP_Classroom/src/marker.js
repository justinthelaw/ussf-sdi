function writeSpaces (string, remainingInk) {
  let strArr = string.split('')
  let strArrNew = []
  for (let i = 0; i < strArr.length; i++) {
    if (remainingInk > 0 && strArr[i] !== ' ') {
      strArrNew.push(strArr[i])
      remainingInk--
    } else if (strArr[i] === ' '){
      strArrNew.push(strArr[i])
    }
  }
  let stringNew = strArrNew.join('')
  return stringNew
}

class Marker {
  constructor (size, color, remainingInk) {
    this.size = size
    this.color = color
    this.remainingInk = remainingInk
  }

  write(string) {
    if (this.remainingInk === 0) {
      string = ''
      return string
    } else if (this.remainingInk > string.length) {
      let strFiltered = string.replaceAll(' ', '')
      this.remainingInk -= strFiltered.length
      return string
    } else if (this.remainingInk < string.length) {
      return writeSpaces(string, this.remainingInk)
    }
  }
}

module.exports = Marker