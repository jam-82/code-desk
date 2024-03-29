const button = {
    onClick: null
}

const dragon = {
    element: 'fire',
    breathe: function () {
        console.log(this)
        return `I am breathing ${this.element}`
    }
}
// const newclick = dragon.breathe.bind(button)
console.log(button.onClick)
console.log(display)

// console.log(dragon.breathe())

// button.onClick = dragon.breathe
// console.log(button.onClick())

// const newBreathe = breathe.bind(dragon)
// console.log(newBreathe())
const newval = button.onClick.bind(dragon.breathe)
console.log(newval)

//is like we create a new function with the dragon object and property 'element' in the context of the new function