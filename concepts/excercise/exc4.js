/* Promise Chain */

// create a promise
let promise = new Promise(function (resolve, reject) {
  resolve(10);
});

promise.then(function (value) {
  value++;
  return value;
});
promise.then(function (value) {
  value = value + 10;
  return value;
});
promise.then(function (value) {
  value = value + 20;
  console.log(value);
  return value;
});
