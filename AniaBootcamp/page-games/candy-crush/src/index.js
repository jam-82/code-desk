document.addEventListener('DOMContentLoaded', () => {

    const grid = document.querySelector('.grid')
    const displayScore = document.querySelector('#score')
    const starBtn = document.querySelector('#start-button')
    let timerId
    const width = 8
    const squares = []
    let score = 0

    const candyColors = [
        'url(images/red-candy.png)',
        'url(images/yellow-candy.png)',
        'url(images/orange-candy.png)',
        'url(images/purple-candy.png)',
        'url(images/green-candy.png)',
        'url(images/blue-candy.png)'
    ]


    //  Create a board
    function createBoard() {
        for (let i = 0; i < width * width; i++) {
            const div = document.createElement('div')
            // console.log(div)
            div.setAttribute('draggable', true)
            div.setAttribute('id', i)
            let randomColor = Math.floor(Math.random() * candyColors.length)
            // console.log(randomColor)
            div.style.backgroundImage = candyColors[randomColor]
            grid.appendChild(div)
            // console.log(grid)
            squares.push(div)
            
        }
        
        // console.log(squares)
    }

    createBoard()

    // Drag the candies
    let colorBeingDragged
    let colorBeingReplaced
    let squareIdBeingDragged
    let squareIdBeingReplaced

    squares.forEach(square => square.addEventListener('dragstart', dragStart))
    squares.forEach(square => square.addEventListener('dragend', dragEnd))
    squares.forEach(square => square.addEventListener('dragover', dragOver))
    squares.forEach(square => square.addEventListener('dragenter', dragEnter))
    squares.forEach(square => square.addEventListener('dragleave', dragLeave))
    squares.forEach(square => square.addEventListener('drop', dragDrop))

    function dragStart() {        
        colorBeingDragged = this.style.backgroundImage
        squareIdBeingDragged = parseInt(this.id)
        console.log(colorBeingDragged)
        console.log(this.id, 'dragstart')
    }
    
    function dragOver(e) {     
        e.preventDefault()
        console.log(this.id, 'dragover')
    }
    function dragEnter(e) {        
        e.preventDefault()
        console.log(this.id, 'dragenter')
    }
    function dragLeave() {        
        console.log(this.id, 'dragleave')
    }
   
    function dragDrop() {
        console.log(this.id, 'dragdrop')
        colorBeingReplaced = this.style.backgroundImage
        // console.log(colorBeingReplaced)
        squareIdBeingReplaced = parseInt(this.id)
        // console.log(squareIdBeingReplaced)
        this.style.backgroundImage = colorBeingDragged
        squares[squareIdBeingDragged].style.backgroundImage = colorBeingReplaced
    //    console.log(squareIdBeingDragged)
    }

    function dragEnd() {        
        console.log(this.id, 'dragend')
        // what is a valid move?
        let validMoves = [
            squareIdBeingDragged -1,
            squareIdBeingDragged -width,
            squareIdBeingDragged +1,
            squareIdBeingDragged + width
        ]
        let validMove = validMoves.includes(squareIdBeingReplaced)
        console.log(squareIdBeingReplaced)
        console.log(validMove)

        if (squareIdBeingReplaced && validMove) {
            squareIdBeingReplaced = null
        } else if (squareIdBeingReplaced && !validMove) {
            squares[squareIdBeingReplaced].style.backgroundImage = colorBeingReplaced
            squares[squareIdBeingDragged].style.backgroundImage = colorBeingDragged
        } else squares[squareIdBeingDragged].style.backgroundImage = colorBeingDragged
    }
    
    // drop candies once some have been cleared
    function moveDown() {
        for (let i = 0; i < 56; i++) {
            if (squares[i + width].style.backgroundImage === '') {
                squares[i + width].style.backgroundImage = squares[i].style.backgroundImage
                squares[i].style.backgroundImage = ''
                //
                // fill the first row with color
                const firstRow = [0, 1, 2, 3, 4, 5, 6, 7]
                const isFirstRow = firstRow.includes(i)
                if (isFirstRow && squares[i].style.backgroundImage === '') {
                    let randomColor = Math.floor(Math.random() * candyColors.length)

                    squares[i].style.backgroundImage = candyColors[randomColor]
                }

            }
        }
    }





    // =======checking for matches========

     // check for row of four
     function checkRowForFour() {
        for (let i = 0; i < 61; i++) {
            let rowOfFour = [i, i + 1, i + 2, i + 3]
            let decidedColor = squares[i].style.backgroundImage
            const isBlank = squares[i].style.backgroundImage === ''

            const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55]
            if (notValid.includes(i)) continue

            if (rowOfFour.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)) {
                score += 4
                displayScore.innerHTML = score
                rowOfFour.forEach(index => {
                    squares[index].style.backgroundImage = ''
                })
            }
        }
    }
    checkRowForFour()

    // check for column of Four
    function checkColumnForFour() {
        for (let i = 0; i < 40; i++) {
             let columnOfFour = [i, i+width, i+width*2, i+width*3]
             let decidedColor = squares[i].style.backgroundImage 
             const isBlank = squares[i].style.backgroundImage === ''
             if (columnOfFour.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)) {
                 score += 4
                 displayScore.innerHTML = score
                 columnOfFour.forEach(index => {
                     squares[index].style.backgroundImage = ''
                })
            }
        }
    }
    checkColumnForFour()


//=======================================================

    // check for row of three
    function checkRowForThree() {
        for (let i = 0; i < 62; i++) {
            let rowOfThree = [i, i + 1, i + 2]
            let decidedColor = squares[i].style.backgroundImage
            const isBlank = squares[i].style.backgroundImage === ''

            const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55]
            if (notValid.includes(i)) continue

            if (rowOfThree.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)) {
                score += 3
                displayScore.innerHTML = score
                rowOfThree.forEach(index => {
                    squares[index].style.backgroundImage = ''
                })
            }
        }
    }
    checkRowForThree()

    // check for column of Three
    function checkColumnForThree() {
        for (let i = 0; i <= 47; i++) {
             let columnOfThree = [i, i+width, i+width*2]
             let decidedColor = squares[i].style.backgroundImage 
             const isBlank = squares[i].style.backgroundImage === ''
             if (columnOfThree.every(index => squares[index].style.backgroundImage === decidedColor && !isBlank)) {
                 score += 3
                 displayScore.innerHTML = score
                 columnOfThree.forEach(index => {
                     squares[index].style.backgroundImage = ''
                })
            }
        }
    }
    checkColumnForThree()


    // add functionality to the button
    starBtn.addEventListener('click', () => {
        if (timerId) {
            clearInterval(timerId)
            timerId = null
        } else {
            timerId = setInterval(function () {
        moveDown()
        checkRowForFour(),
        checkColumnForFour(),
        checkRowForThree(),
        checkColumnForThree()
    }, 100)
        }
    })

    

    




})

// last action: finished to put the start button functionality

//try to put a background-image: url('') but don't work so far