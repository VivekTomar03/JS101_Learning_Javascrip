//Problem 4: Given 3 numbers (all different values), print which is greatest

let a = 15;
let b = 10;
let c = 25;

a > b && a > c ? console.log(a, "Greatest") : b > a && b > c ? console.log(b, "Greatest")
  : c > a && c > b ? console.log(c, "Greatest") : console.log("invalid input");