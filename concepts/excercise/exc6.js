/* instanceof and typeof */

console.log(typeof "supersection"); // string
console.log("supersection" instanceof String); // false
console.log(new String("supersection") instanceof String); // true

/* typeof Operator checks the primitive type of a value,
whereas instaceof checks if the value is an instance of a class or class function */
