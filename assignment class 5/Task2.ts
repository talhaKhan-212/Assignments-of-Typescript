import inquirer from "inquirer";

    let mcqs = await inquirer.prompt ([
        {
        name: 'QNo1',
        type: 'list',
        message: 'How many proninces of Pakistan?',
        choices: ['3','5','4','7'],
    },{
        name: 'QNO2',
        type: 'list',
        message: 'What is the price of Mac Book?',
        choices: ['4lac','5lac','6lac','7lac'],
    },{
        name: 'QNO3',
        type: 'list',
        message: 'What is the currency of USA?',
        choices: ['Rupee','Riyal','Pound','Dollar'],
    },{
        name: 'QNO4',
        type: 'list',
        message: 'Pakistan celebrate year of independence on 14th August 2023?',
        choices: ['74 years','76 years','75 years','77 years'],
    }
    ])
    console.log(mcqs)
