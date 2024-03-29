
//.splice()

// syntaxe:
// let splicedArray = array.splice(start,deleteCount,replacement)
// with objects
// const movies = [
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

const movies = ['Elf', 'Annie', 'Hero6']

// movies.splice(2,1, 'Inception')
// movies.splice(2,0, 'Hook')

let spliceArray = movies.splice(1,0, "Hook")

display.innerHTML = spliceArray
console.log(movies)
