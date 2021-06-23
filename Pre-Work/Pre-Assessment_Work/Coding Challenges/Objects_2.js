console.clear();

console.log("TITLE: Objects_2\n");

console.log("DESCRIPTION: Compares different ways an object can be created, parsed, and manipulated. Uses block-scoping and different declarations.\n");

console.log("SCRIPT:\n");

console.log("The normal way of creating an object using var:");

var name = 'Loser';
var artist = 'Beck';
var song = { name: name, artist: artist };
console.log(song);

console.log("The shorthand way of creating an object using const:");
{
  const name = 'Loser'
  const artist = 'Beck'
  const song = { name, artist }
  console.log(song);
}

console.log("\n")

console.log("The normal way of nesting an array within an object using var:");

var artist = 'Beck';
var songs = [ 'Loser', 'Up All Night', 'Dear Life' ];

var result = {};
result[artist] = songs;
console.log(result);

console.log("The shorthand way of nesting an array within an object using const:");
{
  const artist = 'Beck';
  const songs = [ 'Loser', 'Up All Night', 'Dear Life' ];

  const result = { [artist]: songs };
  console.log(result);
}

console.log("\nTime Elapsed:"); 
console.timeEnd(); //Ends timer