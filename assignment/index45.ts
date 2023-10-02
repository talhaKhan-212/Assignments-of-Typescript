function create_car(manufacture: string, model:string, ...option: any[]): Record<string, any {
    const car : Record<string,any> = {
        manufacture: manufacture,
        model: model,
    };
    for( let i=0; i < create_car.length; i++ ){
        const [key,value]= option;
        car[key]=value;
    }
    return car;
}
const carInfo = create_car('Toyota','Carmy',['color','blue'],['year',2022]);
console.log(carInfo);