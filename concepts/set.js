/* Sets (it is iterable) */
// store data
// sets also have its own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed)

const numbers = new Set([1, 4, 8]);
console.log(numbers);
const username = new Set("pagol");
console.log(username);

const items = ["item1", "item2", "item3"];

numbers.add(5);
numbers.add(1); // doesn't get added if already present in the Set
numbers.add(username);
numbers.add([1, 2]);
numbers.add("item1");
numbers.add(items);
numbers.add(items); // same array can't get added more than once
numbers.add(["item2", "item3"]);
numbers.add(["item2", "item3"]);
// arrays having different address can be added as many times as instructed

console.log(numbers);
