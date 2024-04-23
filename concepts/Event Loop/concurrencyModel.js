/**
 * JavaScript, despite being a single-threaded language, 
 * achieves a non-blocking concurrency model through a mechanism called the Event Loop
 * 
 * The Event Loop is a continuous loop that monitors the following:
 *    i)  Call Stack: It checks if the call stack is empty.
 *   ii)  Task Queue: It checks for tasks waiting in the task queue (sometimes called a callback queue).
 * 
 * The Event Loop ensures that long-running asynchronous operations don't block the main thread.
 */


console.log("Start");

setTimeout(() => {
  console.log(
    "It waits inside the Callback Queue for the Call Stack to be empty."
  );
}, 3000); // this will defer the code to late execution

console.log("End");

let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("While expires.");
