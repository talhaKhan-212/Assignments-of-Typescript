// let groceryItems = ['Bread','fruit','egg','cooking oil','egg','milk','veg','egg','fruits'];
// let eggCount = 0;

// for (let i=0; i < groceryItems.length; i++) {
//     if (groceryItems[i] === "eggs"){
//         eggCount++;
//         if (eggCount > 1){
//             groceryItems[i] = '';

//             console.log(`item no, ${i} which is ${groceryItems[i]}`)
//             console.log(`pick from rack`);
//             console.log(`putt in you cart`);
//             console.log(`==========================`);
           
//     } 
//   }   
// }


//console.log("Updated groceryItems:", groceryItems.filter(item => item !== ''));

let groceryItems = ['Bread','fruit','egg','cooking oil','egg','milk','veg','egg','fruits'];
let hasSeenEgg = false ;
for (let i=0; i < groceryItems.length; i++){
    if(groceryItems[i]=== 'egg' ){
        groceryItems.splice(i, 1);
        
    } else if (groceryItems[i]==='egg'){
        hasSeenEgg = true;
    }
}
console.log("Updated groceryItems:", groceryItems);