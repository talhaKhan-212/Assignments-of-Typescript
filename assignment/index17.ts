
let guests2: string[] = ['Alice', 'Bob', 'Charlie', 'David'];

console.log("Original Guest List:");
for (let guest of guests2) {
    console.log(`- ${guest}`);
}

console.log("\nSorry, the dinner table can only accommodate two guests.\n");

while (guests2.length > 2) {
    let removedGuest = guests2.pop();
    if (removedGuest) {
        console.log(`Sorry, ${removedGuest}, you can't be invited to dinner.`);
    }
}

console.log("\nInvitations:");
for (let guest of guests2) {
    console.log(`Dear ${guest}, you are still invited to my dinner party on Saturday.`);
}

guests2.pop();
guests2.pop();

console.log("\nEmpty Guest List:");
console.log(guests2);