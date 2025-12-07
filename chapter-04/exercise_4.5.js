import { question } from 'readline-sync';

let prize = question("Pick a number 0-10: ");
prize = Number(prize);
let output = "My Selection: ";
switch (prize){
    case 0:
        output += "Gold"
        break;
    case 1:
        output += "Coin";
        break
    case 2:
        output += "Big";
        break;
    case 3:
        output += "Box of";
        break;
    case 4:
        output += "Silver";
        break;
    case 5:
        output += "Bricks";
        break;
    default:
        output += "Sorry try again";
}
console.log(output);
