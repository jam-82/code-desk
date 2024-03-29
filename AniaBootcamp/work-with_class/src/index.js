
//class

//class declaration

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }

// const newRectangle = new Rectangle(300, 100);

// console.log(newRectangle)
// console.log(newRectangle.width)

// =============================

// other example used in pacman

class Ghost {
    constructor(className, speed, color, startingPoint) {
        this.className = className;
        this.speed = speed;
        this.color = color;
        this.startingPoint = startingPoint;
    }
}

const blinky = new Ghost('blinky', 300, 'red', 4)
const inky = new Ghost('inky', 250, 'blue', 10)
const pinky = new Ghost('pinky', 350, 'pink', 20)
const clyde = new Ghost('clyde', 450, 'orange', 15)


console.log(clyde.startingPoint)
console.log(pinky.startingPoint)