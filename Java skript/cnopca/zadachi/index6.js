let sumInput = document.getElementById('input')
let sumButton = document.getElementById('cvet')
let sumapragraf = document.getElementById('paragraf')



function text() {
   sumapragraf.innerText = sumInput.value
}

sumButton.addEventListener('click', text)
