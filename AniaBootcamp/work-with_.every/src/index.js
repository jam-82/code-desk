// with .every()
// test whatever all element in the array pass the test inmplemented by the provided function , it returns a boolean value

// mean if everything in our array matches a rule, return true otherwise false

// const testResults = [45, 34, 36, 89, 45, 65, 67]

// const test = testResults.every(result => result > 30)

// console.log(test)


// const values = document.querySelector('.container')

// values.innerHTML = test


// test example:
// write code that will return true or false if every string in the array is equal to 3 in length

const animals = ['cat', 'rat', 'dog', 'pigeon']

const result = animals.every(animal => animal.length === 3)

console.log(result)
















