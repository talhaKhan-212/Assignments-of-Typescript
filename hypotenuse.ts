function calculateHypotenuse (a:number,b:number) { 
    const c = Math.sqrt (a**2 + b**2);
return c
}
const a = 3;
const b = 4;
const c= calculateHypotenuse(a,b);
console.log("The hypotenuse of triangle is ",c );



/*function calculateHypotenuse (a:number,b:number) : number => {
    const c = Math.sqrt (a**2 + b**2);
return c
}*/