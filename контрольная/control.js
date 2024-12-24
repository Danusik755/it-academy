let sumButton1 = document.getElementById('but1')
let sumButton2 = document.getElementById('but2')
let sumButton3 = document.getElementById('but3')
let sumButton4 = document.getElementById('but4')
let sumButton5 = document.getElementById('but5')



function colorWhite() {
    document.body.style.backgroundColor ='white'
}

function colorBlack() {
    document.body.style.backgroundColor ='black'
}

function colorGrey() {
    document.body.style.backgroundColor = 'grey'
}
function colorGoldenrod() {
    document.body.style.backgroundColor ='Goldenrod'
}

function colorDarkblue() {
    document.body.style.backgroundColor = 'Darkblue'
}


function changeColor(color) {
    if (document.body.style.backgroundColor === 'white') {
        document.body.style.backgroundColor ='white'
    }
    else {
        document.body.style.backgroundColor = 'white'


    }
    if (document.body.style.backgroundColor === 'black'){
        document.body.style.backgroundColor ='black'
    }
    else {
        document.body.style.backgroundColor = 'black'


    }
}
function changeColors(color) {
    if (document.body.style.backgroundColor === 'grey') {
        document.body.style.backgroundColor ='grey'
    }
    else {
        document.body.style.backgroundColor = 'grey'


    }
    if (document.body.style.backgroundColor === 'Goldenrod') {
        document.body.style.backgroundColor ='Goldenrod'
    }
    else {
        document.body.style.backgroundColor = 'Goldenrod'


    }
}

    function number () {
    number + number
}





sumButton1.addEventListener('click', colorWhite)
sumButton2.addEventListener('click', colorBlack)
sumButton3.addEventListener('click', colorGrey)
sumButton4.addEventListener('click', colorGoldenrod)
sumButton5.addEventListener('click', colorDarkblue)
sumButton60.addEventListener('click', colorDarkblue)
sumButton61.addEventListener('click', colorDarkblue)
sumButton62.addEventListener('click', colorDarkblue)
sumButton63.addEventListener('click', colorDarkblue)
