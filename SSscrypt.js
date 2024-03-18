function addComment(){
    let userName = document.getElementById('nameInput').value;
    let userComment = document.getElementById('commentInput').value;

    let newComment = document.createElement('li');
    newComment.className = "comment";
    newComment.innerHTML = `
    <div class="comment-header">
        <div>${userName}</div>
        <div>${getCurrentDate()}</div>
    </div>
    <div class="comment-body">
        <div class="comment-text">${userComment}</div>
    </div>
    <div class="comment-footer">
        <div class="likes">
            <span class="likes-counter">0</span>
            <button class="like-button"></button>
        </div>
    </div>
`;

let commentsList = document.querySelector(".comments");
commentsList.appendChild(newComment);

// Функция для получения текущей даты
function getCurrentDate() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

}