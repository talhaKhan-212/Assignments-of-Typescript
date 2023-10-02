"use strict";
function create_car(manufacture, model, ...option) {
    const car = {
        manufacture: manufacture,
        model: model,
    };
    for (let i = 0; i < create_car.length; i++) {
        const [key, value] = option;
        car[key] = value;
    }
    return car;
}
const carInfo = create_car('Toyota', 'Carmy', ['color', 'blue'], ['year', 2022]);
console.log(carInfo);
