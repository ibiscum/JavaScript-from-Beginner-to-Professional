let nr1 = 12;
let nr2 = 14;
let str1 = "Hello ";
let str2 = "addition";
let result1 = nr1 + nr2;
let result2 = str1 + str2;
console.log("ex_23:", result1, result2);

nr1 = 20;
nr2 = 4;
str1 = "Hi ";
let nr3 = 3;
result1 = nr1 - nr2;
result2 = str1 - nr3;
console.log("ex_24:", result1, result2);

nr1 = 15;
nr2 = 10;
str1 = "Hi";
nr3 = 3;
result1 = nr1 * nr2;
result2 = str1 * nr3;
console.log("ex_25:", result1, result2);

nr1 = 30;
nr2 = 5;
result1 = nr1 / nr2;
console.log("ex_26:", result1);

nr1 = 2;
nr2 = 3;
result1 = nr1 ** nr2;
console.log("ex_27:", result1);

nr1 = 10;
nr2 = 3;
result1 = nr1 % nr2;
console.log("ex_28:", `${nr1} % ${nr2} = ${result1}`);

nr3 = 8;
let nr4 = 2;
result2 = nr3 % nr4;
console.log("ex_29:", `${nr3} % ${nr4} = ${result2}`);

let nr5 = 15;
let nr6 = 4;
let result3 = nr5 % nr6;
console.log("ex_30:", `${nr5} % ${nr6} = ${result3}`);

let nr = 4;
nr++;
console.log("ex_31:", nr);

nr = 2;
console.log("ex_32:", nr++);
console.log("ex_33:", nr);

nr = 2;
console.log("ex_34:", ++nr);

nr1 = 4;
nr2 = 5;
nr3 = 2;
console.log("ex_35:", nr1++ + ++nr2 * nr3++);
