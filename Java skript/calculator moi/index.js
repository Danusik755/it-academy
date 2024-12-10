let input = document.getElementById("input");

//Функция добавления элемента в input
// vaule - аргумент функции
function  appendValue(vaule) {
    input.value = input.value + vaule;
}


//Функция для расчета
function compute() {
    //eval -  функция для javascript-кода
    input.value = eval(input.value);
}
function clear88() {
    //eval -  функция для javascript-кода
    input.value = '';
}



// let button1  = +firstNumber + +secondNumber
// let raznost = firstNumber - secondNumber
// let proizvedenie = firstNumber * secondNumber
// let chasnoe = firstNumber / secondNumber