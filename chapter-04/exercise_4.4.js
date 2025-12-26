import { question } from 'readline-sync';
const randomNumber = Math.floor(Math.random() * 6);
let answer = "Something went wrong";
let q = question("Ask me anything: ");
switch (randomNumber) {
  case 0:
    answer = "it will work out";
    break;
  case 1:
    answer = "maybe, maybe not";
    break;
  case 2:
    answer = "probably not";
    break;
  case 3:
    answer = "highly likely";
    break;
  default:
    answer = "I don't know about that";
}
let output = "You asked me " + q + ". I think that " + answer;
console.log(output);
