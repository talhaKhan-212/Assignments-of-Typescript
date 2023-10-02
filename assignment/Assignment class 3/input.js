"use strict";
function calculateGrade(marks) {
    if (marks >= 90) {
        return 'A';
    }
    else if (marks >= 80) {
        return 'B';
    }
    else if (marks >= 70) {
        return 'C';
    }
    else if (marks >= 60) {
        return 'D';
    }
    else if (marks >= 50) {
        return 'E';
    }
    else if (marks >= 40) {
        return 'F';
    }
}
function main() {
    question('Enter marks:', (input) => {
        const marks = parseFloat(input);
        if (isNaN(marks)) {
            console.log('Invalid input. Please enter a valid number.');
        }
        else {
            const grade = calculateGrade(marks);
            console.log(`Your grade is: ${grade}`);
        }
    });
}
main();
/*import readline from 'readline';
const rl = readline.createInterface({
    input: Process.stdout,
    output: Process.stdout,
});
*/ 
