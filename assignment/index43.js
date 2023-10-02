"use strict";
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const graetMagicians = [];
    for (let magician of magicians) {
        graetMagicians.push(`the Great ${magician}`);
    }
    return graetMagicians;
}
const magicians3 = ["John David", "Smith Browm", "Darren Sammy", "Chriss Gayle"];
console.log("Original Magicians");
show_magicians(magicians3);
const greatMagicians3 = make_great(magicians3);
console.log("\nGreat Magicians:");
show_magicians(greatMagicians3);
