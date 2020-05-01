

// function() {
//     function anotherFunction() {
//         function thirdFunction() {

//         }
//     }
// };

// myFunction
//     .then()
//     .then()
//     .then()

new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve("Everything went well");
        }, 4000);
    } catch {
            reject("Something went wrong");
    }
}).then(message => console.log(message))
.catch(message => console.log(message));

//Create a function called myPromise that returns a promise which fulfills after 5 seconds
function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I kept my promise");
        }, 5000);
    });
}