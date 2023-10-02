function city_country (city : string, country : string): string {
    return '${city}, ${country}';
}
let result1: string = city_country ('Lahore','Pakistan');
let result2: string = city_country ('Dehli','India');
let result3: string = city_country ('Dubai','UAE');

console.log(result1);
console.log(result2);
console.log(result3);

