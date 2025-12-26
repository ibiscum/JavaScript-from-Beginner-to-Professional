let str = "Hello, what's your name? Is it \"Mike\"?";
console.log("ex_12:", str);
let str2 = 'Hello, what\'s your name? Is it "Mike"?';
console.log("ex_13:", str2);

let str3 = "New \nline."
console.log("ex_14:", str3);

let str4 = "I'm containing a backslash: \\!";
console.log("ex_15:", str4);

str = "Hello";
console.log("ex_16:", str, typeof str);

let nr = 7;
console.log("ex_17:", nr, typeof nr);

let bigNr = 12345678901234n;
console.log("ex_18:", bigNr, typeof bigNr);

let bool = true;
console.log("ex_19:", bool, typeof bool);

let sym = Symbol("unique");
console.log("ex_20:", sym, typeof sym);

let undef = undefined;
console.log("ex_21", undef, typeof undef);

let unknown = null;
console.log("ex_22:", unknown, typeof unknown);
