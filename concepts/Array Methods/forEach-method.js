/**
 * forEach() method is used to iterate over an array.
 * It executes a provided function once for each array element.
 */


const numbers = [4, 2, 5, 6, 12];


function multiplyBy2(number, index) {
  console.log(`index is ${index}, number is ${number * 2}`);
}

// for (let i = 0; i < numbers.length; i++) {
//   multiplyBy2(numbers[i], i);
// }
numbers.forEach(multiplyBy2);


numbers.forEach(function (number, index) {
  console.log(`index is ${index}, number is ${number * 10}`);
});


numbers.forEach(function (number) {
  console.log(number * 5);
});


// Example
const members = [
  { firstName: "Luffy", age: 17 },
  { firstName: "Zoro", age: 21 },
  { firstName: "Usopp", age: 19 },
  { firstName: "Nami", age: 18 },
];

members.forEach(function (member) {
  console.log(member.firstName);
});


// for (let member of members) {
//   console.log(member.age);
// }


members.forEach((member, index) => {
  console.log(member.firstName, index);
});
