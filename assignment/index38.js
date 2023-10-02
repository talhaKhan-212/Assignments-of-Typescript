"use strict";
function describe_city(city, country = 'Unknown') {
    console.log(`${city} is in ${country}.`);
}
describe_city('Karachi', 'Pakistan');
describe_city('Paris', 'France');
describe_city('New York');
