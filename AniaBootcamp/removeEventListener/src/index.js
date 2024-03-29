// ====with .removeEventListener()====
// syntaxe:
// removeEventListener method removes an event handler that's been attach with the addEventListener method

// const circle = document.querySelector('.circle')

// let count = 0;
// function toggleColor() {
//     circle.classList.toggle('green-circle')
//     count++
//     console.log(count)
//     if (count >= 10) {
//         circle.removeEventListener('click', toggleColor)
//     }
// }

// circle.addEventListener("click", toggleColor)
//if i click on the circle, i am adding and substracting the green-circle class from the div which already has the class of circle as a default

// ==========================

// test practice:
// if the circle get 100px below itself, i want to remove the eventListener, so i can't click anymore and nothing else happens
// ====first solution:======
// const circle = document.querySelector('.circle')

// let count = 0;
// function godown() {
//     circle.classList.add("position")
//     count += 50;
//     circle.style.top = count + "px";
//     console.log(count)
    
//     if (count >= 300) {
//         circle.removeEventListener("click",godown)
//     }
// }

// circle.addEventListener("click", godown)

//====another solution:====

// const circle = document.querySelector('.circle')
// let height = 0;

// function moveCircle() {
    //     height += 100;
    //     circle.style.top = height + 'px'
    //     console.log(height)
    //     if(height >= 300) {
        //         circle.removeEventListener("click", moveCircle)
        //     }
        
        // }
        
        // circle.addEventListener("click", moveCircle)
        
        
//====another solution:====

const circle = document.querySelector('.circle')
let height = 0

function movedown() {
    height += 100
  circle.style.marginTop = height + 'px'
    console.log(height)
  if(height > 500) {
    circle.removeEventListener('click', movedown)
  }
}

circle.addEventListener('click', movedown)


