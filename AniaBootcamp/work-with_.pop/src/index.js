// .pop()
// changes the length of the array, not create a new one
const display = document.querySelector('.display')


// const movies = ['Argo', 'Aliens', 'Fear']

// movies.pop()

// display.innerHTML = movies


// with objects

const movies = [
    {
        name: 'Argo',
        length: '136'
    },
    {
        name: 'Aliens',
        length: '201'
    },
    {
        name: 'Fear',
        length: '124'
    }
]

movies.pop()

console.log(movies)

display.innerHTML =  movies
