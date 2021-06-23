console.clear();

console.log("TITLE: Nested_1\n");

console.log("DESCRIPTION: Manipulation of a given object that contains nested objects and/or arrays. 1) Determining if company is an array, 2) accessing the company's values, 3) deleting the \"geo\" object, 4) modifying the phone number, 5) adding a last_modified property to the object, and 6) generating an array of the object keys\n");

console.log("SCRIPT:\n");

const userOrig = {
  "id": 3,
  "name": "Clementine Bauch",
  "username": "Samantha",
  "email": "Nathan@yesenia.net",
  "address": {
    "street": "Douglas Extension",
    "suite": "Suite 847",
    "city": "McKenziehaven",
    "zipcode": "59590-4157",
    "geo": {
      "lat": "-68.6102",
      "lng": "-47.0653"
    }
  },
  "phone": "1-463-555-4447",
  "website": "ramiro.info",
  "company": {
    "name": "Romaguera-Jacobson",
    "catchPhrase": "Face to face bifurcated interface",
    "corporate_tagline": "e-enable strategic applications"
  }
};

console.log("The original user data:");
console.log(userOrig);

//Begin editing the user object
var userEdit = userOrig; //Initialize a new copy of the user object

var currentdate = new Date(); //Initialize date/time
var datetime = //Generate date/time format  
(currentdate.getMonth()+1) + "/" 
+ currentdate.getDate()  + "/" 
+ currentdate.getFullYear() + " @ "  
+ currentdate.getHours() + ":"  
+ currentdate.getMinutes() + ":" 
+ currentdate.getSeconds();
userEdit.last_modified = datetime; //Add last_modified as a new property with date/time

delete userEdit.address.geo; //Deleting the geo object

userEdit.phone = "1-888-888-8888"; //Modifying the phone value

console.log("\nThe edited user object:");
console.log(userEdit);

console.log("\nSome edited user object metadata:");

console.log("Company's properties:");
console.table(userEdit.company);
console.log("Company is an array? (Should be false): " + Array.isArray(userEdit.company)); //Determining if an object property is an array
console.log("Company is not an array? (Should be true): " + !Array.isArray(userEdit.company) + "\n");

console.table(Object.keys(userEdit)); //Print all user object keys

console.log("\nTime Elapsed:"); 
console.timeEnd(); //Ends timer