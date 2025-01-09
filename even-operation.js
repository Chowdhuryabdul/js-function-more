function findTheEven(numbers){
    let evens = [];
    for(const number of numbers){
        // console.log(number)
        if(number % 2 === 0){
            // console.log(number) 
            evens.push(number)
        }

    }
    return sum
}

// const theArray = [12, 13, 14, 15, 16, 17, 18];
// const theValueOfParameter = findTheEven(theArray);
// console.log('give me all the even numbers:', theValueOfParameter)

function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        // console.log(number)
        if(number % 2 === 0){
            // console.log(number)
            sum = number + sum
        }
    }
    return sum
}


const theArray = [12, 13, 14, 15, 16, 17, 18];
const theValueOfParameter = sumOfEvenNumbers(theArray);
console.log('give me sum of the even numbers:', theValueOfParameter)