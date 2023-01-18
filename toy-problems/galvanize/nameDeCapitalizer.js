console.clear();

var fs = require('fs');

function lowerCase (input) {

  const decapitalize = (string) => {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }

  let caps = fs.readFileSync(input).toString();
  console.log('Before DeCapitalizer:\n', caps)

  caps = caps.split(' ').map(decapitalize).join(' ');
  caps = caps.split('\n').map(decapitalize).join('\n');
  console.log('\nAfter DeCapitalizer:\n', caps)

  fs.writeFileSync(input, caps);
}

lowerCase('names.txt');
