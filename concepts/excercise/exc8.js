/* Comparison of three numbers */
// example of type-coersion : Type coercion is the process of converting a value from one data type to another

console.log(1 < 2 < 3); // true
/*  - At first, comparison 1 < 2 evaluates to true
    - In the second part of the expression, true is treated as the number 1
    - Therefore, true < 3 is equivalent to 1 < 3, which evaluates to true 
*/

console.log(3 > 2 > 1); // false
/*  - At first, comparison 3 > 2 evaluates to true
    - True is treated as the number 1 in the next comparison
    - Hence, true > 1 is equivalent to 1 < 1, which evaluates to false 
*/
