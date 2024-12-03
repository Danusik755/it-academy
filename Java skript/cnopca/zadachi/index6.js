let sumInput = document.getElementById('input')
let sumButton = document.getElementById('cvet')


function text() {
    if (sumInput.value === 'Изменить текст в input') {
        sumInput.value = 'Текст'
    }
    else {
        sumInput.value = 'Изменить текст в input'
    }
}

sumButton.addEventListener('click', text)
