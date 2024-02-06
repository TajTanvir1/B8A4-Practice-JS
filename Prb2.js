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
   const result = string1.includes(string2)
   return result
}

console.log(matchFinder("John Doe","ohn"));
console.log(matchFinder("Javascript","code"));