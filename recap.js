/* object */

const mobile ={
    brand : 'apple',
    price : 15000,
    color : 'black',
    ram : '30gb',
    country : 'USA', 
    isGood : true,
    'fav-colleection' : ['black', 'blue', 'red', 'green']
}

// mobile.brand = 'samsung';
// const land = mobile.country;
// const land = mobile['ram'];
// const quality = mobile['fav-colleection']
mobile['fav-colleection'] = ['yellow', 'sky', 'roise', 'hooney']
// const gettheValue = Object.values(mobile)
// mobile['users'] = 5;



/* for(let propertyNmae in mobile){
    const value = mobile[propertyNmae]
    console.log(value, ' : ', propertyNmae)
} */


/* for(let objectKeys in mobile){
    const value = mobile[objectKeys];
    console.log(objectKeys,':',  value)
} */

var numbers = [12, 13, 14, 15, 40, 25, 30, 28, 21, 98, 500];
for(number of numbers){
    if(number < 100){
        continue;
    }
    console.log(number)
}
