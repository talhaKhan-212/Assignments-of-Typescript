"use strict";
let numbers2 = [1, 3, -4, 7, 8, -9, 11, 12, -14, 13, 16, 15, 17, -18, 20];
let sum = 0;
numbers2.forEach(number => {
    sum += number;
});
console.log("Sum of the array elements:", sum);
