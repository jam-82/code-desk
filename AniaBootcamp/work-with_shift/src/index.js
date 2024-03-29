
//.shift()
// changes the length of an array

// with objects

// const movies = [
//     {
//         name: 'Argo',
//         length: '136'
//     },
//     {
//         name: 'Aliens',
//         length: '201'
//     },
//     {
//         name: 'Fear',
//         length: '124'
//     }
// ]

// with an array

const display = document.querySelector(".display")

const movies = ['Clue', 'Wolf','Jumanji']

const count = [1,2,3,4,5]


movies.shift() 

count.shift()

console.log(movies)

display.innerHTML =  count
