function generateUniqueId() {
    return Date.now() + Math.random().toString(36).substr(2, 9);
}

function addComment() {
    let userName = document.getElementById('nameInput').value.trim();
    let userComment = document.getElementById('commentInput').value.trim();

    let TrimuserName = nameInput.value.trim();
    let TrimuserComment = commentInput.value.trim();

    if (userName.length > 0 && userComment.length > 0) {
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
                    <span class="likes-counter" data-likeid="${generateUniqueId()}">0</span>
                    <button class="like-button" data-likeid="${generateUniqueId()}"></button>
                </div>
            </div>
        `;

        let commentsList = document.querySelector(".comments");
        commentsList.appendChild(newComment);

        // Инициализация кнопок лайков только для нового комментария
        initializeLikeButton(newComment);
    } else {
               // krasim pustoi input
               if (userName.length === 0) {
                nameInput.style.border = "2px solid red";
            } else {
                nameInput.style.border = "";
            }
            if (TrimuserComment.length === 0) {
                commentInput.style.border = "2px solid red";
            } else {
                commentInput.style.border = "";
            }
    }

    // Получение текущей даты и времени
    function getCurrentDate() {
        let currentDate = new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();

        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }
    document.getElementById('nameInput').value = "";
    document.getElementById('commentInput').value = "";

}

function initializeLikeButton(comment) {
    const likeButton = comment.querySelector('.like-button');
    const likeCount = comment.querySelector('.likes-counter');

    likeButton.addEventListener('click', () => {
        const likeId = likeButton.getAttribute('data-likeid');

        if (!likeButton.classList.contains('-active-like')) {
            likeButton.classList.add('-active-like');
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        } else {
            likeButton.classList.remove('-active-like');
            likeCount.textContent = parseInt(likeCount.textContent) - 1;
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const existingComments = document.querySelectorAll('.comment');
    existingComments.forEach(comment => {
        initializeLikeButton(comment);
    });



});
