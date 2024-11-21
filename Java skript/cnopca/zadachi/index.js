let sumButton = document.getElementById('cvet')

function changeColor() {
    if (document.body.style.backgroundColor === 'green') {
        document.body.style.backgroundColor = 'blue'
    }
    else {
        document.body.style.backgroundColor = 'green'
    }
}
sumButton.addEventListener('click', changeColor)

console.log (body);
