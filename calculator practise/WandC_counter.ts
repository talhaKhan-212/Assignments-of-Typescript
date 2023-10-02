
import PromptSync from "prompt-sync";
const prompt = PromptSync();
let userString : string = prompt("Please Enter the desired String:");
//console.log(userString);\

function wordCounter (a:string){
    let words = a.split(/\s+/).filter(word => word !== " ");
   // console.log(words)
   return words.length
}

function characterCounter (a:string) {
    let character = a.replace(/\s+/g,"")
//console.log(character)
return character.length
}

console.log(`Number of Words in ${userString} are: ${wordCounter(userString)}`);
console.log(`Number of character in ${userString} are: ${characterCounter(userString)}`);
//characterCounter(userString)