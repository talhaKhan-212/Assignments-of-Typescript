
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);

let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

arr8.pop();
console.log("Pop:",arr8)

arr8.shift();
console.log("shift:",arr8)

arr8.splice(2, 5);
console.log("splice:",arr8)

delete arr8[1];
console.log("delete:",arr8)

