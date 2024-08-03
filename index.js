#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    { name: "q1", message: "what`s your name", type: "input" },
    { name: "q2", message: "write first number", type: "input" },
    { name: "q3", message: "write secound number", type: "input" },
    { name: "q4", message: "choose an operator", type: "list", choices: ["addition", "subtraction", "division", "multiplication"] }
]);
var result = 0;
var num1 = parseFloat(answer.q2);
var num2 = parseFloat(answer.q3);
if (answer.q4 === "addition") {
    console.log(result = answer.q2 + answer.q3);
}
else if (answer.q4 === "subtraction") {
    console.log(result = answer.q2 - answer.q3);
}
else if (answer.q4 === "division") {
    console.log(result = answer.q2 / answer.q3);
}
else if (answer.q4 === "multiplication") {
    console.log(result = answer.q2 * answer.q3);
}
else {
    console.log("please select a valid operater");
}
console.log("your answer is", result);
