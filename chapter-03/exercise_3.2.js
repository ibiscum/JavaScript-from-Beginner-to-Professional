const myList = [];
console.log(myList);

myList.push("Milk", "Bread", "Apples");
console.log(myList);

myList.splice(1, 1, "Bananas", "Eggs");
console.log(myList);

const removeLast = myList.pop();
console.log(removeLast);

myList.sort();
console.log(myList);
console.log(myList.indexOf("Milk"));

myList.splice(1, 0, "Carrots", "Lettuce");
console.log(myList);

const myList2 = ["Juice", "Pop"];
const finalList = myList.concat(myList2, myList2);
console.log(finalList);

console.log(finalList.lastIndexOf("Pop"));
