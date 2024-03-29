// .createElement()

const square = document.createElement('div')

const body = document.querySelector('body')

console.log(square)

body.appendChild(square)
const image = document.createElement('img')
square.appendChild(image)
console.log(image)
// body.appendChild(image)

// .setAttribute()
image.setAttribute("src","src/images/pink-cat.jpg")
image.style.width = 100 + "px"
image.style.borderRadius = 50 + "px"

image.setAttribute('data-id', 6)


// .getAttribute
// will search for an attribute
const imagePath = image.getAttribute('src')

const imageId = image.getAttribute('data-id')

console.log(imageId)

console.log(imagePath)


console.log(body)