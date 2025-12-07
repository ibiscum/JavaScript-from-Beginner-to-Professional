let x = "Global variable!";

function testAvailability(x) {
  console.log("Available here:", x);
}

testAvailability("Local variable!");
console.log("Not available here:", x);

let y = "Global variable!";

function testAvailabilityB() {
  let y = "Local variable!";
  console.log("Available here:", y);
}

testAvailabilityB();
console.log("Not available here:", y);

// function testAvailabilityC() {
//   let y = "I'll return";
//   console.log("Available here:", y);
//   return y;
// }

// testAvailabilityC();

// let z = testAvailability();
// console.log("Outside the function:", z);
// console.log("Not available here:", y);

// let globalVar = "Accessible everywhere!";
// console.log("Outside function:", globalVar);

// function creatingNewScope(x) {
//   console.log("Access to global variables from inside functions.", globalVar);
// }

// creatingNewScope("some parameter");

// console.log("Still available:", globalVar);

// function doingStuff() {
//   if (true) {
//     var x = "local";
//   }
//   console.log(x);
// }

// doingStuff();

// function doingStuffB() {
//   if (true) {
//     let x = "local";
//   }
//   console.log(x);
// }

// doingStuffB();

// x = "global";

// function doingStuffC() {
//   let x = "local";
//   console.log(x);
// }

// doingStuffC();

// var x = "global";

// function confuseReader() {
//   x = "Guess my scope...";
//   console.log("Inside the function:", x);
// }

// confuseReader();
// console.log("Outside of function:", x);
