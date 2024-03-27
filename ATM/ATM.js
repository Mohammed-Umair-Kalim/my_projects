import inquirer from "inquirer";
import chalk from "chalk";
let my_balance = 10000;
let my_pin = 1234;
let pin = await inquirer.prompt([
    {
        name: "p",
        type: "number",
        message: "Enter your pin code: "
    }
]);
if (pin.p === my_pin) {
    console.log(chalk.greenBright.bold("\nCorrect Pin!\n"));
    let operations = await inquirer.prompt([
        {
            name: "operate",
            type: "list",
            message: "Select one option:",
            choices: ["withdraw", "check balance", "fast cash"]
        }
    ]);
    if (operations.operate === "withdraw") {
        let amount = await inquirer.prompt([
            {
                name: "amt",
                type: "number",
                message: "Enter Amount"
            }
        ]);
        if (amount.amt < my_balance) {
            my_balance -= amount.amt;
            console.log(chalk.yellowBright.italic.bold(chalk.yellow.bgGreen(`Your remaining balance is: ${my_balance}`)));
        }
        else {
            console.log(chalk.red.bold.italic("You have insufficient balance!"));
        }
    }
    if (operations.operate === "check balance") {
        console.log(chalk.magenta.bgWhite.bold(`Your balance is: ${my_balance}`));
    }
    if (operations.operate === "fast cash") {
        let amount = await inquirer.prompt([
            {
                name: "amt",
                type: "list",
                message: "Select Amount",
                choices: [2000, 5000, 10000, 15000]
            }
        ]);
        if (amount.amt <= my_balance) {
            my_balance -= amount.amt;
            console.log(chalk.cyan.bgRed.bold.italic(`Your remaining balance is: ${my_balance}`));
        }
        else {
            console.log(chalk.red.italic.bold("You have insufficient balance!"));
        }
    }
}
else {
    console.log(chalk.red.bold.italic("\nInvalid Pin"));
}
