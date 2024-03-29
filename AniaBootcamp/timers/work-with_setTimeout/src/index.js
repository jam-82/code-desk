//setTimeout()

// setTimeout(function, milliseconds)

//we want display some text in our speech bubble after 3 seconds
//3 seconds is 3000 milliseconds

// const speechBubble = document.querySelector('.form-bubble')

// const time = 3000

// function showText() {
//     // console.log("all good!")
//     speechBubble.innerHTML = "Hey dude!"
   
// }

// setTimeout(showText, time)


// function deleteText() {
//     speechBubble.innerHTML = ""
// }
//---
// setTimeout(deleteText, 10000)

// setTimeout(function(){speechBubble.innerHTML=""}, 10000)


//===exercise===
// use the setTimeout() to get rid of the all bubble after 5 seconds

const container = document.querySelector(".container")

function hideBubble() {
    //or// container.classList.add("hidden")
    container.style.display = "none"
}

setTimeout(hideBubble, 5000)


