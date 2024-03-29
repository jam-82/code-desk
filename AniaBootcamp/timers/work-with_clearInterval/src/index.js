
//clearInterval()
// const bulle = document.querySelector(".form-bubble")
// const tex = "my name is paul"

// function func1() {
//     // console.log('Hello!')
//     const newElem = document.createElement("div")
//     newElem.innerHTML = tex
//     bulle.appendChild(newElem)
// }

// setInterval(func1, 4000)

// const timerId = setInterval(func1, 4000)
// console.log(timerId)
// clearInterval(timerId)


// =============
// more realistic example:
// we want to move my bubble down, i want this happen every one second, and onece it reach a certain part of the screen i want it stops.

const bulle = document.querySelector(".container")
let height = 100;

function moveBubble() {
    height += 50
    // console.log('it works!')
    bulle.style.top = height + "px"
    console.log(height)
    if (height > 300) {
        clearInterval(timeId)
    }
}

let timeId = setInterval(moveBubble, 1000)

