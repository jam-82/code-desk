//setInterval()

// setInterval(function, milliseconds)
//milliseconds until we invoke the function and then we keep invoking the function over over and over until we tell to stop or closed the window

// const bubble = document.querySelector('.form-bubble')
// const text = 'Alert! 🅰'

// const time = 2000

// function showAlert() {
//     const textDisplay = document.createElement('div')
//     textDisplay.innerHTML = text
//     bubble.appendChild(textDisplay)
//     // console.log('working')
// }

// setInterval(showAlert, time)

// ===========================

// exercise
// using setInterval we want to print out in the console.log your name

// function printConsole() {
//     console.log('hello i\'m james')
// }

// setInterval(printConsole, 3000)

// ==========================

// other more complicated practice

// first i create a variable with the target where i want to display
// 2nd i create a variable with the text i want to display
// 3rdi create a function that will be invoke
// 4th i implement the function
//   inside the function store a variable with a created element div , i put an element inside the div, i take my target bulle to append the element i create
// 5th create setInterval(func, time)
const bulle = document.querySelector(".form-bubble")
const tex = "my name is paul"

function func1() {
    // console.log('Hello!')
    const newElem = document.createElement("div")
    newElem.innerHTML = tex
    bulle.appendChild(newElem)
}

// setInterval(func1, 4000)


//clearInterval()

const timerId = setInterval(func1, 4000)
console.log(timerId)
clearInterval(timerId)



