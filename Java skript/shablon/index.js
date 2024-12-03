let input = document.getElementById("input");

//Функция добавления элемента в input
// vaule - аргумент функции
function  appendValue(vaule) {
    input.value = input.value + vaule;
}


//Функция для расчета
function compute() {
    //eval -  функция для javascript-кода
    input.value = eval('50+2');
}