console.log("script start");

setTimeout(() => {
  console.log("hello from setTimeout");
}, 0);


const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

const friedRicePromise = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    resolve("Fried rice");
  } else {
    reject("could not do it");
  }
});


// consume the promise
friedRicePromise
  .then((myFriedRice) => {
    console.log("lets eat", myFriedRice);
  })
  .catch((error) => {
    console.log("Promise rejected:", error);
  });

for (let i = 1; i <= 100; i++) {
  console.log(Math.ceil(Math.random() * 100));
}


console.log("script end");