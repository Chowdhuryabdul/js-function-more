/* for a given string tell me whether it has even number of character or not /* 
 ----->> given value is string */
function evenSizedStrin(str){
    const findLengthOfString = str.length
    console.log(str, findLengthOfString);
    if(findLengthOfString % 2 === 0){
        console.log('it is even')
        return true
    }else{
        console.log('it is false')
        return false
    }
}

// const parametersValue = evenSizedStrin('dhaka')
// const parametersValue1 = evenSizedStrin('chandpur')

/* given value is boolean parameter */

function doDoubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 5;
        return result;
    }else {
        const result = number * 10;
        return result;
    }
}

const theVlaue = doDoubleOrTriple(5, false)
// console.log(theVlaue)/
const theVlaue1 = doDoubleOrTriple (5, true) ()
// console.log(theVlaue1)

/* array paremeters */

function numberOfElements(numbers){
    const len = numbers.length;
    return len;
}

const theArray =numberOfElements ([12, 13, 14, 15, 16]);
console.log(theArray)