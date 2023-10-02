"use strict";
/*function asyncTask1() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("Task 1 completed");
          }, 1000);
        });
      }
      
      function asyncTask2() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve("Task 2 completed");
          }, 500);
        });
      }
      
      asyncTask1()
        .then((result) => {
          console.log(result);
          return asyncTask2();
        })
        .then((result) => {
          console.log(result);
        });*/
//============================================
function teamwork1() {
    return new Promise((resolve) => {
        console.log("period of work is about 2 months");
        setTimeout(() => {
            console.log("There are 40 members in our team");
            resolve("work has done by team");
        }, 2000);
    });
}
function visitor1() {
    return new Promise((resolve) => {
        console.log("My team decide to visit Ratti Gali");
        resolve("program is done");
    });
}
teamwork1()
    .then((result) => {
    console.log(result);
});
visitor1()
    .then((result) => {
    console.log(result);
});
