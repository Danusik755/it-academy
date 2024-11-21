alert('Добро пожаловать на сайт! Давай посчитаем 2 числа')

let firstNumber = prompt('Введите первое число')

let secondNumber = prompt('Введите второе число')

let sum  = +firstNumber + +secondNumber
let raznost = firstNumber - secondNumber
let proizvedenie = firstNumber * secondNumber
let chasnoe = firstNumber / secondNumber

let firstElement = document.getElementById('first')
firstElement.innerText = firstNumber

let secondElement = document.getElementById('second')
secondElement.innerText = secondNumber




let sumElement = document.getElementById('summa')
sumElement.innerText = sum
let raznostElement = document.getElementById('raznost')
raznostElement.innerText = raznost
let proizvedenieElement = document.getElementById('proizvedenie')
proizvedenieElement.innerText = proizvedenie
let chasnoeElement = document.getElementById('chastnoe')
chasnoeElement.innerText = chasnoe