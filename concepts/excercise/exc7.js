/* Tagged Template Literals */

function f(...args) {
  return args;
}

console.log(f`true is ${true}, false is ${false} and array is ${[1, 2, 3, 4]}`);
