console.log('Hello World')


// 1. переменные
let name = 'Иван'
console.log('Имя пользователя:', name)

name = 'Иван 228_1337';
console.log('Новое имя пользователя:', name);

//констант
const age = 14;
console.log('Возраст пользователя', age);

//2. типы данных
let num = 12; //целое число
let num2 =12.11; //десятичное число
let string ='строка'
let bool = true // булевый тип (true / false)
let empty = null //пустота

let undef
console.log(undef)

// 3.преобразование типоав данных

//преобразование строуи в число
let strToNum = +'12' //Number ('12') -второй вариант
console.log(strNoNum + 12);


//преобразование числа в строку
let numToStr = String(12) //Number ('12') -второй вариант
console.log(numToStr + 12);

//4. Математические операции
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/2)
console.log(2% 2)
console.log(2**2)
//5. Взаимодействие с пользователем
alert('Добро пожаловать на сайт')

let userName = prompt('Как тебя зовут?')
alert('Тебя зовут' + userName);
//confirm подтверждение текста
let userNameConfirmed = confirm('Ты уверен, что тебя зовут' + userName + '?')

//6. условия
let userAge= prompt('Сколько тебе лет?')

let padeTitle = document.getElementById( elementid: 'title')

console.log(pagetitle)

if(userAge > 12) {
    alert('Можешь пользоваться этим сайтом')
    pageTitle.innerText= 'Можешь пользоваться этим сайтом'
}
else {
    alert('Тебе рано пользоваться этим сайтом')
    /// Изменяем текст для элемента на html/странце 
    pageTitle.innerText = 'Тебе ещё рано пользоваться сайтом!'
}