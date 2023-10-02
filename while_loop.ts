let state = "normal";
let counter=0;

while (state != "hit") {
    console.log("running...");
    console.log("running...");
    counter ++;

    if (counter ==3){
        state ="hit"; 
    }
}