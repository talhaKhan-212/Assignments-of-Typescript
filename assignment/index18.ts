let placeToVisit : string[] = ["Paris", "Turkey", "Germany", "India","America", "New York"];


console.log("Original Order:");
console.log(placeToVisit);

console.log("\nAlphabetical Order:");
console.log([...placeToVisit].sort());

console.log("\nOriginal Order After Sorting:");
console.log(placeToVisit);

console.log("\nReverse Alphabetical Order:");
console.log([...placeToVisit].sort().reverse());

console.log("\nOriginal Order After Reverse Sorting:");
console.log(placeToVisit);

placeToVisit.reverse();
console.log("\nReversed Order:");
console.log(placeToVisit);

placeToVisit.reverse();
console.log("\nOriginal Order After Double Reversing:");
console.log(placeToVisit);

console.log("\nAlphabetical Order (using sort() method):");
console.log(placeToVisit.sort());

console.log("\nReverse Alphabetical Order (using sort() method):");
console.log(placeToVisit.sort().reverse());