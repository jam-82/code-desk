// Math.random



// console.log(Math.random() * 20) 0 to < 20

// const Tetrominoes = ['LTetromino', 'ZTetromino', 'iTetromino']
// console.log(Tetrominoes[1])

// console.log(Math.random() * Tetrominoes.length) // 0 to < 3


// console.log(Tetrominoes[Math.floor(Math.random() * Tetrominoes.length)])

// Math.floor() - rounds numbers down to the nearest full integer

// const randomNumber = Math.random() * Tetrominoes.length

// console.log(randomNumber)

// const randomInteger = Math.floor(randomNumber);

// console.log(randomInteger)

// console.log(Tetrominoes[randomInteger])


// ============================

// ======exercice-test======

const drinksMenu = ['Vodka Tonic', 'White wine', 'Beer', 'Mocktail']

const randNumb = Math.random() * drinksMenu.length
console.log(randNumb)

const randIntNum = Math.ceil(randNumb)
console.log(randIntNum)

console.log(drinksMenu[randIntNum])
