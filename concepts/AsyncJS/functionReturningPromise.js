// Function returning Promise

function friedRicePromise() {
    const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

    return new Promise((resolve, reject) => {
        if (
          bucket.includes("vegetables") &&
          bucket.includes("salt") &&
          bucket.includes("rice")
        ) {
          resolve("Fried rice");
        } else {
          reject("could not do it");
        }
    })
}


friedRicePromise()
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });