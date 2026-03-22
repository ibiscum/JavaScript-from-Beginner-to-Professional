let arr = ["grapefruit", 4, "hello", 5.6, true];
function printStuff(element, index) {
  console.log("01 Printing stuff:", element, "on array position:", index);
}

printStuff(arr[0], 0);

arr = ["squirrel", 5, "Tjed", new Date(), true];
function checkString(element) {
  return typeof element === "string";
}
let filterArr = arr.filter(checkString);
console.log("02 filter:", filterArr);

console.log("03 every:", arr.every(checkString));

arr = ["grapefruit", 4, "hello", 5.6, true];
arr.copyWithin(0, 3, 4);
console.log("04 copyWithin:", arr);


arr = ["grapefruit", 4, "hello", 5.6, true];
arr.copyWithin(0, 3, 5);
console.log("05 copyWithin:", arr);


arr = ["grapefruit", 4, "hello", 5.6, true, false];
arr.copyWithin(0, 3);
console.log("06 copyWithin:", arr);

arr = [1, 2, 3, 4];
let mapped_arr = arr.map(x => x + 1);
console.log(mapped_arr);

let bb = ["so", "bye", "bye", "love"];
console.log(bb.lastIndexOf("bye"));

bb = ["so", "bye", "bye", "love"];
console.log(bb.lastIndexOf("hi"));

let letters = ["a", "b", "c"];
let x = letters.join();
console.log(x);

letters = ["a", "b", "c"];
x = letters.join('-');
console.log(x);
