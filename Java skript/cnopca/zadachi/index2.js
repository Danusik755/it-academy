let sumButton1 = document.getElementById('cvet')
let sumButton2 = document.getElementById('cvet2')
let sumButton3 = document.getElementById('cvet3')

function colorRed() {
    document.body.style.backgroundColor ='red'
}

function colorGreen() {
    document.body.style.backgroundColor ='green'
}

function colorBlue() {
    document.body.style.backgroundColor = 'blue'
}


function changeColor() {
    if (document.body.style.backgroundColor === 'green') {
        document.body.style.backgroundColor ='green'
    }
    else {
        document.body.style.backgroundColor = 'green'


    }
    if (document.body.style.backgroundColor === 'red'){
        document.body.style.backgroundColor ='red'
    }
    else {
        document.body.style.backgroundColor = 'red'


    }
}




sumButton1.addEventListener('click', colorGreen)
sumButton2.addEventListener('click', colorRed)
sumButton3.addEventListener('click', colorBlue)