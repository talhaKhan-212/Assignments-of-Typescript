function order_sandwich(...items:string[]){
    if(items.length === 0){
        console.log('Please specify some items for your sandwich.');
    }else{
        console.log('Sandwich ordered with the following items:');
        for(let item of items){
            console.log('- '+ item);
        }
    }
}

order_sandwich('Braed','Turkey','lettuce','Tomato');
order_sandwich('Bread','Ham','Cheese');
order_sandwich();