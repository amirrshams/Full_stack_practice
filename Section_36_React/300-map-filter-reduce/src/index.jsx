// var numbers = [3, 56, 2, 48, 5];

// //Map -Create a new array by doing something with each item in an array.

// const newNumbers = numbers.map((x) => {
//     return x * 2;
// });
// console.log(newNumbers);
// //Filter - Create a new array by keeping the items that return true.

// const newNumbers2 = numbers.filter(function(num) {
//     return num > 10;
// }
// );
// console.log(newNumbers2);
// //Reduce - Accumulate a value by doing something to each item in an array.

// const newNumbers3 = numbers.reduce((accumulator, currentNumber) => {
//     console.log("accumulator = " + accumulator);
//     console.log("currentNumber = " + currentNumber);
//     return accumulator + currentNumber;
// });
// console.log(newNumbers3);
// //Find - find the first item that matches from an array.
// const newNumbers4 = numbers.find((num) => {
//     return num > 10;
// });
// console.log(newNumbers4);
// //FindIndex - find the index of the first item that matches.

// const newNumbers5 = numbers.findIndex((num) => {
//     return num > 10;

// });
// console.log(newNumbers5);

import emojipedias from "./emojipedia";

const newEmojipedia = emojipedias.map((emojipedia) => {
    return emojipedia.meaning.substring(0,100);
})

console.log (newEmojipedia);