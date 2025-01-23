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



