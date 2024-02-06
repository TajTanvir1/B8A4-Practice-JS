/**
 * write a function matchFinder name
 * if string1 is match by words with string2 then return true
 * if not match properly then return false
 * 
 * ---------------Bonus----------
 * check the input is a string
 * if they are not match then return a meaningful massage
 */

function matchFinder(string1, string2){
   if(typeof string1 !== 'string' || typeof string2 !== 'string'){
      return "Please input a string"
   }
   const result = string1.includes(string2)
   return result
}

console.log(16 , matchFinder("John Doe","ohn"));
console.log(17 , matchFinder("Javascript","code"));
console.log(18 , matchFinder("Peter Parker",1));