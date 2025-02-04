let users = []
let usersList = document.getElementById('users-list')


// асинхронная функция получения списка пользователей
// Асинхронная функция умеет дожидаться выполнения оперций
async function getUsers() {
   // Выполняем запрос на получение пользователей
   //await позволяет дождаться ответа от сервиса
   let response = await axios.get('https://dummyjson.com/users')
   users = response.data.users
   console.log('response', response.data.users);
   showUsers()
}
function showUsers() {

   for (let user of users) {
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

      userCard.classList.add('user-card');
      //Добавляем автару поьзователя класс user/card
      userAvatar.classList.add('user-avatar');
      //Поместить автар пользователя внутрь созданной карточки
      userCard.append(userAvatar, userName, userPhone,userEmail,userBirthday);
      //Добавляем имя пользователя класс user-name
      userName.classList.add('user-name');
      //картинку внутрь div
      userAvatar.innerHTML=`<img src="${ user.image }" alt="">`

      //поместить имя пользователя внутрь user Name
      userName.innerHTML=user.firstName;
      //Поместим телефон пользователя внутрь userPhone
      userPhone.innerHTML=`<b>телефон: </b> ${ user.phone }`;
      //Поместим телефон пользователя внутрь userPhone
      userEmail.innerHTML=`<b>email: </b> ${ user.email}`;
      //Поместим телефон пользователя внутрь  userPhone
      userBirthday.innerHTML=`<b>дата рождения: </b> ${ user.birthDate }`;

      //Поместить карточку пользователя в конец списка
      usersList.append(userCard);
   }
}



getUsers();
