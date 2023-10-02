import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

async function showtext() {
    let rainbow_text = chalkAnimation.rainbow(`Let start calculation!`)
await new Promise ((res) => {
    setTimeout(res, 5000)    
})
rainbow_text.stop();
}
await showtext();
async function user_input() {
    let input = await inquirer.prompt([
       {
        name: "operation",
        type: "list",
        message: "Which operation do you want to perform",
        choices: ["Addition", "Subtraction", "Multilication", "Division", "Modulus", "Exponent"]
       },
       {
name: "num1",
type: "number",
message: "Enter first number"
       },
       {
        name: "num2",
type: "number",
message: "Enter second number"
       }
    ])
    if(isNaN(input.num1) || isNaN(input.num2)){
        console.log(`Invalid! Please type number`)
        let attempts = 3;
        while(attempts >= 1){
            attempts--;
            console.log(`${attempts} attempts left`)
            if(attempts === 0){
                return attempts;
            } else return user_input();
        }
    } else {
    if(input.operation === "Addition") {
        console.log(`${input.num1} + ${input.num2} = ${input.num1 + input.num2}`)
    } else if (input.operation === "Subtraction") {
        console.log(`${input.num1} - ${input.num2} = ${input.num1 - input.num2}`)
    } else if (input.operation === "Multilication") {
        console.log(`${input.num1} * ${input.num2} = ${input.num1 * input.num2}`)
    } else if (input.operation === "Division") {
        console.log(`${input.num1} / ${input.num2} = ${input.num1 / input.num2}`)
    } else if (input.operation === "Modulus") {
        console.log(`${input.num1} % ${input.num2} = ${input.num1 % input.num2}`)
    } else if (input.operation === "Exponent") {
        console.log(`${input.num1} ** ${input.num2} = ${input.num1 ** input.num2}`)
    }
}
}

async function restart_button() {
    let again;
    do{
        await user_input();
  again = await inquirer.prompt([
    {
name: "Restart",
type: "input",
message: "Do you want to restart? (yes/no)",
    }

  ])
} while(again.Restart === "yes" || again.Restart === "Yes" || again.Restart === "YES")
} 
restart_button();