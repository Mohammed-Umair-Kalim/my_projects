#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let PKR = 278;
let $ = 1;
let Euro = 0.92;
let pound = 0.79;
console.log(chalk.rgb(255, 136, 0).bold.italic(`
                ---------------CURRENCY CONVERTER:---------------`));
while (true) {
    let currency_convertor = await inquirer.prompt([
        {
            name: "choices",
            type: "list",
            message: "Select An Option:",
            choices: ["USD to PKR", "PKR to USD", "USD to Euro", "Euro to USD", "USD to Pound", "Pound to USD", "Exit"],
        }
    ]);
    if (currency_convertor.choices === "Exit") {
        console.log("Exitting...");
        break;
    }
    if (currency_convertor.choices === "USD to PKR") {
        let pkr_usd = await inquirer.prompt([
            {
                name: "Q1",
                type: "number",
                message: "USD to PKR:"
            }
        ]);
        if (pkr_usd.Q1) {
            console.log(chalk.rgb(255, 255, 56)(pkr_usd.Q1 * $ * PKR));
        }
    }
    if (currency_convertor.choices === "PKR to USD") {
        let usd_pkr = await inquirer.prompt([
            {
                name: "Q2",
                type: "number",
                message: "PKR to USD:"
            }
        ]);
        if (usd_pkr.Q2) {
            console.log(chalk.cyanBright(usd_pkr.Q2 * $ / PKR));
        }
    }
    if (currency_convertor.choices === "USD to Euro") {
        let usd_euro = await inquirer.prompt([
            {
                name: "Q3",
                type: "number",
                message: "USD to Euro:"
            }
        ]);
        if (usd_euro.Q3) {
            console.log(chalk.magentaBright(usd_euro.Q3 * $ * Euro));
        }
    }
    if (currency_convertor.choices === "Euro to USD") {
        let euro_usd = await inquirer.prompt([
            {
                name: "Q4",
                type: "number",
                message: "Euro to USD:"
            }
        ]);
        if (euro_usd.Q4) {
            console.log(chalk.blueBright(euro_usd.Q4 * $ / Euro));
        }
    }
    if (currency_convertor.choices === "USD to Pound") {
        let usd_pound = await inquirer.prompt([
            {
                name: "Q5",
                type: "number",
                message: "USD to Pound:"
            }
        ]);
        if (usd_pound.Q5) {
            console.log(chalk.redBright(usd_pound.Q5 * $ * pound));
        }
    }
    if (currency_convertor.choices === "Pound to USD") {
        let pound_usd = await inquirer.prompt([
            {
                name: "Q6",
                type: "number",
                message: "Pound to USD:"
            }
        ]);
        if (pound_usd.Q6) {
            console.log(chalk.rgb(211, 56, 255)(pound_usd.Q6 * $ / pound));
        }
    }
}
