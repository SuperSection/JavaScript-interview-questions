/**
 * map() method
 * 
 * It is used when we want transformation of whole array.
 * 
 * map() method creates an array by calling a specific function on each element present in the parent array
 * return of the callBack gets stored in the new array, otherwise it will have undefined as its values
 * 
 */


const numbers = [3, 6, 7, 9, 11];


const square = function (number) {
  console.log(number * number);
  return number * number;
};


const squaredNumbers = numbers.map(square);
console.log(squaredNumbers);


const fiveMultiplied = numbers.map(function (number) {
  return number * 5;
});
console.log(fiveMultiplied);


const doubledNumbers = numbers.map((number, index) => {
  return `index: ${index}, ${number * number}`;
});
console.log(doubledNumbers);


const binaryForm = numbers.map((number) => number.toString(2));
console.log(binaryForm);


// Example
const members = [
  { firstName: "Luffy", age: 17 },
  { firstName: "Zoro", age: 21 },
  { firstName: "Usopp", age: 19 },
  { firstName: "Nami", age: 18 },
];

const membersName = members.map((member) => member.age);
console.log(membersName);
