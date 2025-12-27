let x = "Global variable!";

function testAvailability(x) {
  console.log("01 Available here:", x);
}

testAvailability("Local variable!");
console.log("02 Not available here:", x);

let y = "Global variable!";

function testAvailabilityB() {
  let y = "Local variable!";
  console.log("03 Available here:", y);
}

testAvailabilityB();
console.log("04 Not available here:", y);

function testAvailabilityC() {
  let y = "I'll return";
  console.log("05 Available here:", y);
  return y;
}

testAvailabilityC();

let z = testAvailability();
console.log("06 Outside the function:", z);
console.log("07 Not available here:", y);

let globalVar = "Accessible everywhere!";
console.log("08 Outside function:", globalVar);

function creatingNewScope(x) {
  console.log("09 Parameter:", x)
  console.log("10 Access to global variables from inside functions.", globalVar);
}

creatingNewScope("some parameter");

console.log("11 Still available:", globalVar);

function doingStuff() {
  let condition = true;
  if (condition) {
    var x = "local";
  }
  console.log("12 Local variable:", x);
}

doingStuff();

function doingStuffB() {
  let condition = true;
  if (condition) {
    let x = "local";
    x; // for linting
  }
  console.log("13 let variable:", x);
}

doingStuffB();

x = "global";

function doingStuffC() {
  let x = "local";
  console.log("14 local variable:", x);
}

doingStuffC();

x = "global";

function confuseReader() {
  x = "Guess my scope...";
  console.log("15 Inside the function:", x);
}

confuseReader();
console.log("16 Outside of function:", x);
