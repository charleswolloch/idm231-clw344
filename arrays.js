// Arrays
const myArray = [];

console.log('myArray length is: ' + myArray.length);

myArray[0] = 'hello';
myArray[1] = 'world';

console.log('myArray length is: ' + myArray.length);
console.log('myArray[0] is ' + myArray[0]);
console.log('myArray[1] is ' + myArray[1]);
console.log(myArray[0] + ' ' + myArray[1]);

const flagColors = ['red', 'white', 'blue'];
console.log(flagColors[2]);

console.log(flagColors);

// remove 'white' from flagColors array
flagColors.splice(1, 1);
console.log(flagColors);
