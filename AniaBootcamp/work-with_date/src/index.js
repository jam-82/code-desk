//Date
const dateDisplay = document.querySelector('.date')


const today = new Date()
const date = today.getDate();//the Date , today is 11th
const day = today.getDay();//the day of the week
const fullYear = today.getFullYear();
const hours = today.getHours();
const minutes = today.getMinutes();
const isoString = today.toISOString();
const str = today.toString()
console.log(str)


const Christmas = new Date("2023-12-24T13:13:56.648Z")
console.log(Christmas - today)
const millsecondsToXmas = Christmas - today
const minutesToXmas = millsecondsToXmas / 60000
const hoursToXmas = millsecondsToXmas / (60000 * 60)
const daysToXmas = millsecondsToXmas / (60000 * 60) / 24
console.log(daysToXmas)

dateDisplay.textContent = Math.round(daysToXmas)