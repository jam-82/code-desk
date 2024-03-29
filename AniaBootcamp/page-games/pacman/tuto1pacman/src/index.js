document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid")
    const scoreDisplay = document.getElementById('score')
    const width = 28 //28 X 28 = 784 squares
    let score = 0

    // layout of grid and what is in the squares
    const layout = [
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
        1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
        1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
        1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
        1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
        1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
        1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ]

    // Legend
    // 0 - pac-dot
    // 1 - wall
    // 2 - ghost-lair
    // 3 - power-pallet
    // 4 - empty

    const squares = []
    
    // console.log(layout.length)

    // draw the grid and render it 
    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement('div')
            grid.appendChild(square)
            squares.push(square)
            // console.log()
            // add layout to the board
            if (layout[i] === 0) {
                squares[i].classList.add('pac-dot')
            } else if (layout[i] === 1) {
                squares[i].classList.add('wall')
            } else if (layout[i] === 3) {
                squares[i].classList.add('power-pallet')
            } else if (layout[i] === 2) {
                squares[i].classList.add('ghost-lair')
            } 
            // else if (layout[i] === 4) {
                //     squares[i].classList.add('empty')
                // }
            }
    }

createBoard()

    // starting position of pac-man
    let pacmanCurrentIndex = 490
    
    squares[pacmanCurrentIndex].classList.add('pac-man')

    // move pac-man
    function movePacman(e) {
        squares[pacmanCurrentIndex].classList.remove('pac-man')

        switch (e.keyCode) {
            case 37:
                if (pacmanCurrentIndex % width !== 0 && !squares[pacmanCurrentIndex - 1].classList.contains("wall") && !squares[pacmanCurrentIndex - 1].classList.contains("ghost-lair")) pacmanCurrentIndex -= 1
                // check if pacman is in the left exit space index minus one, put it in a specific index.
                if (squares[pacmanCurrentIndex - 1] === squares[363]) {
                    pacmanCurrentIndex = 391
                }
                break
            case 38:
                if (pacmanCurrentIndex - width >= 0 && !squares[pacmanCurrentIndex-width].classList.contains("wall") && !squares[pacmanCurrentIndex-width].classList.contains("ghost-lair")) pacmanCurrentIndex -= width
                break
            case 39:
                if (pacmanCurrentIndex % width < width - 1 && !squares[pacmanCurrentIndex + 1].classList.contains("wall") && !squares[pacmanCurrentIndex + 1].classList.contains("ghost-lair")) pacmanCurrentIndex += 1
                // check if pacman is in right exit
                // if pacman is in the index that next index is 392, make it appear somewhere in a specific index
                if (squares[pacmanCurrentIndex + 1] === squares[392]) {
                    pacmanCurrentIndex = 364
                }
                break
            case 40:
                if (pacmanCurrentIndex + width < width * width && !squares[pacmanCurrentIndex+width].classList.contains("wall") && !squares[pacmanCurrentIndex+width].classList.contains("ghost-lair")) pacmanCurrentIndex += width
                break
            default: console.log("key not recognized")
        }
        // console.log(pacmanCurrentIndex)
        
        squares[pacmanCurrentIndex].classList.add('pac-man')
        
        pacDotEaten()
        powerPalletEaten()
        checkForGameOver()
        checkForWin()
    }

    document.addEventListener('keyup', movePacman)


    // what happens when Pac-man eats a pac-dot
    function pacDotEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
            score++
            scoreDisplay.innerHTML = score
            squares[pacmanCurrentIndex].classList.remove('pac-dot')
        }
    }

    // what happens when you eat a power-pallet, we want to make all the ghost go blue, and gives some points to pac-man, remember we can no longer hurt him when ghosts are blue, and pac-man can hurt them

    function powerPalletEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('power-pallet')) {
            score += 10
            ghosts.forEach(ghost => ghost.isScared = true)
            setTimeout(unScareGhosts, 10000)
            squares[pacmanCurrentIndex].classList.remove('power-pallet')
        }
    }

    // make the ghosts stop appearing as aquamarine
    function unScareGhosts() {
        ghosts.forEach(ghost => ghost.isScared = false)
    }


    // create our Ghost template
    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.isScared = false
            this.timerId = NaN
        }
    }

    let ghosts = [
        new Ghost('blinky', 348, 250),
        new Ghost('pinky', 376, 300),
        new Ghost('inky', 351, 400),
        new Ghost('clyde', 379, 1800), 
    ]
// console.log(ghosts[1])

    // draw my ghosts onto the grid
    // with a forEach() method we're going to draw a ghost for each item in our ghosts array

    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className)
        squares[ghost.currentIndex].classList.add('ghost')
    })

    // move the ghosts randomly
    ghosts.forEach(ghost => moveGhost(ghost))

    // write the function to move the ghosts
    function moveGhost(ghost) {
        const directions = [-1, +1, width, -width]
        let direction = directions[Math.floor(Math.random() * directions.length)]
        
        ghost.timerId = setInterval(function () {
            // if the next square your ghost is going to go in, does NOT contain a wall and a ghost, you can go there, if this statement is not true it find a new direction to go in, then the loop starts over
            if (!squares[ghost.currentIndex + direction].classList.contains("wall") && !squares[ghost.currentIndex + direction].classList.contains("ghost")) {
                // you can go there
                // remove all ghost related classes
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
                // change the currentindex to the new safe square
                ghost.currentIndex += direction
                // redraw the ghost in the new safe space
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
                // else find a new direction to try
            } else direction = directions[Math.floor(Math.random() * directions.length)]

            // if the ghost is currently scared
            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add('scared-ghost')
            }

            // if the ghost is currently scared and pacman runs into it
            if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
                ghost.currentIndex = ghost.startIndex
                score += 100
                // squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
            }
            checkForGameOver()
        }, ghost.speed)
    }
    // using each ghost unique timer ID , we will make each ghost do everything has been written in this function at the speed of its ghost speed


    //check for a game over
    function checkForGameOver() {
        if (squares[pacmanCurrentIndex].classList.contains('ghost') && !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', movePacman)
            // setTimeout(function () {
            //     alert('Game Over!')
            // }, 1000)
            scoreDisplay.innerHTML = ' GAME OVER'
        }
    }

    // check for a win 
    function checkForWin() {
        if (score >= 274) {
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', movePacman)
            // setTimeout(function () {
            //     alert('YOU WON!')
            // }, 1000)
            scoreDisplay.innerHTML = " YOU WON!"
        }
    }

// we need to incomment the game over function in the movepacman function, as we want to invoke this function not only when the ghosts move into pacman square but also when pacman move into ghost squares  ,  we also need to move this into the move ghost function



})