// .join
// returns a NEW String
const textDisplay = document.querySelector('.text')

const emotions = ['Happy', 'Confident', 'motived']
const newWord = emotions.join(" - ")

// textDisplay.innerHTML = 'test-1'

textDisplay.innerHTML = newWord

//question what is difference between .join() and .concat()?
