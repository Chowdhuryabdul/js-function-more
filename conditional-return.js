/*     retuen in conditional format */

function isEven (number){
    if(number % 2 === 0){
        return true;
    }else{
        return false
    }
}

// const theNumber = isEven(5) - this is one way
// console.log(theNumber)
console.log(isEven(10)) /* - this is another way */


function isOdd(number1){
    if(number1 % 2 === 1){
        return true;
    } /* here i can directly write retuen instead of else option */
    return false;
}

// const theNumber = isOdd(10);
console.log(isOdd(3));