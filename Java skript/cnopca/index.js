//Функции
// function sum() {
// тело функции
// {


// пример функции в JavaScript
function sayHello()  { 
    alert ("Привет")
}

// Вызов функции
sayHello();

//Получить кнопку из html
let button = document.getElementById('button')

//вызвать функцию при нажатии на кнопку
button.addEventListener('click',sayHello  )

//калькулятор

function sumOfNumbers() {
    //получение 1-го числа
    let input1 = document.getElementById('first')

    //число, введенное в 1-е текстого поля
    let firstNumber = input1.value

    //получение 2-го текстового поля
    let input2 = document.getElementById('second')

    //число, введенное во 2-е тексстовое поле
    let secondNumber = input2.value

    //Сумма введенных чисел
    let sum = +firstNumber + +secondNumber;

    //Получаем span элемент со значением суммы
    let span = document.getElementById('sum')

    //Подставляем найденную сумму в span
    span.innerText = sum;
}


//Получаем кнопку для нахождения суммы
let sumButton = document.getElementById('sum-button')

//Отслеживатьнажатие на кнопку "Найти сумму"
sumButton.addEventListener('click', sumOfNumbers)

//дополнительно
let body = document.body;

//изменение backgraund
body.style.backgroundColor = 'pink'

console.log (body);