// with .filter()
// creates a new array
// with all the elements that passe the test implemented by the provided function in the code, we're gonna create a new array

// basic examples:
// const shows = ['Lupin', 'Cobra Kai', '24', 'Mr.Robot', 'four']

// const wordless5 = shows.filter(element => element.length > 5)

// console.log(wordless5)

//example with objects

const shows = [
    {
        name: 'Lupin',
        series: 1,
        episodes: 5
    },
    {
        name: 'Cobra Kai',
        series: 3,
        episodes: 30
    },
    {
        name: '24',
        series: 5,
        episodes: 50
    },
    {
        name: 'Mr Robot',
        series: 3,
        episodes: 24
    },
]

const seriesOverTwo = shows.filter(element => element.series > 2)

console.log(seriesOverTwo)

const values = document.querySelector('.container')

values.innerHTML = seriesOverTwo


// other example:

