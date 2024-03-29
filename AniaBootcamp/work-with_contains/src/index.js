// .contains()

// if i wanna find out if a node exist on a specific node, i would use contains
// if i wanna find if the body has a child that has an element with the class of .circle , i can find that out

const body = document.querySelector("body")
const circle = document.querySelector(".circle")
// const square = document.querySelector(".square")


console.log(body.contains(circle))
// console.log(body.contains(square))