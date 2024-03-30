#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let t = true
while(t)
{
    console.log(chalk.bold.italic.underline.yellow.bgMagenta("\nEnter a number from 1 - 5 , let's see if you can catch up with AI :)"))
    let ai = Math.floor(Math.random() * 5) + 1;
    
    let user = await inquirer.prompt
    (
        [
            {
                name:"guess",
                type:"number",
                message:"Enter a number: ",
            }
        ]
    )
    
    if (user.guess === ai) {console.log(chalk.bold.italic.greenBright(`You Win!`) ) }

    else {console.log (chalk.bold.italic.redBright (`Better luck next time!`) )}

    console.log (chalk.bold.italic.yellowBright (`AI guessed: ${ai}`) )

    console.log (chalk.bold.italic.cyanBright (`You guessed: ${user.guess}\n`) )
    
    let retry = await inquirer.prompt
    (
        [
            {
                name:"restart",
                type:"confirm",
                message:"Press Enter to continue or N to quit: ",
                default:true,
            
            }
        ]
    );
    console.log("\n")
    t = retry.restart
}




// if (retry.quit == "N" || retry.quit == "N".toLowerCase() ) { console.log("Quitting...");} 

// else if (retry.quit == "Y" || retry.quit == "Y".toLowerCase() ) { console.log("Restarting...");  }

// else { console.log("Game Over!"); }