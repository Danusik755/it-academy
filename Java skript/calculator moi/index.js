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


function app(value) {
    //eval -  функция для javascript-кода
    input.value =   input.value / value;
}

function app1(value) {
    //eval -  функция для javascript-кода
    input.value =   input.value * value;
}

function compute1() {
    let newValue = input.value.replace('*', '/');
    newValue = input.value.replace('*', '/');
    input.value = eval(newValue);
    try {
        input.value = eval(newValue);
    } catch (e) {
        input.value = 'Ошибка!';
    }
}
function deleteKey(event) {
let keys = ['1','2','3','4','5','6','7','8','9','0']
    if ( keys.includes( event.key ) ==  false )
        event.preventDefault()
}

input.addEventListener('keypress', deleteKey)



