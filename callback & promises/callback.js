"use strict";
/*function task1(anyfunction : any) {
    console.log("do something");
    anyfunction("we are passing values to callback")
}
//task1(secondtask)
task1(function secondtask(text : string){
    console.log("this is a calback function..",text)
}) */
/* function carMaintenance(){
    console.log("I leave my car at 9 in workshop");
    setTimeout(()=>{
        console.log("car is fixed")
        return "Your car is ready" //
    }, 2000)
};
function pickDress(){
setTimeout(() =>{
    return"Your Dress is ready" //
}, 100)
};
let mechanicResponse = carMaintenance();
console.log("mechanicResponse...",mechanicResponse);
setTimeout(() => {
    console.log("Do grocery")
}, 0);
let laundarResponse = pickDress();
console.log("laundaryResponse...", laundarResponse)
setTimeout(() => {
    console.log("Attend event");
}, 2000) */
//callback implementation
function carMaintenance1(cb) {
    console.log("I leave my car at 9 in workshop");
    setTimeout(() => {
        console.log("Car is fixed...");
        cb("Your car is return");
    }, 2000);
}
;
function carMaintCallBack(text) {
    console.log("car Maint call back...", text);
    pickDress1(dressCallBack);
}
;
function pickDress1(callback) {
    setTimeout(() => {
        console.log("Your dress is ready");
        callback("pick your dress");
    }, 100);
}
;
function dressCallBack(text) {
    console.log("this is dress callback...", text);
    attendEvent;
}
;
function attendEvent(cb) {
    console.log("Now you can attend the event");
    cb("Now you can go home");
}
;
function eventCallBack(text) {
    console.log(text);
    BacktoHome();
}
;
function BacktoHome() {
    console.log("reached at home");
}
;
// function calling
carMaintenance1(carMaintCallBack);
setTimeout(() => {
    console.log("Do grocery");
}, 0);
carMaintenance1(function (text) {
    console.log("Car Maint Call back...", text);
    pickDress1(function (text) {
        console.log("this is dress callback..", text);
        attendEvent(function (text) {
            console.log(text);
            BacktoHome();
        });
    });
});
/*function carMaintenance(cb:(text:string)=>void){
    console.log("I leave my car at 9 in workshop");

setTimeout(() => {
    console.log("Car is fixed...");
    cb("Your car is ready");
}, 2000);
}
 function carMaintCallBack(text:string){
console.log("Car Maint Call back...",text);
     pickDress(dressCallBack);
}

function pickDress(callback:(text:string)=>void){
    setTimeout(() => {
        console.log("Your Dress is ready");
        callback("pick your dress")
    }, 100);
}

 function dressCallBack(text:string){
    console.log("this is dress callback..",text);
   attendEvent;
 }

function attendEvent(cb: (text:string)=>void){
    console.log("Now you can attend the event");
    cb("Now you can go home")
}
function eventCallBack(text:string){
    console.log(text);
  BacktoHome();
}

function BacktoHome(){
    console.log("reached home");
}
// ===========================
// functin calling
setTimeout(() => {
    console.log("Do grocery");
}, 0);

// ===============================

// CallBackHell

 carMaintenance(function (text:string){
    console.log("Car Maint Call back...",text);
    pickDress(function (text:string){
        console.log("this is dress callback..",text);
        attendEvent(function (text:string){
            console.log(text);
BacktoHome();
       });
});
})*/
function teamwork(cb) {
    console.log("period of work is about 2 months");
    setTimeout(() => {
        console.log("There are 40 members in our team");
        cb("work has done by team");
    }, 2000);
}
function teamworkCallBack(text) {
    console.log("All work is officially done by company...", text);
    visitor(buses);
}
function visitor(cb) {
    console.log("My team decide to vist Ratti Gali");
    cb("program is done");
}
function buses(text) {
    console.log("We reached back at home at 9 o'clock...", text);
}
teamwork(function (text) {
    console.log("All work is officially done by company...", text);
    visitor(function (text) {
        console.log("We reached back at home at 9 o'clock...", text);
    });
});
