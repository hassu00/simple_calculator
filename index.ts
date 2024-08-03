#! /usr/bin/env node
import inquirer from "inquirer"
import Choices from "inquirer/lib/objects/choices.js"
let answer = await inquirer.prompt([
   
    {name:"q1",message:"what`s your name",type:"input"},
    {name:"q2",message:"write first number",type:"input"},
    {name:"q3",message:"write secound number",type:"input"},
    {name:"q4",message:"choose an operator",type:"list",choices:["addition","subtraction","division","multiplication"]}
])
 let result:number=0;
 let num1 = parseFloat(answer.q2);
let num2 = parseFloat(answer.q3);
if ( answer.q4 === "addition") {
    console.log(result=answer.q2 + answer.q3)
} else if (answer.q4 ==="subtraction" ) {
    console.log(result=answer.q2 - answer.q3)
} else if (answer.q4 ==="division" ) {
    console.log(result=answer.q2 / answer.q3)
} else if (answer.q4 ==="multiplication" ) {
    console.log(result=answer.q2 * answer.q3)
} else {
    console.log("please select a valid operater")
}  

console.log("your answer is",result)