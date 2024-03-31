#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let counter = true;
while (counter) {
    let addTask = await inquirer.prompt([
        {
            name: "Q1",
            type: "input",
            message: "What you want to add in your todos?",
        },
        {
            name: "Q2",
            type: "confirm",
            message: "Do you want to add more?",
            default: false
        }
    ]);
    todos.push(addTask.Q1);
    counter = addTask.Q2;
    console.log(todos);
}
