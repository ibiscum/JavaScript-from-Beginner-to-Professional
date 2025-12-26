let theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
console.log(theList);

theList.pop();
theList.shift();
console.log(theList);

theList.unshift("FIRST");
theList[3] = "hello World";
theList[2] = "MIDDLE";
theList.length = 4;
console.log(theList);

theList.push("LAST");
console.log(theList);
