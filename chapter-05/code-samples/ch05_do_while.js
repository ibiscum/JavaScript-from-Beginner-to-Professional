// do {
//   code to be executed if the condition is true
// } while (true);

import { question } from 'readline-sync';

let number;
do {
  number = question("Please enter a number between 0 and 100: ");
  console.log("You entered:", number);
} while (!(number >= 0 && number < 100));
