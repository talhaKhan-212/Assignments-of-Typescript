let names: string[] = ['Adnan', 'Ahmed', 'Manzar', 'Usman'];
for (let i = 0; i < names.length; i++ ) {
    let message = "Hello, ${names[i]}! How are you today?";
    console.log(message);
}