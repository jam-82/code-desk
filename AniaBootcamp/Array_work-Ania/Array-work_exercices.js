//Array work

//Ex1: using 'map' write a function that converts farenheit to celcius.
//const farheneit = [23,140,212,41];
//let celcius;
//function getCelcius() {
//    celcius = farheneit.map(number => (number-32)*5/9);
//}
//getCelcius()
//console.log(celcius)

//Ex2: Using 'some' write a function that checks an array for a 'falsey' value
//const array = [11, NaN, [],'Angels']
//function checkForFalsey() {
//return array.some(number => number == false);
//return array.some(elem => elem == !elem)
//}
//console.log(checkForFalsey())

//Ex3: Using 'reduce' write a function that will return the total number of characters in an array of strings
//const words = ['Rabbit','Football','Cracking'];
//let numOfChar;
//function getTotal() {
//    numOfChar = words.reduce((acc,word) => acc + word.length, 0)
//}
//getTotal()
//console.log(numOfChar)

//Ex4: Using 'every' write a function that checks whether every number in an array is a square number.
//const check = [9, 16, 81, 49];
//function checkSquares() {
//    return check.every(num => Math.sqrt(num) % 1 === 0);
//}
//console.log(checkSquares())

//Ex5: Using an array method, write a function that returns the string elements of an array that have a given length or larger.

// function getWords(arr, num) {
//     return arr.filter(item => item.length >= num);
// }
// console.log(getWords(['Florida', 'dog', 'phone', 'astronaut'], 5));
//--
// function getWords(arr, num) {
//     let words = [];
//     for (const word of arr) {
//         if (word.length >= num) {
//             console.info(word.length);
//             words.push(word);
//         }
//     }
//     return words;
// }

//Ex6: Using an array method, write a function that converts an array of cm values as strings, into an array of numbers.[23,5.6,1000]
//const value = ['23cm','5.6cm','1000cm'];
//function getValues() {
//    return value.map(item => parseFloat(item.split('cm')));
//}
//console.log(getValues())
////--
//const cmValues = ['23cm','5.6cm','1000cm'];
//function getValues() {
//  return cmValues.map(value => parseFloat(value))
//}
//console.log(getValues())
////--
//function getValues(arr) {
//    return arr.map(value => parseFloat(value))
//  }
//  console.log(getValues(["33cm",'7.4cm','44cm']));

//Ex7: Using split and filter write a function that counts the number of vowels in a sentence.
//eg: getVowelCount('In West Philadelphia, born and raised') => 12
//const words = 'In West Philadelphia, born and raised';
//const vowels = ["A","E","I","O","U","a","e","i","o","u"]
//function getVowelCount() {
//    return words.split("").filter(item => {
//        return vowels.includes(item)
//    }).length;
//}
//console.log(getVowelCount());

//Ex8: 
//Using 'split', 'map', and 'join' write a function that capitalizes the first letter of each word in a sentence.
// const sentence = "the queens gambit";
// function capitalize(sentence) {
//     return sentence.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(" ");
// }
// console.log(capitalize(sentence))
// //--
// function capitalize(sentence) {
//     return sentence.split(" ").map(elem => elem.charAt(0).toUpperCase() + elem.substr(1)).join(" ")
// }
