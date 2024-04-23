/**
 * filter() method 
 * 
 * It is used to filter out the elements of an array based on a condition.
 * 
 * it calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value.
 * Array elements which do not pass the callbackFn test are not included in the new array.
 * 
 */


const numbers = [1, 3, 6, 8, 13];


const isEven = function (number) {
  return number % 2 === 0;
};


const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);


const oddNumbers = numbers.filter(numbers => numbers % 2);
console.log(oddNumbers);


const greaterThan5 = numbers.filter(number => number > 5);
console.log(greaterThan5);



const users = [
  { firstName: "John", lastName: "Doe", age: 35 },
  { firstName: "Jane", lastName: "Kane", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 40 },
  { firstName: "Alice", lastName: "Johnson", age: 25 },
  { firstName: "Mike", lastName: "Brown", age: 35 },
];


const ageGreaterThan30 = users
  .filter((user) => user.age > 30)
  .map((user) => user.firstName);

console.log(ageGreaterThan30);
