
let guests1: string[] = ['Alice', 'Bob', 'Charlie', 'David'];

console.log("Original Guest List:");
for (let  guest of guests1) {
    console.log(`- ${guests1}`);
}

let guestCantMakeIt1: string = 'Charlie';

console.log(`\nUnfortunately, ${guestCantMakeIt1} can't make it to the dinner.\n`);

let newGuest1: string = 'Eve';
let indexOfGuestCantMakeIt1: number = guests1.indexOf(guestCantMakeIt1);

if (indexOfGuestCantMakeIt1 !== -1) {
    guests1[indexOfGuestCantMakeIt1] = newGuest1;
}

console.log("Updated Guest List:");
for (let  guest of guests1) {
    console.log(`- ${guests1}`);
}

console.log("\nSecond Set of Invitation Messages:");
for (let guest of guests1) {
    console.log(`Dear ${guests1}, You are invited to my dinner party on Saturday. Please join us!\n`);
}