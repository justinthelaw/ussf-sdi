//PURPOSE: This REPL was generated to prepare Justin Law for the USSF SDI pre-assessment and follow-on courses. This REPL is a JavaScript, Node.js scratchpad for learning JavaScript on the Galvanize training platform. Many of the coding challenges have been expanded in scope or made-up by Justin Law as learning opportunities. Some orginally stand-alone coding challenges have been combined and/or turned into user-prompts for argument input. All coding challenges are listed and can be called by the user. Most coding challenges include prompts that are logged to the console for user input.
  //The Fashion Inventory challange is located in fashionInventoryFilters

//SCRIPT DESCRIPTION: This file summarizes all coding challenges housed in this REPL. The user can run the script and input a coding challenge name to run it.

console.log("Coding Challenges to choose from:\n Where (TEST) is for script testing and (WIP) is a work in progress. \n")

var codeFolder = "./Coding Challenges/";
var fs = require("fs"); //Initialize fs
fs.readdirSync(codeFolder).forEach
(
  file => 
    {
      file.split(".");
      fileName = (file.split("."))[0]
      console.log(fileName);
    }
); //Lists all JavaScript files present in the Coding Challenges folder

//CLICK RUN TO START: Prompt for user to input desired coding challenge
console.time(); //Begins timer
console.log("\n");

var challenge = prompt(`Please type the exact filename of the desired coding challenge`);

if (challenge == null || challenge == "") 
{
  console.clear();
  txt = "User cancelled the prompt.";
} //Empty or null input will end script
else 
{
  var selectedChallenge = challenge;
  console.log(require  (codeFolder + selectedChallenge +".js"));
}; 
//Correct input will run desired coding challenge
//Incorrect input will throw script errorF_SDI