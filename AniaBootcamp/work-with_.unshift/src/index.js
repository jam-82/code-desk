
//.unshift()
//add at the beginning of the array
// This will change the array

// with objects

const movies = [
    {
        name: 'Aliens',
        length: '201'
    },
    {
        name: 'Fear',
        length: '124'
    }
]

// with an array

const display = document.querySelector(".display")

const plays = ['Hamilton']

plays.unshift('Wicked','Cats')

movies.unshift(
{
    name: 'Argo',
    length: '136'
}
)

display.innerHTML = movies

console.log(movies)