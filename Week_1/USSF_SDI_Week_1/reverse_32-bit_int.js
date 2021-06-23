var reverse = function(x) {
    //Stringify the integer
    let xString = x.toString();
    //return xString;
    let reverseArrayString = [];

    //For loop each character
    for (let i = xString.length - 1; i > -1; i--) {
        //Perform loop starting with last character in integer
        //Push last character into an array
        reverseArrayString.push(xString[i]);
    }

    //Join array back into integer
    let reverseX = Number.parseInt(reverseArrayString.join(""));

    //Check for negatives
    if (x < 0) {
      reverseX *= -1;
    }

    //Define range for 32-bits
    let bottom = -(2**31)
    let top = (2**31) - 1

    //If integer is within range, return integer
    if (reverseX >= bottom && reverseX <= top) {
        return reverseX;
    } else {
        return 0;
    }
    //Else falls outside of range, return 0
};

console.log(reverse(-123));