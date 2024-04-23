console.log("Start");

setTimeout(() => {
    console.log("It waits inside the Callback Queue for the Call Stack to be empty.");
}, 0);  // this will defer the code to late execution

console.log("End");
