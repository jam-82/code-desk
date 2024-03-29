// smile-sad_face exercise

// Use everything we have learn, switch casees, keys...
// we want to make the little guy face smile if we press arrow up and be sad if we press arrow down
//Ania solution:
//switch
// const circle = document.querySelector('.circle')
const mouth = document.querySelector('#mouth')


function control(e) {
    switch (e.key) {
        case 'ArrowUp':
            console.log('pressed up')
            mouth.classList.remove('sad-mouth')
            mouth.classList.add('happy-mouth')
            break;
        case 'ArrowDown':
            console.log('pressed down')
            mouth.classList.remove('happy-mouth')
            mouth.classList.add('sad-mouth')
            break;
        default: console.log("key not recognized")
    }
}

document.addEventListener('keydown', control)
