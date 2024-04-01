#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

let todos = [];

while(true)
{
    let todo_choices = await inquirer.prompt
    (
        [
            {
                name:"choices",
                type:"list",
                message:"Select an option:",
                choices:["Add Items","Delete Items","View TodoList","Exit from list"]
            }
        ]
    )

    if(todo_choices.choices === "Exit from list")
    {
        console.log(chalk.bold.italic.underline.redBright("\nExiting...\n"))
        break};
    
    if(todo_choices.choices === "Add Items")
    {
        let todo_question = await inquirer.prompt
        (
            [
                {
                        name:"Q1",
                        type:"input",
                        message:"Add items in todo list:",
                }
            ]
        )
            
            todos.push(todo_question.Q1)

            console.log(chalk.greenBright.bold.underline.italic("\n","Item Added:",todos,"\n"))
    };
        
    if(todo_choices.choices === "Delete Items")
    {
        let todo_delete = await inquirer.prompt
        (
            [
                {
                    name:"del",
                    type:"input",
                    message:"Enter Item to delete:"
                }
            ]
        )

        todos.splice(todos.indexOf(todo_delete.del),1)

        console.log(chalk.bold.italic.underline.yellowBright(`\nItem Deleted: ${todo_delete.del}\n`))
    };

    if(todo_choices.choices === "View TodoList")
    {
        console.log(chalk.bold.italic.magentaBright.bgCyanBright("\nCurrent list status:",todos,"\n"))
    };
};