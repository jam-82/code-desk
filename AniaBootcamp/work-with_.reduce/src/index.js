// with .reduce()
// The reduce JavaScript method execute a reducer function on each element of the array resulting on a single output value

// scores.reduce((totalScore, score) => totalScore + score)

// basic examples:

// const scores = [3, 5, 6, 7]

// const total = scores.reduce((totalScore, score) => totalScore + score);

// console.log(total)



// const values = document.querySelector('.container')

// values.innerHTML = total


// test exercise:
//add all the number together
const scores = [34, 56, 24, 31]

const total = scores.reduce((totalValue, currentValue) => totalValue + currentValue)

console.log(total)

const display = document.querySelector(".container")

display.innerHTML = total













