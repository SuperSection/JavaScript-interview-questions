/* Hoisting */

function example() {
  console.log(x); // undefined
  var x = 5;
  console.log(x); // 5
}

example();

function example1() {
  var x; // declarartion is hoisted
  console.log(x); // undefined
  x = 5; // assignemnt is not hoisted
  console.log(x); // 5
}

example1();
