// kEYS

// first pick out the element so we can communicate with it

const circle = document.querySelector(".circle")

// I write a function essentially to if i press to the left arrow key, i gonna move my circle to the left, (etc..same with the up arrow , rigth arrow and down arrow keys for make move the circle in respective directions)

function control(e) {
    if (e.keyCode === 37) {
        console.log('pressed left')
    } else if (e.key === 'ArrowRight') {
        console.log('pressed right')
    } else if (e.key === 'ArrowUp') {
        console.log('pressed up')
    } else if (e.key === 'ArrowDown') {
        console.log('pressed down')
    }
}

// we attach this function to an event to an eventListener
document.addEventListener("keydown", control)
