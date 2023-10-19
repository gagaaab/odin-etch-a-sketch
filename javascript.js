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

slider.addEventListener('input', function() {
    squares = slider.value
    container.textContent = ""
    makeSquares(squares)
})

makeSquares (squares)

const clearButton = document.getElementById('clear')
clearButton.addEventListener('click', () => {
    let hoveredElements = document.querySelectorAll('.hovered')
    hoveredElements.forEach(element => {
        element.classList.remove('hovered')
    })
})


container.addEventListener('click', () => {
    if (event.target.matches('.gridItem')) {
        event.target.classList.add('hovered');
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
            event.target.classList.add('hovered');
        }
    }
}

function onMouseUp(event) {
    mouseDown = false;
    document.removeEventListener("mousemove", onMouseMove)
    document.removeEventListener("mouseup", onMouseUp)
}