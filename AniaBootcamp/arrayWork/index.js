//             =======Array work!========

// using 'map' write a function that converts farenheit to celcius.
// eg: getCelcius([23, 140, 212, 41]) => [-5, 60, 100, 5]
// (num - 32) * 5/9 = C

// let farenhArray = [23, 140, 212, 41]
// let celciusArray
// function getCelcius() {
//     celciusArray = farenhArray.map(elem => 5/9 * (elem-32))
//     return celciusArray
// }
// getCelcius()
// console.log(celciusArray)

// other way
// let farenhArray = [23, 140, 212, 41]
// function getCelcius() {
//     return farenhArray.map(value => (value-32) * 5/9)
// }
// console.log(getCelcius())

// ===============================

// Using 'some' write a function that checks an array for a 'falsey' value.
// eg: checkForFalsey([11, NaN, [], 'Angels']) => true
// the bang !item is checking for a false or falsey element

// const array1 = [11, NaN, [], 'Angels'] 

// function checkForFalsey() {
//     return array1.some(elm => !elm)
// }

// console.log(checkForFalsey())

// ==============================

//Using 'reduce' write a function that will return the total number or characters in array of strings.
// eg: getTotal(['Rabbit', 'Football', 'Cracking']) => 22

// const arraywords = ['Rabbit', 'Football', 'Cracking']

// function getTotal() {
//     return arraywords.reduce((total, word) => total + word.length, 0)
// }
// we add the initial value 0, because we want to start from zero

// console.log(getTotal())

// =============================

// Using 'every' write a function that checks whether every number in an array is a square number.
// eg: checkSquares([9, 16, 81]) => true

// const arrayNum = [9, 16, 81, 4, 16]

// function checkSquares() {
//     return arrayNum.every(elm => elm % Math.sqrt(elm) === 0)
// }

// console.log(checkSquares())

// other solution
// const arrayNum = [9, 16, 81, 4, 16, 5]

// function checkSquares() {
//     return arrayNum.every(elm => Math.sqrt(elm) % 1 === 0)
// }
// when we match Math.sqrt(elm) % 1 equal 0 , we prove the number is an integer after been squarerooted , this mean the number has a squartroot
// console.log(checkSquares())

// ============================

// Using an array method, write a function that returns the string elements of an array that have a given length or larger.
// eg: getWords(['Florida', 'dog', 'phone'], 5) => ['Florida', 'phone']

// const words = ['Florida', 'dog', 'phone']

// function getWords(arr, num) {
//     return arr.filter(word => word.length >= num)
// }
// the method filter gives us a filtered array, but not change the initial array
// console.log(getWords(words, 5))
// console.log(getWords(['pen', 'astronaut', 'puppy'], 6))

// =============================

// Using an array method, write a function that converts an array of cm values as strings, into an array of numbers.
// eg: getValues(['23cm', '5.6cm', '1000cm']) => [23, 5.6, 1000]

// const arraycm = ['23cm', '5.6cm', '1000cm']

// function getValues() {
//     return arraycm.map(elm => Number(elm.split("cm").join("")))
// }

// console.log(getValues())

// other solution
// with the parseFloat() function parses an argument(converting it to a string first if needed) and returns floating point number.
// work also with parInt()method but give all number in integer

// const arraycm = ['23cm', '5.6cm', '1000cm']

// function getValues(array) {
//     return array.map(elm => parseFloat(elm))
// }

// console.log(getValues(['34cm', '45cm', '1.2cm']))
// console.log(getValues(['3jlkj','4sljkl', '7sdljs']))

// =========================================

// Using 'split' and 'filter' write a function that counts the number of vowels in a sentence.
// eg: getVowelCount('In West Philadelphia, born and raised') => 12

// const str = 'In West Philadelphia, born and raised'
// const vowels = ['a','e','i','u','o', 'A','E',"I",'U','O']
// function getVowelCount() {
//     return str.split("").join().replace(/[^aeiou]/gi, "").length
// }
// console.log(getVowelCount())

//write the procedure:
// 1)split without a space to display only all the letters or spaces, 
// 2)filter the vowels, 
// 3)count the length of the array of vowels

// other solution:

// const str = 'In West Philadelphia, born and rised'
// const vowels = ['a','e','i','u','o', 'A','E',"I",'U','O']
// function getVowelCount(sentence) {
//     return sentence.split("").filter(elm => vowels.includes(elm)).length
// }
// console.log(getVowelCount("am I a human?"))
// console.log(getVowelCount(str))
// console.log(str.split(''))

// includes method can be an array and string method
// it can determines whether an array includes a certain value among its entries, returning true or false 
// str.includes("To be")
// 

// other practices:

// [1,2,3].includes(2)//true
// ["1","2","3"].includes(3)//false
// -------------------------------------
// const re = /apples/gi
// const str = "Apples are round, and apples are juicy."
// const newstr = str.replace(re,'mangos');

// console.log(newstr)


// ============================================


// Using 'split' , 'map' and 'join' write a function capitalizes the first letter of each word in a sentence.
// eg: capitalize('the queens gambit') => ['The Queens Gambit']

// const sentence = 'the queens gambit'

// function capitalize(str) {
//     return str.split(" ").map(elem => elem[0].toUpperCase() + elem.slice(1)).join(" ")
// }

// console.log(capitalize(sentence))
// console.log(capitalize("life of pan"))

// other solution:
// using word.charAt(0) for select the first letter(index 0)
// and using + word.substr(1) for select the rest of the letters(start at index 1)

const sentence = 'the queens gambit'

function capitalize(str) {
    return str.split(" ").map(elem => elem.charAt(0).toUpperCase() + elem.substring(1)).join(" ")
}

console.log(capitalize(sentence))
console.log(capitalize("life of pan"))