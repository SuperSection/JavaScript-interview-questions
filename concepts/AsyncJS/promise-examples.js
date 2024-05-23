
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task
  // DB calls, cryptography, network
    setTimeout(function () {
        console.log("Async task 1 is complete.");
        resolve();
    }, 1000);
});

promiseOne.then(function () {
    console.log("Promise 1 consumed.");
});

console.log("promiseOne:", promiseOne);
console.log("type of Promise:", typeof promiseOne);




new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async task 2");
        resolve();
    }, 1000);
    
}).then(function () {
    console.log("Async 2 resolved");
});




const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 3");
        resolve({ username: "SuperSection", email: "super@section.com" });
    }, 1000);
});

promiseThree.then((user) => {
    console.log(user);
});




const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({ username: "Pagol", password: "510" });
        } else {
            reject("ERROR: Something went wrong.");
        }
    }, 1000);
});

promiseFour
    .then(function (user) {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log("from promiseFour:", username);
    })
    .catch(function (error) {
        console.log("ERROR in promiseFour:", error);
    })
    .finally(() => console.log("The promise is either resolved or rejected."));




const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({ language: "javascript", password: "ES7" });
        } else {
            reject("ERROR: JS went wrong.");
        }
    }, 1000);
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log("Resolved promiseFive -", response);
    } catch (error) {
        console.log("Rejected promiseFive -", error);
    }
}

consumePromiseFive();
