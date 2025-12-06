let arr = ["grapefruit", 4, "hello", 5.6, true];
function printStuff(element, index) {
    console.log("Printing stuff:", element, "on array position:", index);
}

arr = ["squirrel", 5, "Tjed", new Date(), true];
function checkString(element, index) {
return typeof element === "string";
}
let filterArr = arr.filter(checkString);
console.log(filterArr);

console.log(arr.every(checkString));

arr = ["grapefruit", 4, "hello", 5.6, true];
arr.copyWithin(0, 3, 4);

arr = ["grapefruit", 4, "hello", 5.6, true];
arr.copyWithin(0, 3, 5);

arr = ["grapefruit", 4, "hello", 5.6, true, false];
arr.copyWithin(0, 3);
console.log(arr);

arr = [1, 2, 3, 4];
let mapped_arr = arr.map(x => x + 1);
console.log(mapped_arr);

let bb = ["so", "bye", "bye", "love"];
console.log(bb.lastIndexOf("bye"));

bb = ["so", "bye", "bye", "love"];
console.log(bb.lastIndexOf("hi"));

let letters = ["a", "b", "c"];
x = letters.join();
console.log(x);

letters = ["a", "b", "c"];
let x = letters.join('-');
console.log(x);