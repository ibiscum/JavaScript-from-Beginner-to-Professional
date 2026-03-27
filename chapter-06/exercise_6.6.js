function calcFactorial(nr) {
  console.log(nr);
  if (nr === 0) {
    return 1;
  }
  else {

    // eslint-disable-next-line no-useless-assignment
    return nr * calcFactorial(--nr);
  }
}
console.log(calcFactorial(4));
