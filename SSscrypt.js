let commentsArray = []; //пустой массив, в дальнейшем будем хранить там объект комментария

function addComment() { //фун. для добавления комментария
    let name = document.getElementById('nameInput').value.trim(); //поучаем значения с полей ввода и удаляем лищние пробелы ыы ы
    let commentText = document.getElementById('commentInput').value.trim();
    let currentDate = new Date(); //получаем дату и время
    let dateString = currentDate.toLocaleString(); //форматируем датувремя в строчку
  
    if (name === '' && commentText === '') { //проверяем наличие контента в полях ввода
      document.getElementById('nameInput').classList.add('empty-input');
      document.getElementById('commentInput').classList.add('empty-input');
      return; // прерываем выполнение если оба пустые
    }
  
    // тут мы проверяем есть ли контнет в поле имени
    if (name === '') {
      document.getElementById('nameInput').classList.add('empty-input');
      return; 
    }
  
    // тут мы проверяем есть ли контнет в поле коммента
    if (commentText === '') {
      document.getElementById('commentInput').classList.add('empty-input');
      return; 
    }
  
    // если оба поля заполнены - тада удаляем класс empty-input у обоих полей
    document.getElementById('nameInput').classList.remove('empty-input');
    document.getElementById('commentInput').classList.remove('empty-input');
  
    let comment = { // создаем объект коммента
      name: name,
      text: commentText,
      date: dateString,
      likes: 0
    };
  
    commentsArray.push(comment); //добавляем объект коммента в созданный ранее массив 
  
    document.getElementById('nameInput').value = ''; //чистим поля ввода
    document.getElementById('commentInput').value = '';
  
    displayComment(comment); //вызов функции которая описана ниже ⬇⬇
  }

function displayComment(comment) {// функция для отображения нового коммента на странице html 
  let li = document.createElement('li'); //создаем новый элемент страницы
  li.classList.add('comment'); //добавляем к нему класс

  let header = document.createElement('div');
  header.classList.add('comment-header');
  header.innerHTML = '<div>' + comment.name + '</div>' + '<div>' + comment.date + '</div>'; // заполняем разметку html 

  let body = document.createElement('div');
  body.classList.add('comment-body');
  body.innerHTML = '<div class="comment-text">' + comment.text + '</div>';

  let footer = document.createElement('div');
  footer.classList.add('comment-footer');

  let likesDiv = document.createElement('div');
  likesDiv.classList.add('likes');
  likesDiv.innerHTML = '<span class="likes-counter" data-likeid="' + commentsArray.length + '">0</span>' + '<button class="like-button" data-likeid="' + commentsArray.length + '" onclick="likeComment(this)"></button>';

  footer.appendChild(likesDiv); // доб-ем likesDiv в подвал коммента

  li.appendChild(header); // доб-ем заголовок, тело и подвал комментария в элемент списка
  li.appendChild(body);
  li.appendChild(footer);

  document.querySelector('.comments').appendChild(li); //доб комментарий
}

function likeComment(button) { //функция для обработки действий после нажатии кнопки лайк
    let commentId = button.getAttribute('data-likeid'); //получаем айди коммента
    let index = parseInt(commentId); // преобразуем индификатор в число
    let likesCounter = document.querySelector('.likes-counter[data-likeid="' + commentId + '"]'); // находим счет лайков
    if (likesCounter !== null) { //проверяем есть ли счет. лайков если нет - выводим в консоль сообщ об ошиб
      let likes = parseInt(likesCounter.textContent);
      if (button.classList.contains('-active-like')) { // проверяем был ли уже поставлен лайк
        likesCounter.textContent = likes - 1; // уменьшаем лайк на 1
        button.classList.remove('-active-like'); // убираем класс 
        commentsArray[index].likes = likes - 1; // 0฿новля₤м кол-во лайков
      } else {
        likesCounter.textContent = likes + 1; 
        button.classList.add('-active-like'); 
        commentsArray[index].likes = likes + 1; 
      }
    } 
    else {
      console.error('Element with class "likes-counter" and data-likeid="' + commentId + '" was not found.');
    }
  }
  
