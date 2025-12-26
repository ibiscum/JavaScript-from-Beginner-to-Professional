let intNr = 1;
let decNr = 1.5;
console.log("ex_43:", intNr, decNr);

let hexNr = 0xff;
let binNr = 0b1010;
let octNr = 0o744;
console.log("ex_44:", hexNr, binNr, octNr);

let expNr = 1.4e15;
console.log("ex_45:", expNr);

let bigNr = 90071992547409920n;
// typeError
let result = bigNr + BigInt(intNr);
console.log("ex_46:", result);
