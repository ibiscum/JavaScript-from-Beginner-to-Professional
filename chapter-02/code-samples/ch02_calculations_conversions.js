let nr1 = 2;
let nr2 = "2";
console.log(nr1 * nr2);

nr1 = 4;
nr2 = "4";
console.log(nr1 + nr2);

let nrToStr = 6;
nrToStr = String(nrToStr);
console.log(nrToStr, typeof nrToStr);

let strToNr = "12";
strToNr = Number(strToNr);
console.log(strToNr, typeof strToNr);

let strToBoolA = "any string will return true";
strToBoolA = Boolean(strToBoolA);
console.log(strToBoolA, typeof strToBool);

let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("null", nullToNr, typeof nullToNr);

let strToNrA = "";
strToNrA = Number(strToNrA);
console.log("empty string", strToNrA, typeof strToNrA);

let strToNrB = "hello";
strToNrB = Number(strToNrB);
console.log(strToNrB, typeof strToNr2);

let strToBoolB = "";
strToBoolB = Boolean(strToBoolB);
console.log(strToBoolB, typeof strToBoolB);

let strToBool2 = "false";
strToBool2 = Boolean(strToBool2);
console.log(strToBool2, typeof strToBool2);

nr1 = 2;
nr2 = "2";
console.log(nr1 + Number(nr2));
