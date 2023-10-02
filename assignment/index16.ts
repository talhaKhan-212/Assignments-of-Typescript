let guest : string[]= ['Alice', 'Bob', 'Charlie', 'David'];
console.log("Original Guest List:");
for (let guest of guests){
    console.log(`-${guest}`);
}
let guestCantMakeIt:string= 'Charlie';
console.log(`\nUnfortunately, ${guestCantMakeIt} can't make it to the dinner.\n`);
let newGuest : string= 'Eve';
guest[guest.indexOf(guestCantMakeIt)] =newGuest;
console.log("Update Guest List:");
for (let  guest of guests){
    console.log(`-${guest}`);
}
console.log("\nGood news! We founda bigger dinner table.\n");
guest.unshift('Grace');
guest.splice(Math.floor(guests.length / 2), 0, 'Frank');
guest.push('Hannah');
console.log('New set of individual messages:');
for (let guest of guests){
    console.log(`Dear ${guest}, You are invitedto my dinner partyon Saturday. Please join us!\n`);
}