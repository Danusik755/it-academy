let sumButton = document.getElementById('cvet')
let sumInput = document.getElementById('input')

function text() {
    if (sumInput.value === 'Изменить текст в input') {
        sumInput.value = 'Текст'
    }
    else {
        sumInput.value = 'Изменить текст в input'
    }
}

sumButton.addEventListener('click', text)
