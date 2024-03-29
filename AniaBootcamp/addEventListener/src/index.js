// with .addEvenetListener()
// syntaxe:
// target.addEventListener(event, function)

// const hexagon = document.getElementById('hexagon')

// function alertMe() {
//     console.log('clicked')
// }

// hexagon.addEventListener("mouseover", alertMe)


// the target is the hexagon, i am using addEventListener, i am passing through an event to invoke a function when the hexagon is clicked.
// we are listening out to anytime someone interact to the hexagon and if the event is a click, we invoke the function


// other example:

// if the script is in the head
//i need to load my html before apply my JavaScript, with this document.addEventListener():

// document.addEventListener('DOMContentLoaded', () => {

    //code

// })


const body = document.querySelector("body")



body.addEventListener("click", function cli() {
    console.log("allez!!!")
})
