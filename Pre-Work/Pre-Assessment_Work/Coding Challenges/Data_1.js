console.clear();

console.log("TITLE: Data_1\n");

console.log("DESCRIPTION: Write a function that takes in a sentence (string) and counts the times a word occurs in the sentence.\n");

console.log("SCRIPT:\n");


function countWords(stringOfWords) {
  
  let arrayOfWords = stringOfWords.split(" "); //Turn the words in the sentence into an array of elements
  console.log(arrayOfWords);
  
  let wordCount = {}; //Initialize the word count as a object
  
  for (i = 0; i < arrayOfWords.length; i++) //Iterate over the sentence
  {
      let currentWord = arrayOfWords[i];
      
      if (wordCount[currentWord] === undefined)
      {
          wordCount[currentWord] = 1; //Initialize a new word that appears for the first time with a count of 1
      }
      else
      {
          wordCount[currentWord]++; //Add another count for a word that has repeated
      };
      
  };
  
  return wordCount;

};

var prompt = require("prompt"); //Call prompt
prompt.start(); //Run prompt

prompt.get //Prompt user for inputs
(
  ["String"], //String input and Number (index) input

  function (err, result) //Function that displays results
  { 
    console.log(countWords(result.String));

    console.log("\nTime Elapsed:");
    console.timeEnd(); //Ends timer
  }
);