let userNames : string[] = ['Tahir','Amir','Babu','Admin','Sohail'];
for (let userName of userNames) {
    if (userName === 'Admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${userName} thank you for logging in again.`)
    }
}