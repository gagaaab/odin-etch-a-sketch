const container = document.getElementById('container')

function makeSquares(rows, columns) {
    container.style.setProperty('--gridRows', rows)
    container.style.setProperty('--gridColumns', columns)
    for (let i = 0; i < (rows * columns); i++) {
        let square = document.createElement('div');
        square.innerText = (i + 1);
        container.appendChild(square).className = "gridItem"
    }
}

makeSquares(16,16)

const gridItem = document.querySelector('.gridItem')

container.addEventListener('mouseover', () => {
    if (event.target.matches('.gridItem')) {
        event.target.classList.toggle('hovered');
}});