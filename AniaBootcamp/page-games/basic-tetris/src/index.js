document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector(".grid")
  let squares = Array.from(document.querySelectorAll(".grid div"))
  // console.log(squares)
  const scoreDisplay = document.querySelector("#score")
  const starBtn = document.querySelector("#start-button")
  const width = 10
  let nextRandom = 0
  let timerId
  let score = 0
  
  const colors = [
    'orange',
    'red',
    'purple',
    'green',
    'blue'
    ]

  // The tetraminoes
  const lTetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
  ]

  const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1]
  ]

  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
  ]

  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
  ]

  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
  ]
  // 
  // Array of tetraminoes
  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

  let currentPosition = 4
  let currentRotation = 0

  //
  // randomly select a Tetramino and its first rotation
  let random = Math.floor(Math.random() * theTetrominoes.length)
  // console.log(random)

  let current = theTetrominoes[random][currentRotation]

  // console.log(theTetrominoes[0][0])

  //
  // draw the tetrominoe
  function draw() {
    current.forEach(index => {
      // console.log(currentPosition+ index)
      squares[currentPosition + index].classList.add('tetromino')
      squares[currentPosition + index].style.backgroundColor = colors[random]


    })
  }
    
    // console.log("!!" + current)
  
  draw()

  // undraw the Tetromino
  function undraw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.remove('tetromino')
      squares[currentPosition + index].style.backgroundColor = ""
    })
    }

  
undraw()

  
  // make the tetromino move down every second
  // timerId = setInterval(moveDown, 1000)//removed now work with button functionality
  
  function moveDown() {
    if (!current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
      undraw()
    currentPosition += width 
    draw()
    } else {
      freeze()  //is invoke to check every second

    }
    
  }
  
  // freeze function
  function freeze() {
    if (current.some(index => 
      squares[currentPosition + index + width].classList.contains("taken")
    )) {
      current.forEach(index => squares[currentPosition + index].classList.add("taken"))
      // start a new tetromino falling
      random = nextRandom
      nextRandom = Math.floor(Math.random()*theTetrominoes.length)
      current = theTetrominoes[random][currentRotation]
      currentPosition = 4
      draw()
      displayShape()
      addScore()
      gameOver()
    }
  }
  // freeze()

  // move the tetromino left, unless is at the left edge or there is a blockage
  //we start off by removing any trace of the shape in its current location
  function moveLeft() {
    undraw() 
    // define what is a left edge
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)

    // !isAtleftEdge means if it is not in the left edge, we are allowed to move to the left
    if (!isAtLeftEdge) currentPosition-=1

    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition += 1
    }
      draw()
  }

  function moveRight() {
    undraw()
    //define what is a right edge
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
    
    
    // !isAtRightEdge means if it is not in the right edge, we are allowed to move to the right
    if (!isAtRightEdge) currentPosition += 1
    // console.log(currentPosition)
    // console.log(isAtRightEdge)

    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition -=1
    }
      draw()
  }

  // rotate the tetromino
  // skipping to the next rotation in the currentRotation array

  function rotate() {
    undraw()
    currentRotation++
    // if the current rotation gets to 4, make it go back to 0
    if (currentRotation === current.length) {
      currentRotation = 0
    }
    // if the last statement is false we simply want to pass through that new current rotation number into our current tetramino
    current = theTetrominoes[random][currentRotation]
    draw()
  }

  
  // keycodes and events
  function control(e) {
    if (e.keyCode === 37) {
      moveLeft()
    } else if (e.keyCode === 38) {
      rotate()
    } else if (e.keyCode === 39) {
      moveRight()
    } else if (e.keyCode === 40) {
      //moveDown()
    }
  }
  document.addEventListener('keydown', control)
  
  // 
  //show up-next tetromino in mini-grid 
  const displaySquares = document.querySelectorAll(".mini-grid div")
  // console.log(displaySquares)

  const displayWidth = 4
  const displayIndex = 0


  // the tetraminos without rotations
  const upNextTetrominoes = [
    [1, displayWidth+1, displayWidth*2+1, 2],//lTetromino
    [0, displayWidth, displayWidth+1, displayWidth*2+1],//zTetromino
    [1, displayWidth, displayWidth+1, displayWidth+2],//tTetromino
    [0, 1, displayWidth, displayWidth+1],//oTetromino
    [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1]//iTetromino
  ]

 

  // display the shape in t-he mini-grid display
  function displayShape() {
    //remove any trace of a tetramino from the entire grid
    displaySquares.forEach(square => {
      square.classList.remove('tetromino')
      square.style.backgroundColor = ''
    })

    // for each square that makes up our now randomly selected upNextTetrominoes, we wanna add a class of tetramino to it. We then want to pass it through on displaySquares
    // console.log(nextRandom)
    upNextTetrominoes[nextRandom].forEach(index => {
      displaySquares[displayIndex + index].classList.add('tetromino')
      displaySquares[displayIndex + index].style.backgroundColor = colors[nextRandom]
      // console.log('!' + displayIndex)  
      // console.log('!!' + index)  
    })

  }

  // 
  // 
  // add functionality to the button
  starBtn.addEventListener('click', () => {
    if (timerId) {
      clearInterval(timerId)
      timerId = null
    } else {
      // else when the start button is pressed we draw the tetrominno in what is the default current position(=4), and put the timeId on a setInterval of invoking the moveDown function every 1000 milliseconds
      // and select the nextRandom shape we want to display in our mini grid and invoke the displayShape function that will display the randomly selected tetromino we just determined

      draw()
      timerId = setInterval(moveDown, 300)
      nextRandom = Math.floor(Math.random() * theTetrominoes.length)
      displayShape()
    }
  })

  // add score
  function addScore() {
    // write a loop that will loop over entire grid and all that squares ever 10 squares(so widht by width)
    for (let i = 0; i < 199; i += width) {
      const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]
      
      // we use the inbuilt method called every to check if every square in our defined row contains a div with the class of 'taken'
      // console.log(width)

      if (row.every(index => squares[index].classList.contains('taken'))) {
        
        score += 10
        scoreDisplay.innerHTML = score
        //for each item in the row we remove the class of 'taken'
        row.forEach(index => {
          squares[index].classList.remove('taken')
          squares[index].classList.remove('tetromino')
          squares[index].style.backgroundColor = ''
        })
        // and we take out this row using splice
        const squaresRemoved = squares.splice(i, width)

        console.log(i)
        console.log(width)
        console.log(squaresRemoved)

        squares = squaresRemoved.concat(squares)
        squares.forEach(cell => grid.appendChild(cell))
      }
    }
  }

  function gameOver() {
    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      clearInterval(timerId)
      scoreDisplay.innerHTML = "GAME OVER"
      }
    }


  
})
    //
    // ===============
    
    