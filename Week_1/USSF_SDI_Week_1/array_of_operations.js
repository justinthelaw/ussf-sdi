function myFunction(number){

  const functionArray = [
    (num)=>num+=1,
    (num)=>num*=2,
    (num)=>num*=534,
    (num)=>num/=3,
    (num)=>Math.ceil(num)
  ];

  for (const func of functionArray) {
    number = func(number);
  }
  return number;
}
console.log(myFunction(0));