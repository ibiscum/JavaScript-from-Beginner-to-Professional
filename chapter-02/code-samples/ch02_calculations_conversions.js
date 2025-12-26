let nr1 = 2;
let nr2 = "2";
console.log("ex_01:", nr1 * nr2);

nr1 = 4;
nr2 = "4";
console.log("ex_02:", nr1 + nr2);

let nrToStr = 6;
nrToStr = String(nrToStr);
console.log("ex_03:", nrToStr, typeof nrToStr);

let strToNr = "12";
strToNr = Number(strToNr);
console.log("ex_04:", strToNr, typeof strToNr);

let strToBoolA = "any string will return true";
strToBoolA = Boolean(strToBoolA);
console.log("ex_05:", strToBoolA, typeof strToBoolA);

let nullToNr = null;
nullToNr = Number(nullToNr);
console.log("ex_06:", nullToNr, typeof nullToNr);

let strToNrA = "";
strToNrA = Number(strToNrA);
console.log("ex_07:", strToNrA, typeof strToNrA);

let strToNrB = "hello";
strToNrB = Number(strToNrB);
console.log("ex_08:", strToNrB, typeof strToNrB);

let strToBoolB = "";
strToBoolB = Boolean(strToBoolB);
console.log("ex_09:", strToBoolB, typeof strToBoolB);

let strToBoolC = "false";
strToBoolC = Boolean(strToBoolC);
console.log("ex_10:", strToBoolC, typeof strToBoolC);

nr1 = 2;
nr2 = "2";
console.log("ex_11:", nr1 + Number(nr2));
