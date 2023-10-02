


let personName : string = "Rashid Akram";
let lowercaseName : string = personName.toLowerCase();
let uppercaseName : string = personName.toUpperCase();

const name1 = 'Rashid Akram';
const titlecaseNameResult = titlecaseName(name1);

function titlecaseName(input:string) {
    return input.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}



console.log("LowerCase:", lowercaseName);
console.log("UpperCase:", uppercaseName);
console.log("TitleCase:",titlecaseNameResult);


