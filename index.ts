#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\n\t\tWELCOME TO AHMER'S CLI SIMPLE CALCULATOR\n");

let answers = await inquirer.prompt ([
{message:"kindly enter your first number", type:"number", name:"firstNumber" },
{message:"kindly enter your second number", type:"number", name:"secondNumber"},
{message:"kindly select an operator to perform operation", type:"list", name:"operators", choices:["addition","subtraction","multiplication","division"]}
])

console.log(answers);

if(answers.operators == "addition")
{console.log(answers.firstNumber + answers.secondNumber)}

else if(answers.operators == "subtraction")
{console.log(answers.firstNumber - answers.secondNumber)}

else if (answers.operators == "multiplication")
{console.log(answers.firstNumber * answers.secondNumber)}

else if(answers.operators == "division")
{console.log(answers.firstNumber / answers.secondNumber)}

else
{console.log("invalid number!")}
("kindly enter a valid number to perform operation")