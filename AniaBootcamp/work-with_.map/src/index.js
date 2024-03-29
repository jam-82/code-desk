// with .map()
// we create a NEW Array
// for every element in the array, it will apply a funtion to it, and then create a new array from it
// This is inlike forEach in which we're just printing out the result each time(like a loop)
// syntaxe
// const newArray = values.map(value => value)


// basic examples

// const ages2018 = [21, 45, 56, 32, 45, 2]

// const ages2021 = ages2018.map(age => age + 3)

// console.log(ages2021)

// other example:

const housemates2018 = [
    {
        name: 'Ahmed',
        age: 24
    },
    {
        name: 'Ellen',
        age: 35
    },
    {
        name: 'woody',
        age: 30
    }
]


const housemates2021 = housemates2018.map(housemates => housemates.age + 3)

console.log(housemates2021)

housemates2018.map(housemate => housemate.age + 1)

console.log(housemates2018)