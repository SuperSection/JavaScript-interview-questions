/* Closure, loop & IIFE */

// Example 1
for (var i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log("Example 1", i);
  }, 1000);
}


// Example 2
for (let i = 1; i <= 5; i++) {
  setTimeout(function () {
    console.log("Example 2", i);
  }, 1000);
}


// Example 3
console.log();
for (var i = 1; i <= 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log("Example 3", i);
    }, 1000);
  })(i);
}
