/**
 * .then() method
 * it always returns a Promise
 */

function myPromise() {
  return new Promise((resolve, reject) => {
      resolve("Spider");
  });
}

myPromise()
  .then((data) => {
      console.log(data);
      return data += "man";
  })
  .then((data) => {
      console.log(data);
      return "Peter Parker"
  })
  .then((data) => {
      console.log(data);
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));