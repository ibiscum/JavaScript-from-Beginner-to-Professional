let intNr = 1;
let decNr = 1.5;
console.log(intNr, decNr);

let hexNr = 0xff;
let binNr = 0b1010;
let octNr = 0o744;
console.log(hexNr, binNr, octNr);

let expNr = 1.4e15;
console.log(expNr);

let bigNr = 90071992547409920n;
// typeError
let result = bigNr + intNr;
console.log(result);
