let text = "I love JavaScript!";
console.log(text.match(/javascript/));

text = "I love JavaScript!";
console.log(text.match(/javascript/i));

text = "I love JavaScript!";
console.log(text.match(/javascript|nodejs|react/i));

text = "I love React and JavaScript!";
console.log(text.match(/javascript|nodejs|react/i));

text = "I love React and JavaScript!";
console.log(text.match(/javascript|nodejs|react/gi));

text = "d";
console.log(text.match(/[abc]/gi));
console.log(text.match(/[a-zA-Z0-9]/));

text = "Just some text.";
console.log(text.match(/./g));

text = "Just some text.";
console.log(text.match(/\./g));

text = "I'm 29 years old.";
console.log(text.match(/\d/g));

text = "Coding is a lot of fun!";
console.log(text.match(/\s/g));

text = "In the end or at the beginning?";
console.log(text.match(/\bin/gi));

text = "I love JavaScript!";
console.log(text.match(/(love|hate)\s(javascript|spiders)/gi));

console.log(text.match(/[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]/));

text = "123123123";
console.log(text.match(/(123)+/g));

text = "abcabcabcabc";
console.log(text.match(/(abc){1,2}/));

text = "That's not the case.";
console.log(text.search(/CaSE/i));

text = "Coding is fun. Coding opens up a lot of opportunities.";
console.log(text.replace("Coding", "Javascript"));

text = "Coding is fun. Coding opens up a lot of opportunities.";
console.log(text.replace(/Coding/g, "Javascript"));

(function () {
  console.log("IIFE!");
})();

function testA(a, b, c) {
  console.log("first:", a, arguments[0]);
  console.log("second:", a, arguments[1]);
  console.log("third:", a, arguments[2]);
}

testA("fun", "js", "secrets");

function testB(a, b, c) {
  a = "nice";
  arguments[1] = "JavaScript";
  console.log("first:", a, arguments[0]);
  console.log("second:", a, arguments[1]);
  console.log("third:", a, arguments[2]);
}

testB("fun", "js", "secrets");

("use strict");
var x;
x = 5;
console.log(x);

x = 5;
console.log(x);
var x;

function sayHi() {
  greeting = "Hello!";
  console.log(greeting);
}

document.cookie = "name=Maaike;favoriteColor=black";
let cookie = decodeURIComponent(document.cookie);
let cookieList = decodedCookie.split(";");
for (let i = 0; i < cookieList.length; i++) {
  let c = cookieList[i];
  if (c.charAt(0) == " ") {
    c = c.trim();
  }
  if (c.indexOf("name") == 0) {
    return c.substring(4, c.length); //start one later to skip =
  }
}

function somethingVeryDangerous() {
  throw Error;
}

try {
  somethingVeryDangerous();
} catch (e) {
  if (e instanceof TypeError) {
    // deal with TypeError exceptions
  } else if (e instanceof RangeError) {
    // deal with RangeError exceptions
  } else if (e instanceof EvalError) {
    // deal with EvalError exceptions
  } else {
    //deal with all other exceptions
    throw e; //rethrow
  }
}

try {
  trySomething();
} catch (e) {
  console.log("Oh oh");
} finally {
  console.log("Error or no error, I will be logged!");
}
