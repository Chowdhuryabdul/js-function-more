function muliplication(num1, num2, num3, num4){
    const mulitiply = num1 * num2 * num3 * num4
    return mulitiply
}
console.log(muliplication(2, 3, 4, 5))

function theNumber (number){
    if(number % 2 === 0){
        number = number * 2
    }else{
       number = number * 3
    }
    return number
}

const number1 = theNumber(1);
console.log(number1)
// const number2 = theNumber(3);
// console.log(number2)

function make_avg(numbers){
    let sum = 0;
    for(const number of numbers){
        sum = number + sum
        // console.log(sum)
        average = sum / 4;
    }
    return average
}

const theArray = [12, 13, 14, 15];
const valueOfTheParameter = make_avg (theArray);
console.log(valueOfTheParameter)

function count_zero(number){
    if(number.includes(number) === '0' ){
       console.log(number)
    
   }
}
const theNumber = count_zero('1010101')
console.log(theNumber)

function odd_even(number){
    // console.log(number)
    if(number % 2 === 0){
        console.log('even')
    }else{
        console.log('odd')
    }
    return number
    
}
// const theNumber = odd_even(9);
console.log( odd_even(9))