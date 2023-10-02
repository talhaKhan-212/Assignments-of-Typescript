// // // // Practice exercise 3.1
// 1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and
// "Apples."
// 2. Check your list length in the console.
// 3. Update "Bread" to "Bananas."
// 4. Output your entire list to the console.

let arr1 : string []= ["milk","bread","apples"];
console.log(arr1.length);
for (let i=0;i<arr1.length;i++){
    if(arr1[i]==='bread' )
    arr1[i]='banana';
}
console.log('update list:', arr1);