#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.italic.underline.magenta("Enter a number from 1 - 10 , let's see if you can catch up with AI :)"))

let ai = Math.floor(Math.random() * 10) + 1
let user = await inquirer.prompt(
    [
        {
            name:"guess",
            type:"number",
            message:"Enter a number: ",
        }
    ]
)

if(user.guess === ai)

{
    console.log(chalk.bold.italic.greenBright(`You Win!`))
}

else{
    console.log(chalk.bold.italic.redBright(`Better luck next time!`))
}
console.log(chalk.bold.italic.yellowBright("AI guessed:",ai))
console.log(chalk.bold.italic.cyanBright("You guessed:",user.guess))
