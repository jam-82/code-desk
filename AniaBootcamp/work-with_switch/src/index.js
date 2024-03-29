// kEYS

// first pick out the element so we can communicate with it

// const circle = document.querySelector(".circle")

// // I write a function essentially to if i press to the left arrow key, i gonna move my circle to the left, (etc..same with the up arrow , rigth arrow and down arrow keys for make move the circle in respective directions)
// let xAxis = 0
// let yAxis = 0

// function control(e) {
  
//     switch (e.key) {
//         case 'ArrowLeft':
//             console.log('pressed left')
//             xAxis -= 50;
//             console.log(xAxis)
//             circle.style.left = xAxis + "px"
//             break;
//         case 'ArrowRight':
//             console.log('pressed right')
//             xAxis += 50;
//             console.log(xAxis)
//             circle.style.left = xAxis + "px"
//             break;
//         case 'ArrowUp':
//             console.log('pressed up')
//             yAxis -= 50;
//             console.log(xAxis)
//             circle.style.top = yAxis + "px"
//             break;
//         case 'ArrowDown':
//             console.log('pressed down')
//             yAxis += 50;
//             console.log(xAxis)
//             circle.style.top = yAxis + "px"
//             break;
//         default: console.log('key not recognized')
//     }
    
// }

// // we attach this function to an event to an eventListener
// document.addEventListener("keydown", control)



// ===========execise==============

// Use everything we have learn, switch casees, keys...
// we want to make the little guy face smile if we press arrow up and be sad if we press arrow down

const circle = document.querySelector('.circle')
const elem = document.createElement('div')
circle.appendChild(elem)

function active(e) {
    switch (e.key) {
        case "ArrowUp":
            console.log("arrow up pressed")
            elem.classList.remove("sad")
            elem.classList.add("smile")
            break;
            case "ArrowDown":
            console.log('arrow down pressed')
            elem.classList.remove("smile")
            elem.classList.add("sad")
            break;
            default: console.log('not the keys required')
        }
}
        // circle.classList.remove("smile")
        
document.addEventListener("keyup", active)