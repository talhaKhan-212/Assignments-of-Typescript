import inquirer from "inquirer";
import {add,subtract,multiply,divide} from './operations'

async function main(){
    let operationChoices = ['Addition','Subtraction','Multiplication','Division'];
    let operation = await inquirer.prompt({
        type: 'list',
        name: 'operation',
        message: 'Select an operation:',
        choices: operationChoices,
    });

    let num1 = await inquirer.prompt({
        type: 'input',
        name: 'num1',
        message: 'Enter first number:'
    });
        
    
    let num2 = await inquirer.prompt({
        type: 'input',
        name: 'num2',
        message: 'Enter Second number:'
    });

    let result;
    switch (operation.operation){
        case 'Addition':
        result = add(num1,num2);
        break;
        case 'Subtraction':
        result = subtract (num1,num2);
        break;
        case 'Multiplication':
        result = multiply (num1,num2);
        break;
        case 'Division':
        result = divide (num1,num2);
        break;
    }
    console.log(`Result: ${result}`);

}

//==================================================================
/*let inquirer = require("inquirer");
import {add,subtract,multiply,divide} from './operations'



async function main() {
    const operationChoices = ['Addition', 'Subtraction', 'Multiplication', 'Division'];
    const operationAnswer = await inquirer.prompt({
        type: 'list',
        name: 'operation',
        message: 'Select an operation:',
        choices: operationChoices,
    });

    const num1Answer = await inquirer.prompt({
        type: 'input',
        name: 'num1',
        message: 'Enter first number:',
    });
    const num1 = parseFloat(num1Answer.num1);

    const num2Answer = await inquirer.prompt({
        type: 'input',
        name: 'num2',
        message: 'Enter second number:',
    });
    const num2 = parseFloat(num2Answer.num2);

    let result;
    switch (operationAnswer.operation) {
        case 'Addition':
            result = add(num1, num2);
            break;
        case 'Subtraction':
            result = subtract(num1, num2);
            break;
        case 'Multiplication':
            result = multiply(num1, num2);
            break;
        case 'Division':
            result = divide(num1, num2);
            break;
    }
    console.log(`Result: ${result}`);
}

main();
*/
