const farenheit = [23, 140, 212, 41, 41];

function getCelcius() {
    return farenheit.map(element => (element -32) * 5/9)
}

console.log(getCelcius())