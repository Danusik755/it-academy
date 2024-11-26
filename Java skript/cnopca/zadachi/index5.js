let sumButton = document.getElementById('cvet')
let paragraph = document.getElementById('paragraph')

function text() {
    if ( paragraph.innerText === 'Изменить текст в input') {

        }
        else {
            paragraph.innerText = 'Текст'
        }
}


function text1() {
    if ( paragraph.innerText === 'Изменить текст в input') {

        }
        else {
            paragraph.innerText = 'Текст'
        }

}

sumButton.addEventListener('click', text)
