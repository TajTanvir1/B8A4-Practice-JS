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
//function input will get only === number
    if (typeof number !== 'number') {
        //if input is not a number then give a (Meaningful massage)
        return "Please enter a number"
    }
    //result will return as cube (power)
    const result = Math.pow(number, 3);

    return result;
}

console.log(cubeNumber(3));