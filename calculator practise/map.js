let value = [12, 22, 34, 45];
let a = value.map((value, index, array) => {
    console.log(value, index, array);
    return value + index;
});
console.log(a);
export {};
