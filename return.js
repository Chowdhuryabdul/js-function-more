/* in return function, when i will call the function. it must need to keep in a variable so i can use it in other places. */
function temTimes (number){
    const multiplication = number * 5;
    return multiplication;
    
}

const mulitiplicaitonOutput = temTimes(5); /* here i have called the value of the function with a variable */
// console.log(mulitiplicaitonOutput)


function add (price1, price2){
    const total = price1 + price2;
    return total
}
const functionsvalue = add(12, 13);
// console.log(functionsvalue)


function add2 (price1, price2){
    return price1 + price2
}

const total = add2 (50, 40)
    // console.log(total)

