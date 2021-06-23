console.clear();

console.log("TITLE: Conditionals_1\n");

console.log("DESCRIPTION: Write a function that takes a input and runs it through several IF tests. The user can manually change the input in the script below.\n");

console.log("SCRIPT:\n");

//ORIGINAL INPUT:  Go to 10:12 (Line:Character) to modify this input!

//MODIFIABLE INPUT BELOW:
var input = "Go to 10:12 (Line:Character) to modify this input!"

console.log("The input is:");
console.log(input);


if (input === "Go to 10:12 (Line:Character) to modify this input!") //Checks whether user modified the input prior to running other tests
{
  console.log("=======================\nChange the original input, re-run the script, and see what happens!\n=======================")
}
else
{
  console.log("-----------------------\nTest Results:")

  //TEST 1: Is the input defined? What type is the input?

  if (typeof input != "undefined") //Determines if the input is undefined
  {
    if (typeof input == "object") //Determines the typeof input
    {
      if (Array.isArray(input) == true)
      {
        console.log("Your input is defined!\nIt is an array!");
      }
      else
      {
        console.log("Your input is defined!\nIt is an object!");
      };
    }
    else
    {
      console.log("Your input is defined!\nIt is a " + typeof input + "!");
    };
  }
  else
  {
    console.log("Your input is undefined!");
  };

  //TEST 2: If it is a string, how long is it? If it is an array, output a "-" joined string. If it is an object, output an array of keys. If it is an integer or float, is it odd or even; is it an easy to imagine number? If it is boolean, make up a funny statement. If it is a bigint, then stringify it and remove the multiplier. If it is null or undefined, do not run any further test.

  if (typeof input == "string") //String case
  {
    console.log("The input string is " + input.length + " characters long!");

  }
  else if (typeof input == "array") //Array case
  {
    console.log("The input array in stringified form is: " + input.join("-")); //Join array using "-"
  }
  else if (typeof input == "object") //Object case
  {
    console.log("The input object's keys are:");
    console.table(Object.keys(input)); //Keys of the object
  }
  else if (typeof input == "number") //Number case
  {
    if (input % 2 == 0) //Modulo of 2 helps determine odd vs even numbers
    {
      console.log("Your input number is even!");
    }
    else
    {
      console.log("Your input number is odd!");
    };

    if (input >= -999999999999999 && input <= 999999999999999) //A simple AND case
    {
      console.log("Your input number is within a reasonable bound!");
    }
    else
    {
      console.log("Your input number is way out there!");
    };
  }
  else if (typeof input == "boolean") //Boolean case
  {
    if (input == true)
    {
      console.log("Everyone: Justin is so hot! You: So " + input + "!"); //You are too kind
    }
    else
    {
      console.log("Some random dude: Justin is so ugly! You: Definitely " + input + "!"); //Thanks for defending me
    };
  }
  else if (typeof input == "bigint") //bigint case
  {
    console.log("Your bigint without the multiplier is: " + input.toString()); //turning bigint to string removes the multiplier
  }
  else //Undefined case
  {
    console.log("Your input is " + typeof input + ", so no further tests can be run to completion!")
  };
};

console.log("\nTime Elapsed:");
console.timeEnd(); //Ends timer