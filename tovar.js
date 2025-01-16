let tittle = document.getElementById('papa');
let description = document.getElementById('papa4');
let button = document.getElementById('button');
let list = document.getElementById('list');
let count = 0
let delButton = document.createElement('deleteButton');

function addTask() {
    //Создание нового элемента с помощью createElement
    let task = document.createElement('div')
    let taskTitle = document.createElement('div');
    let taskDescription = document.createElement('div');
    let deleteButton = document.createElement('button');
    let taskNumber = document.createElement('div');


    function delTask() {
        task.remove();
        count=count - 1
    }

    deleteButton.addEventListener('click', delTask);


    //Добавляем HTML внутрь элементов
    taskTitle.innerHTML = `<b>Название:</b> ${ tittle.value }`;
    taskDescription.innerHTML = `<b>Описание:</b> ${description.value }`;
    deleteButton.innerHTML = 'Удалить'

    count = count + 1
    taskNumber.innerHTML = `<b> Задача №${ count } </b>`


    //Добавляем Css-классы на элементы
    task.classList.add('task');
    taskTitle.classList.add('task-title');
    taskDescription.classList.add('task-description');

    //добавляем название и описание задачи внутрь

    //Добавляем новый элемент в конец списка задач
    task.append(taskTitle, taskDescription, deleteButton, taskNumber);

// Добавление нового элемента в конец эемента
    list.append(task)

    //Очищаем поля формы
    tittle.value = '';
    description.value = '';
}

button.addEventListener('click', addTask )