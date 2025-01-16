let tittle = document.getElementById('tittle');
let description = document.getElementById('description');
let button = document.getElementById('button');
let list = document.getElementById('list');
let count = 0
let searchInput = document.getElementById('search');
let searchButton = document.getElementById('search-btn');
let resetButton = document.getElementById('reset-button');




function addTask () {
    //Создание нового элемента с помощью createElement
    let task = document.createElement('div')
    let taskTitle = document.createElement('div');
    let taskDescription = document.createElement('div');
    let deleteButton = document.createElement('button');
    let taskNumber = document.createElement('div');

    function deleteTask() {
        //Удаление элементв со страницицы
        task.remove();
    }

    //Добавляем HTML внутрь элементов
    taskTitle.innerHTML = `<b>Название:</b> ${ tittle.value }`;
    taskDescription.innerHTML = `<b>Описание:</b> ${description.value }`;
    deleteButton.innerHTML = 'Удалить'

    count = count + 1
    taskNumber.innerHTML = `<b> Задача №$ { count } </b>`


    //Добавляем Css-классы на элементы
    task.classList.add('task');
    taskTitle.classList.add('task-title');
    taskDescription.classList.add('task-description');

    //добавляем название и описание задачи внутрь

    //Добавляем новый элемент в конец списка задач
    task.append(taskTitle, taskDescription);

// Добавление нового элемента в конец эемента
    list.append(task)

    //Очищаем поля формы
    tittle.value = '';
    description.value = '';
}

button.addEventListener('click', addTask )

function searchTask() {
let tasks = document.getElementsByClassName('task');

for (let task in tasks) {
let titles = task.getElementsByClassName('task-category');

    let title =titles[0]
  if (title.innerText.includes(searchInput.value ) === false) {
  task.style.display = 'none'
  }
searchButton.addEventListener('click', searchTask)
function resetTasks() {
list.innerHtml = tasksListHtml;
}

    }
}

searchButton.addEventListener('click', searchTask);

function resetTask() {
    let tasks = document.getElementsByClassName('task');
}

 for (let task of tasks){
     task.style.display = 'block';
 }


resetButton.addEventListener('click',resetTask)