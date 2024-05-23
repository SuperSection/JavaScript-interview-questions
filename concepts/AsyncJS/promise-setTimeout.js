function myPromise() {
    return new Promise((resolve, reject) => {
        const value = true;

        setTimeout(() => {
            if (value) {
                resolve("Promise with setTimeout");
            } else {
                reject("Promise rejected");
            }
        }, 2000);
    });
}

myPromise()
    .then((result) => console.log("resolved"))
    .catch((error) => console.log("rejected"));