// .some
// we check if any (even one) of the elements in our array meet a certain rule we got the boolean true, otherwise we get false
const hearts = Array.from(document.querySelectorAll('.form-heart'))
console.log(hearts)

const isHeartBroken = hearts.some(heart => heart.hasChildNodes())

console.log(isHeartBroken)

// basic examples

// const scores = [23, 26, 26, 29]

// console.log(scores.some(score => score > 50))

// other example:
// const countries =  ['Afghanistan', 'Poland', 'Danemark', 'Peru', 1]

// console.log(countries.some(country => country === 'Peru'))


