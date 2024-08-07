#! /usr/bin/env node
import inquirer from "inquirer";

const randomNumber=Math.floor(Math.random()*6+1);
let answer= await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"Please Guess A Number between 1-10"
    },
])
if(randomNumber===answer.userGuessedNumber){
    console.log("CONGRATULATION")
    console.log("***************")
    console.log("YOU GUESSED IT CORRECT!")
}else{
    console.log("OOPS!")
    console.log(".........................")
    console.log("WRONG ANSWER!")
    console.log("Try Again:)")
}