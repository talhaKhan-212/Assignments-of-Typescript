function show_magicians2 (magicians: string[]) {
    for(let magician of magicians){
        console.log(magician);
    }
}
function make_great2 (magicians: string[]): string[] {
    const graetMagicians: string[]=[];
    for(let magician of magicians){
        graetMagicians.push(`the Great ${magician}`);
    }
    return graetMagicians;
}
let magicians: string[] = ['John David','Smith Browm','Darren Sammy','Chriss Gayle'];
let greatMagicians = make_great2(magicians);
show_magicians2(greatMagicians)