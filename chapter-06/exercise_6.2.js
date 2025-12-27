import { question } from 'readline-sync';

const adj = ["super", "wonderful", "bad", "angry", "careful"];

function myFun() {
  const questionResult = question("What is your name? ");
  const nameAdj = Math.floor(Math.random() * adj.length);
  console.log(adj[nameAdj] + " " + questionResult);
}

myFun();
