#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let num_space = 0;

let ans = await inquirer.prompt
(
    [
        {
            name:"words",
            type:"input",
            message:chalk.bold.white.bgGreen("Enter Words, I Will Count Them For You:\n"),
        }
    ]
)

if (ans.words.length >= num_space)
{
    for(let i = 1; i <= ans.words.length; i++)
    {
        let current_character = ans.words.charAt(i)
    
        let last_character = ans.words.charAt(i - 1)
    
        if(current_character === " " && last_character !== " ")

        {
            num_space++
        }
    }
}

console.log(chalk.bold.italic.magenta.bgWhiteBright("\nTotal Number Of Words Are:"))
console.log(chalk.bold.italic.magentaBright.bgYellowBright(`\n${num_space + 1}`))