console.clear();

var fs = require('fs');

function formatter (input, output) {
  let data = fs.readFileSync(input).toString();
  console.log('Before Formatter:\n', data)

  data = data.split('\n').filter(line => line !== "").map(line => line.split(','))

  let key1 = data[0][0]
  let key2 = data[0][1]

  let objArray = []

  for(let i = 1; i < data.length; i++) {
      let obj = {}
      obj[key1] = data[i][0]
      obj[key2] = data[i][1]
      objArray.push(obj)
  }
  console.log('\nAfter Formatter:\n', objArray);

  //writes the contents to a file
  fs.writeFileSync(output, JSON.stringify(objArray));

  // deletes a file
  //fs.unlinkSync(input)
}

formatter('names.csv','names.JSON')