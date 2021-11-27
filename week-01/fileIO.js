console.clear();

//Initialize fs and node-fetch for file I/O usage
var fs = require('fs');
//const fetch = require('node-fetch');

//CREATE A FILE
fs.open('greetingIO.txt', 'w', (err, file) => {
  if (err) throw err;
  console.log('greetingIO.txt file created');
});

fs.open('goodbyeIO.txt', 'w', (err, file) => {
  if (err) throw err;
  console.log('goodbyeIO.txt file created');
});

fs.open('wrongfileIO.txt', 'w', (err, file) => {
  if (err) throw err;
  console.log('wrongfileIO.txt file created');
});

//ADD CONTENT TO A FILE (if the file doesn't exist, this will add it)
fs.appendFile('greetingIO.txt', 'Hello World!', (err) => {
  if (err) return err;
  console.log('Added "Hello World!" to "greetingIO.txt" file!');
})

//WRITE TO A FILE  (swap to sync)
fs.writeFile('goodbyeIO.txt', 'Goodbye World!', function (err) {
  if (err) throw err;
  console.log('Added "Goodbye World!" to "goodbyeIO.txt" file!');
});

//RENAME A FILE
fs.rename('goodbyeIO.txt', 'byebyeIO.txt', function (err) {
  if (err) throw err;
  console.log('File "goodbyeIO.txt" renamed to "byebyeIO.txt"!');
})

//DELETE A FILE
fs.unlink('wrongfileIO.txt', (err) => {
  if (err) return err;
  console.log('Deleted "wrongfileIO.txt"!')
})

//READ A FILE
fs.readFile('greetingIO.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log('Data from file "greetingIO.txt": ', data);
})