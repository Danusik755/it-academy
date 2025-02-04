let title = document.getElementById('title');
let description = document.getElementById('description');
let button = document.getElementById('button');
let list = document.getElementById('list');
let searchInput = document.getElementById('search');
let searchButton = document.getElementById('search-button');
let resetButton = document.getElementById('reset-button');

let new_tasks = [];

//Функция для получения списка задач с dummujson
 async function getTasks() {
    let response = await axios.get('https://dummyjson.com/posts')
     //Записываем полученные данные в переменную new_tasks
     new_tasks = response.data.posts;
    showTasks();

}

//функция для ввода задачь на жкранпользователя
function showTasks() {
     //Очищаем список задач перед выводом элементов на экран
     list.innerHTML = ''
     for (const [index : number ,new_task ]of new_tasks.entries()) {
         //Создание нового элемента с помощью createElement
         let task = document.createElement('div')
         let taskTitle = document.createElement('div');
         let taskDescription = document.createElement('div');
         let deleteButton = document.createElement('button');
         let taskNumber = document.createElement('div');

         function deleteTask() {
             confirm(`вы уверены`)
            let response  = axios.delete(`https://dummyjson.com/posts/$ { new_task.id}`)
             let task = response.data;
            //если задача была успешно удалена сервисом
             if (task.isDeleted){
                 new_tasks.splice(index,1)
                 showTasks();
             }

         }
//Добавляем HTML внутрь элементов
         taskTitle.innerHTML = `<b>Название:</b> ${new_task.title }`;
         taskDescription.innerHTML = `<b>Описание:</b> ${new_task.body }`;
         deleteButton.innerHTML = 'Удалить'




//Добавляем Css-классы на элементы
         task.classList.add('task');
         taskTitle.classList.add('task-title');
         taskDescription.classList.add('task-description');

//добавляем название и описание задачи внутрь
         task.append(taskTitle, taskDescription, deleteButton);

// Добавление нового элемента в конец эемента
         list.append(task)
     }
}

//Функция для добавления новой задачи
function addTask() {
     //отправка данных о нововй задаче в сервис dummujson.com
   let response = await axios.post('https://dummyjson.com/posts/add', {
       title: title.value,
           body: description.value,
            userId: 5,
    });
    let task = response.data;
    //если для задачи создался уникальный номер, то задача успешно добавлена
    if (task.id) {
        new_tasks.unshift(task);
        showTasks();
    }



}
button.addEventListener('click', addTask);


 //Функция для поиска задачь на сайте
async function serchTask() {
    //Выполняем поиск задач по слову
    let response = await axios.get (`https://dummyjson.com/posts/search?q=${ searchInput.value }`);
    //Изменяем значение списка задач на найденныеданные
    new_tasks = response.data.posts;
    showTasks();
}
searchButton.addEventListener('click', searchTask)

//Сброс найденных задач
resetButton.addEventListener('click', getTasks)



//Получим список задачь при загруске страницы
getTasks();