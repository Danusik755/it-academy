let whiteButton =document.getElementById("white-Button")
let blackButton =document.getElementById("black-Button")
let greyButton =document.getElementById("grey-Button")
let goldenButton =document.getElementById("golden-Button")
let blueButton =document.getElementById("blue-Button")

let minus10Button =document.getElementById("minus-10")
let minus1Button =document.getElementById("minus-1")
let plus1Button =document.getElementById("plus-1")
let plus10Button =document.getElementById("plus-10")
let total= document.getElementById("total")
let changeButton= document.getElementById("change")
let count = 0

let even = document.getElementById("even")
let three = document.getElementById("three")
let five = document.getElementById("five")
let seven = document.getElementById("seven")

let historyEven = document.getElementById("history-even")
let historyThree = document.getElementById("history-three")
let historyFive= document.getElementById("history-five")
let historySeven= document.getElementById("history-seven")

function colorWhite() {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
}


whiteButton.addEventListener('click',colorWhite)

function colorBlack() {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
                     }

                     function checkEven() {
    if (count % 2 === 0) {
        even.innerText = 'да'
    }
    else {
        even.innerText = 'нет'
    }
                     }

function checkThree() {
    if (count % 3 === 0) {
        three.innerText = 'да'
    }
    else {
        three.innerText = 'нет'
    }
}

function checkFive() {
    if (count % 5 === 0) {
        three.innerText = 'да'
    }
    else {
        three.innerText = 'нет'
    }

    function checkSeven() {
        if (count % 7 === 0) {
            three.innerText = 'да'
        }
        else {
            three.innerText = 'нет'
        }

function minus10() {
   count = count - 10
    total.innerText = count
    checkEven()
    checkThree()
}

minus10Button.addEventListener('click', minus10)





function minus1() {
    count = count - 1
    total.innerText = count
    checkEven()
    checkThree()

}



minus1Button.addEventListener('click', minus1)




function plus10() {
    count = count + 10
    total.innerText = count
    checkEven()
    checkThree()
}

minus10Button.addEventListener('click', plus10)


function plus1() {
    count = count + 1
    total.innerText = count
    checkEven()
    checkThree()
}

minus10Button.addEventListener('click', plus1)



function changeNumber() {
 count  = +prompt('укажите число')
    total.innerText = count

    if (count % 2 === 0) {
     even.innerText = "да"
    }
    else {
        even.innerText = 'нет'
    }
    checkEven()
    checkThree()
}

changeNumber.addEventListener('click', changeNumber)



blackButton.addEventListener('click', colorBlack)