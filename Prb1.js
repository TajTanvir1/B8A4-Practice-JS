/**
 * write cubeNumber() named function  
 * function input will get only === number
 * result will return as cube (power)
 * -----------------------------
 * ------- Bonus
 * if input is not a number then give a (Meaningful massage)
 * 
 */

//write cubeNumber() named function
function cubeNumber(number){

    if (typeof number !== 'number') {
        return "Please enter a number"
    }
    const result = Math.pow(number, 3);

    return result;
}

console.log(cubeNumber([]));