// Random Burger Generator
// url = https://my-burger-api.herokuapp.com/burgers

const displayData = document.querySelector('.container')
const btn = document.querySelector('.btn')


// GET
function getData() {
   fetch('https://my-burger-api.herokuapp.com/burgers')
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        const random = Math.floor(Math.random()*data.length)
        const nameRandom = data[random].name
        console.log(nameRandom)
        displayData.innerHTML = nameRandom
    } )
     
}

btn.addEventListener('click', getData)

