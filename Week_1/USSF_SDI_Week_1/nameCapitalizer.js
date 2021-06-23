console.clear();

var fs = require('fs');

function upperCase (input) {

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  let caps = fs.readFileSync(input).toString();
  console.log('Before Capitalizer:\n', caps);

  caps = caps.split(' ').map(capitalize).join(' ');
  caps = caps.split('\n').map(capitalize).join('\n');
  console.log('\nAfter Capitalizer:\n', caps)

  fs.writeFileSync(input, caps);
}

upperCase('names.txt');
