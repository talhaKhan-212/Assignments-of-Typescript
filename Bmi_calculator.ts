/*Set values for height in inches and weight in pounds, then convert the values to
centimeters and kilos, outputting the results to the console:

• 1 inch is equal to 2.54 cm
• 2.2046 pounds is equal to 1 kilo

Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos)
divided by squared height (in meters). Output the results to the console.*/


let inches = 10;
let pound = 15;
let weight = pound / 2.20;
let height = inches  * 2.54;
console.log(weight,height);
let bmi = weight / (height/100 *height/100);
console.log(bmi);
