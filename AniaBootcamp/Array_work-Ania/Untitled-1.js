// var lastName = 'Decker'

// function printFullName() {
//     console.log('printFullName: ','hi ' + name + ' ' + lastName);
// }
// printFullName()

// function printName() {
//     var name = 'Ania'
//     console.log('hi Ania')
// }
// printName()

// function findX() {
//     var x = 1
//     {
//         var x = 2
//         console.log('"example 1: ' + x)
//     }
//     console.log('example 2: ' + x)
// }
// findX()


// const count = [1,2,3,4,5]
// console.log(count);
// count[0] = 9
// count

// let count = 2;

// function increment() {
//     count = count + 1
// }

// increment()
// count

// const name = 'Doug'

// function sendText() {
//     console.log('Hey ' + name + ' you left your bag')
// }

// sendText()
// const time = 18

// if (time < 12) {
//     console.log('good morning!')
// } else if (time === 12) {
//     console.log('oh it\'s noon!')
// } else if (time > 12 && time < 18) {
//     console.log('good afternoon!')
// } else {
//     console.log('good evening!')
// }

// console.log(20 % 4)

//increment and decrement
// let count = 4
// count++
// count
// count--
// count

//Unary Negation
// let x = 4
// console.log(-x) 

//Unary Plus
// let y = '4'
// console.log(+y)
//if i put a + it changes into a number

//Exponential Operator
// let z = 4
// console.log(z**2)

// assigment operator
// x = 6
// x += 5
// x

// x -= 1
// x

// x *= 6
// x

// x /= 5
// x

// x %= 5
// x

// x **= 3
// x


//Comparaison Operators
// let x = 20

// console.log(x == 20)
// console.log(x != 2)
// console.log(x != 20)
// console.log(x != "20")

// console.log(x === "20")
// console.log(x === 20)

// console.log(x !== 20)
// console.log(x !== "20")

// console.log(x > 5)
// console.log(x >= 20)
// console.log(x > 20)
// console.log(x < 20)
// console.log(x <= 20)

//Logical Operators
const fruit = ['apple', 'banana', 'grape']


// console.log(fruit.includes('coconut'))
// console.log(fruit.includes('apple'))
// if (fruit.includes('grape') && fruit.includes('apple')) {
//     console.log('both fruits exist!')
// }

// if (fruit.includes('coconut') || fruit.includes('apple')) {
//     console.log('at least one fruits exists')
// }

// if (fruit.includes('cherry')) {
//     console.log('cherry is missing')
// }

//Ternary Operators
// let isGameOver = false

// if (isGameOver == true) {
//     console.log('Sorry you lost!')
// } else {
//     console.log('Carry on playing!')
// }

// isGameOver ? console.log('Sorry you lost!') : console.log('Carry on playing!')

//challenge: Fizz Buzz
// Start with the number one, and count upwards.
// If any number is divisible by three, it is replaced by the world fizz and any number divisible by five by the word buzz.
// Numbers divisible by 15 become fizz buzz
// let num = 2

//     if (num % 15 === 0) {
//         num = "fizz fuzz"
//     } else if (num % 5 === 0) {
//         num = "fuzz"
//     } else if (num % 3 === 0) {
//         num = "fizz"
//         } else {
//             console.log(num)
//         }
//     console.log(num)
    //don't forget to console.log(num) because the value is stored in the num variable
    //start with the bigger's number first in the chain
    
    //for loops
    // let newAr = []
    // for(let i = 0; i < 10; i++) {
    //     newAr.push(i)
    //     console.log(newAr)
    // }
    
    // for(let i = 0; i < 10; i++) {
    //     if (i === 0) {
    //         console.log(i + 1 + ' beer on the wall')
    //     } else {
    //         console.log(i + 1 + ' beers on the wall')
    //     }
    // }

    //challenge: fizz buzz with for loop
    // for (let i = 0; i<100; i++) {
    //     if ((i + 1) % 15 === 0) {
    //         console.log('fizz buzz')
    //     } else if ((i + 1) % 5 === 0) {
    //         console.log('buzz')
    //     } else if ((i + 1) % 3 === 0) {
    //         console.log('fizz')
    //     } else {
    //         console.log(i + 1)
    //     }
    // }

    //arrays

    // let books = ['Moby Dick', 'Life of Pi', 'Sapiens', 'The Hungry Caterpilar', 'Sapiens']

    // let count = 0;

    // for (let i=0; i<books.length; i++) {
    //     console.log(books[i])
    //     if (books[i] === 'Sapiens') {
    //         count++
    //         console.log(count)
    //         console.log(true)
    //     } else {
    //         console.log(false)
    //     }
    // }
    // console.log(count)

//Objects

// const user = {
//     name: 'Ania',
//     lastName: 'Kubow',
//     pets: 'Dog'
// }

// console.log(user.name)
// console.log(user.lastName)
// console.log(user.pets)


//Objects in arrays

//we have an array of three objects
// const users = [
//     {
//         username: 'Mo244',
//         followers: 34,
//         is_followed: false
//     },
//     {
//         username: 'Angela_boo',
//         followers: 133,
//         is_followed: true
//     },
//     {
//         username: 'SexyRick21',
//         followers: 234421,
//         is_followed: true
//     },
// ]

// console.log(users[0].username)

// for (let i=0; i<users.length; i++) {
//     if (users[i].is_followed === false) {
//         console.log(users[i].username + " is_followed: " + users[i].is_followed)
//     }
// }

//functions

// function sendText() {
//     console.log('Hey do you want to hang out?')
// }
// sendText()

//(see the example with the DOM in AniaBootcamp)

//While loop

let i = 0

while (i < 10) {
    console.log(i + " beers on the wall")
    i++
}