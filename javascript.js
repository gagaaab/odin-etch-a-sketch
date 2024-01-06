const defaultPen = '#000000'
const defaultBackground = '#FFFFFF'

let currentPen = defaultPen
let currentBackground =  defaultBackground
let currentColor = currentPen

const container = document.getElementById('container')

function makeSquares(sides) {
    container.style.setProperty('--gridRows', sides)
    container.style.setProperty('--gridColumns', sides)
    for (let i = 0; i < (sides * sides); i++) {
        let square = document.createElement('div');
        container.appendChild(square).className = "gridItem"
    }
}

const slider = document.getElementById('gridSize')
const output = document.getElementById('size')
output.textContent = slider.value

slider.oninput = function() {
    size.textContent = this.value
}

let squares = slider.value

slider.addEventListener('input', () => {
    squares = slider.value
    container.textContent = ''
    makeSquares(squares)
})

makeSquares (squares)

const colorPicker1 = document.getElementById('colorPicker1')
"input click".split(" ").forEach(function(e) {
    colorPicker1.addEventListener(e, () => {
    currentPen = colorPicker1.value
    setCurrentMode()
})
})

const colorPicker2 = document.getElementById('colorPicker2')
"input click".split(" ").forEach(function(e) {
    colorPicker2.addEventListener(e, () => {
    currentPen = colorPicker2.value
    setCurrentMode()
})
})

const colorPicker3 = document.getElementById('colorPicker3')
"input click".split(" ").forEach(function(e) {
    colorPicker3.addEventListener(e, () => {
    currentPen = colorPicker3.value
    setCurrentMode()
})
})

const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', () => {
    container.innerHTML = ''
    makeSquares(squares)
    gridButton.classList.remove('active')
    gridMode = false
})

container.addEventListener('click', () => {
    if (event.target.matches('.gridItem')) {
        event.target.style.background = currentColor;
    }
});

let mouseDown = false;

container.addEventListener('mousedown', () => {
    mouseDown = true
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseup", onMouseUp)
});

function onMouseMove(event) {
    if (mouseDown) {
        if (event.target.matches('.gridItem')) {
            event.target.style.background = currentColor;
        }
    }
}

function onMouseUp(event) {
    mouseDown = false;
    document.removeEventListener("mousemove", onMouseMove)
    document.removeEventListener("mouseup", onMouseUp)
}

function setCurrentMode() {
    if (penMode) {
        currentColor = currentPen
        eraserButton.classList.remove('active')
        penButton.classList.add('active')
    }
    else if (eraserMode) {
        currentColor = currentBackground
        penButton.classList.remove('active')
        eraserButton.classList.add('active')
    }
}

const penButton = document.getElementById('pen')
penButton.classList.add('active')
let penMode = true
penButton.addEventListener('click', () => {
    penMode = true
    eraserMode = false
    setCurrentMode()
})

const eraserButton = document.getElementById('eraser')
eraserButton.addEventListener('click', () => {
    penMode = false
    eraserMode = true
    setCurrentMode()
})

const gridItems = document.getElementsByClassName('gridItem')
let gridMode = false
function clearGrid() {
    for (let i = 0; i < gridItems.length; i++) {
        if (gridMode) {
            gridItems[i].style.border = '1px solid black';
        } else {
            gridItems[i].style.border = 'none';
        }
    }
}

const gridButton = document.getElementById('toggleGrid')
gridButton.addEventListener('click', () => {
    gridButton.classList.toggle('active');
    gridMode = !gridMode;
    clearGrid();
})
