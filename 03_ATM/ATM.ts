#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let flag = true;
while(flag)
{
    let my_balance = 10000;
    let my_pin = 1234
    console.log("\n")
    let pin = await inquirer.prompt
    (
        [
            {
                name:"p",
                type:"number",
                message:"Enter your pin code: "
            }
        ]
    )
    if(pin.p === my_pin)
    {
        console.log(chalk.greenBright.bold("\nCorrect Pin!\n"))
        
        let operations = await inquirer.prompt
        (
            [
                {
                    name:"operate",
                    type:"list",
                    message:"Select one option:",
                    choices: ["withdraw","check balance","fast cash"]
                }
            ]
        )
        
        if(operations.operate === "withdraw")
        {
            let amount = await inquirer.prompt
            (
                [
                    {
                        name:"amt",
                        type:"number",
                        message:"Enter Amount"
                    }
                ]
            )
            
                if(amount.amt <= my_balance )
            {
                my_balance -= amount.amt; console.log(chalk.yellowBright.italic.bold(chalk.yellow.bgGreen(`Your remaining balance is: ${my_balance}`)))
            }
        
                else{console.log(chalk.red.bold.italic("You have insufficient balance!"))}
        }
        
        if (operations.operate === "check balance") {console.log(chalk.magenta.bgWhite.bold(`Your balance is: ${my_balance}`))}

        if (operations.operate === "fast cash")
        {
            let cash = await inquirer.prompt
            (
                [
                    {
                        name:"csh",
                        type:"list",
                        message:"Select Amount",
                        choices: [2000,5000,10000,15000]
                    }
                ]
            )
            if(cash.csh <= my_balance ){my_balance -= cash.csh; console.log(chalk.cyan.bgRed.bold.italic(`Your remaining balance is: ${my_balance}`))}
        
            else{console.log(chalk.red.italic.bold("You have insufficient balance!"))}
        }         
    }
        
    else{console.log(chalk.red.bold.italic("\nInvalid Pin"))}

    console.log("\n")
    
    let retry = await inquirer.prompt
    (
        [
            {
                name:"restart",
                type:"confirm",
                message:"Press Enter To Repeat The Process Or Press N To Quit: ",
                default:true
            }
        ]
    )
    console.log("\n")
    flag = retry.restart
}