"use strict";
function show_magicians2(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
function make_great2(magicians) {
    const graetMagicians = [];
    for (let magician of magicians) {
        graetMagicians.push(`the Great ${magician}`);
    }
    return graetMagicians;
}
let magicians = ['John David', 'Smith Browm', 'Darren Sammy', 'Chriss Gayle'];
let greatMagicians = make_great2(magicians);
show_magicians2(greatMagicians);
