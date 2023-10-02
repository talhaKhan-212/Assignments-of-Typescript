"use strict";
let n1 = [1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20];
console.log("even numbers:");
for (let i = 0; i < n1.length; i++) {
    if (i % 2 === 0) {
        console.log("even:", i);
    }
}
