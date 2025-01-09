function sumOfTheNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number)
        sum = sum + number
    }
    return sum
}

const theArray = [12, 13, 14, 15, 16];
const theValueOfNumber = sumOfTheNumbers(theArray);
console.log('find the sum of numbers:', theValueOfNumber)