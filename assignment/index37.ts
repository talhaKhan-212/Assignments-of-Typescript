function make_shirt(size:string = 'large', message:string= 'I love Typescript') {
    console.log(`Creating a ${size}-sized shirt with the message: "${message}"`);
}
make_shirt();
make_shirt('medium');
make_shirt('small','Hello, World!');