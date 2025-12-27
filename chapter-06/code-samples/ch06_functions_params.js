import { question } from 'readline-sync';

function hiThere() {
  let you = question("What's your name? ");
  console.log("Hello " + you + "!");
}

hiThere();

console.log("this is an argument");
question("argument here too ");

let arr = [];
arr.push("argument");

function addTwoNumbers(x, y) {
  console.log(x + y);
}

addTwoNumbers(3, 4);
addTwoNumbers(12, -90);

// function myFunc(param1, param2) {
//   code of the function;
// }

// myFunc("arg1", "arg2");

function addTwoNumbersB(x = 2, y = 3) {
  console.log(x + y);
}

addTwoNumbersB();
addTwoNumbersB(6, 6);
addTwoNumbersB(10);

// let favoriteSubject = prompt("What is your favorite subject?");

let result = addTwoNumbers(4, 5);
console.log(result);

function addTwoNumbersC(x, y) {
  return x + y;
}

let results = [];

for (let i = 0; i < 10; i++) {
  let result = addTwoNumbersC(i, 2 * i);
  results.push(result);
}

console.log(results);
