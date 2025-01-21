// Массивы в JavaScript

let users = ['Иван', 'Павел', 'Анна']

//Получение элементв из массива
//массив[индекс элемента]
//индекс / порядковый номер, СЧИТАЯ С НУЛЯ
console.log(users[1])

//Длина массива (количество элементов)
//массив.lenght
console.log('кол-во позователей:', users.length)

//добавление элемента массива
users.push('дМИТРИЙ');

//Удаление элемента из конца массива
users.pop();

//Добавление массива в начало
users.unshift('Босс');

//Удаление элемента из начала
//splice(индекс для удаления,кол-во элементов)
//users.splice(1, 1);



console.log(users, users.length)

//Объекты в JavaScript

users = [
    {
        avatar: 'https://cdn1.flamp.ru/baa6d870a72fea7fd70b4b866cd456fe.png',
        name: 'Иван',
        email: 'ivan@mail.ru',
        phone: '+7 (999) 143-143-14',
        birthday: '07.02.1998',
    },
    {
        avatar: 'https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png',
        name: 'Павел',
        email: 'pavel@mail.ru',
        phone: '+7 (989) 888-100-10',
        birthday: '09.09.1999',
    },
    {
        avatar: 'https://cdn3.iconfinder.com/data/icons/avatars-flat/33/woman_9-1024.png',
        name: 'Анна',
        email: 'anna@mail.ru',
        phone: '+7 (988) 111-100-11',
        birthday: '08.06.1996',
    },
]

//Получение значения объекта по его ключу

let firstUsers = users[0]

console.log('Первый пользователь:', firstUsers)
console.log('Имя пользователя:', firstUsers.name,firstUsers['name']);


//Задать новое свойство объекта
firstUsers['likes birds'] = true;
firstUsers['phone'] = '+7 (111) 011-00-01';

//Удалить свойство объекта
delete firstUsers['like birds'];

console.log(users)

let usersList = document.getElementById('users-list');

//Функция для ввода вользователей на экран
function ShowUsers() {
    //Создаем карточку пользователя
    let userCard = document.createElement('div');

    //Создаем аватар пользователя
    let userAvatar = document.createElement('div');
    //Создаем имя пользователя
    let userName = document.createElement('h2');
    //Создаем имя пользователя
    let userPhone = document.createElement('p');
    //Создаем  emal пользователя
    let userEmail = document.createElement('p');
    //Создаем др пользователя
    let userBirthday = document.createElement('p');

    //Добавляем карточке поьзователя класс user/card
    userCard.classList.add('user-card');
    //Добавляем автару поьзователя класс user/card
    userAvatar.classList.add('user-avatar');
    //Поместить автар пользователя внутрь созданной карточки
    userCard.append(userAvatar, userName, userPhone,userEmail,userBirthday);
    //Добавляем имя пользователя класс user-name
    userName.classList.add('user-name');
    //картинку внутрь div
    userAvatar.innerHTML='<img src="https://www.clipartmax.com/png/full/258-2582267_circled-user-male-skin-type-1-2-icon-male-user-icon.png" alt="">'

    //поместить имя пользователя внутрь user Name
    userName.innerHTML='Иван';
    //Поместим телефон пользователя внутрь userPhone
    userPhone.innerHTML='<b>телефон: </b> + 7 (999) 143-143-14';
    //Поместим телефон пользователя внутрь userPhone
    userEmail.innerHTML='<b>email: </b> ivan@imail.ru';
    //Поместим телефон пользователя внутрь userPhone
    userBirthday.innerHTML='<b>дата рождения: </b> 07.02.1998';

    //Поместить карточку пользователя в конец списка
    usersList.append(userCard);
}

ShowUsers()
