#! /usr/bin/env node

import inquirer from "inquirer";
// Math.floor = this method is used to convert floating number into downword whole number.
//Math.random = show number randomly.
//"*" is used for limitation of game number and "+" used for add 1 number because math.floor method gave downword number.
const randomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
  {
    name: "userGuessingNumber",
    type: "number",
    message: "Guess a number between 1-10:",
  },
]);

if (answer.userGuessingNumber === randomNumber) {
  console.log("Congratulations! you guess a right number.");
} else {
  console.log("You Lose! you guess a wrong number.");
}
