console.clear();

console.log("TITLE: Objects_1\n");

console.log("DESCRIPTION: Write a function that takes in keys and values, makes an object with the inputs, and then asks the user if they want to change a value. If the answer is yes, then the user inputs a the key that they would like to change the value of and the new value. If the answer is no, the object does not change. The script logs the final user created/modified object to the console.\n");

console.log("SCRIPT:\n");

var prompt = require("prompt") ;//Call prompt
prompt.start(); //Run prompt

prompt.get //Prompt user for inputs
(
  ["Key_1", "Value_1", "Key_2", "Value_2", "Key_3", "Value_3"], //Object inputs

  function (err, result) //Function that displays results
  {
    const objectUserInput = {};
    
    objectUserInput[result.Key_1] = result.Value_1;
    objectUserInput[result.Key_2] = result.Value_2;
    objectUserInput[result.Key_3] = result.Value_3;  

    console.log("\nUser-Created Object:");
    console.table(objectUserInput)

    var prompt = require("prompt"); //Call prompt
    prompt.start(); //Run prompt

    prompt.get //Prompt user for inputs
    (
      ["Replace_a_Value"], //Object inputs

      function (err, result) //Function that displays results
      {
        if (result.Replace_a_Value == "yes") 
        {
          console.clear();
          var prompt = require("prompt"); //Call prompt
          prompt.start(); //Run prompt

          prompt.get //Prompt user for inputs
          (
            ["Key_Replace", "Value_Replace"], //Object inputs

            function (err, result) //Function that displays results
            {            
              objectUserInput[result.Key_Replace] = result.Value_Replace; //replaces value at given key
              console.log ("\nUser-Created Object with Replacement:");
              console.table(objectUserInput);
              console.log("Object Keys: " + Object.keys(objectUserInput));
              console.log("Object Values: " + Object.values(objectUserInput));
              console.log("\nTime Elapsed:") ;
              console.timeEnd() ;//Ends timer
            }
          );
        }
        else
        {
        console.clear();
        console.log("\nNo Changes Were Made");
        console.log("\nUser-Created Object:");
        console.table(objectUserInput);
        console.log("Object Keys: " + Object.keys(objectUserInput));
        console.log("Object Values: " + Object.values(objectUserInput));
        
        console.log("\nTime Elapsed:");
        console.timeEnd(); //Ends timer
        };
      }
    );
  }
);


