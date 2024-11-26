let sumButton = document.getElementById('cvet')
let paragraph = document.getElementById('paragraph')

function text() {
        `if (paragraph.innerText == 'Текст') {
            paragraph.innerText = 'Новый текст'
        }
        else {
            paragraph.innerText = 'Текст'
        }`
}


sumButton.addEventListener('click', text)
