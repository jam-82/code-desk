
//.slice()
//don't change the mutate array
// it produces new ones
// syntaxe
// Array.slice(start, end)

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

const artists = ['Shakira', 'Snoop', 'Sia','Beyonce', 'Jackson']


maleArtists = artists.slice(1,2)
console.log(maleArtists);

const notArtists = artists.slice(3)
console.log(notArtists)

const firstThree = artists.slice(0, 3)
console.log(firstThree)

display.innerHTML = firstThree

 