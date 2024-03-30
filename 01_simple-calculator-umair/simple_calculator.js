#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let flag = true;
while (flag) {
    console.log("\n");
    let simple_calculator = await inquirer.prompt([
        {
            name: "num1",
            type: "number",
            message: "Enter first number: "
        },
        {
            name: "operator",
            type: "list",
            message: "Enter operator: ",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
        {
            name: "num2",
            type: "number",
            message: "Enter second number: "
        }
    ]);
    //conditional statements:
    if (simple_calculator.operator === "Addition") {
        console.log(chalk.yellow.bgRed.bold.italic("Addition:", simple_calculator.num1 + simple_calculator.num2));
    }
    else if (simple_calculator.operator === "Subtraction") {
        console.log(chalk.magentaBright.bgWhite.bold.italic("Subtraction:", simple_calculator.num1 - simple_calculator.num2));
    }
    else if (simple_calculator.operator === "Multiplication") {
        console.log(chalk.cyan.bgMagenta.bold.italic("Multiplication:", simple_calculator.num1 * simple_calculator.num2));
    }
    else if (simple_calculator.operator === "Division") {
        console.log(chalk.green.bgBlue.bold.italic("Division:", simple_calculator.num1 / simple_calculator.num2));
    }
    else {
        console.log("Please select a valid operator!");
    }
    let restart = await inquirer.prompt([
        {
            name: "retry",
            type: "confirm",
            message: "Press Enter To Continue or Press N to Exit:",
            default: true
        }
    ]);
    flag = restart.retry;
}
