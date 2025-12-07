function doingStuffAnonymously() {
  console.log("Not so secret though.");
}

doingStuffAnonymously();

let functionVariable = function () {
  console.log("Not so secret though.");
};

functionVariable();

function doFlexibleStuff(executeStuff) {
  executeStuff();
  console.log("Inside doFlexibleStuffFunction.");
}

doFlexibleStuff(functionVariable);

let anotherFunctionVariable = function () {
  console.log("Another anonymous function implementation.");
};

doFlexibleStuff(anotherFunctionVariable);

function doOuterFunctionStuff(nr) {
  console.log("Outer function");
  doInnerFunctionStuff(nr);
  function doInnerFunctionStuff(x) {
    console.log(x + 7);
    console.log("I can access outer variables:", nr);
  }
}

doOuterFunctionStuff(2);

function doOuterFunctionStuffB(nr) {
  doInnerFunctionStuff(nr);
  function doInnerFunctionStuff(x) {
    let z = 10;
    console.log(x + z);
    console.log("I can access outer variables:", nr);
    return x + z;
  }
  // console.log("Not accessible:", z);
}

doOuterFunctionStuffB(2);

function doOuterFunctionStuffC(nr) {
  doInnerFunctionStuff(nr);
  function doInnerFunctionStuff(x) {
    let z = 10;
    return x + z;
  }
}

// doInnerFunctionStuff(3);
doOuterFunctionStuffC(2);

let youGotThis = function () {
  console.log("You're doing really well, keep coding!");
};

setTimeout(youGotThis, 1000);
setInterval(youGotThis, 1000);
