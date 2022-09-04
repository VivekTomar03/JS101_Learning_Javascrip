// 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties


let DOB = 1998;
let Age = 2022 - DOB;

Age>=13 && Age<=19 ? console.log("Teenage") 
  : Age  >=20 && Age<=29 ? console.log("Twenties")  : console.log("invalid input");