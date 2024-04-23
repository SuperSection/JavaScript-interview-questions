/**
 * reduce() method
 * 
 * It is used when we want to reduce the array into single value.
 * (e.g. sum, max, min, avg, difference... etc.)
 * 
 */


const numbers = [1, 2, 3, 4, 5, 10];

// AIM : sum of all the numbers in array

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(sum);

// accumulator, currentValue, return
//     1             2          3
//     3             3          6
//     6             4         10
//    10             5         15
//    15            10         25



const marks = [166, 46, 133, 956, 646, 36, 1.260, 565]

// To find max
const maxTerm = marks.reduce((acc, curr) => {
  return acc > curr ? acc : curr;
});

console.log(maxTerm);



const users = [
  { firstName: "John", lastName: "Doe", age: 35 },
  { firstName: "Jane", lastName: "Kane", age: 25 },
  { firstName: "Bob", lastName: "Smith", age: 40 },
  { firstName: "Alice", lastName: "Johnson", age: 25 },
  { firstName: "Mike", lastName: "Brown", age: 35 },
];


const ageWiseList = users.reduce((data, user) => {
  if (data[`Age ${user.age}`]) {
    data[`Age ${user.age}`].count++;
    data[`Age ${user.age}`].members.push(user.firstName);
  } else {
    data[`Age ${user.age}`] = {
      count: 1,
      members: [user.firstName],
    };
  }

  return data;
}, {});

console.log(ageWiseList);
