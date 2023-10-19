const container = document.getElementById('container')

function makeSquares(sides) {
    container.style.setProperty('--gridRows', sides)
    container.style.setProperty('--gridColumns', sides)
    for (let i = 0; i < (sides * sides); i++) {
        let square = document.createElement('div');
        square.innerText = (i + 1);
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

const gridItem = document.querySelector('.gridItem')

container.addEventListener('mouseover', () => {
    if (event.target.matches('.gridItem')) {
        event.target.classList.toggle('hovered');
}});