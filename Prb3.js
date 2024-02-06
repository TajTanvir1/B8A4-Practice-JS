/**
 * make a function name as sortMaker(), this will take an array as input
 * access the element of the input array
 * if the elements are positive then return array by large to small
 * if they are equal then return as string 'equal'
 * if they are negative then return 'invalid input'
 */

function sortMaker(arr) {
   const [ a, b ] = arr;
   if (a < 0 || b < 0) {
      return "Invalid input"
   }

   if (a == b) {
      return "equal"
   }

   if (a > b) {
      return [a, b]
   }
   else {
      return [b, a]
   }
}

console.log(sortMaker([-5, 3]));