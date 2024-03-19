function addComment() {

        // debug (srtoka ostaetsa krasnoi posle vvoda pustogo inputa)
    document.getElementById('nameInput').style.border = "";
    document.getElementById('commentInput').style.border = "";

    let userName = document.getElementById('nameInput').value;
    let userComment = document.getElementById('commentInput').value;

    let TrimuserName = nameInput.value.trim();
    let TrimuserComment = commentInput.value.trim();
    if (TrimuserName.length > 0 && TrimuserComment.length > 0) {

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

    //polu4aem daty
    function getCurrentDate() {
        let currentDate = new Date();
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
        let hours = currentDate.getHours();
        let minutes = currentDate.getMinutes();

        return `${day}.${month}.${year} ${hours}:${minutes}`;
    }

    // (debug 2) 4istim 4istim
    document.getElementById('nameInput').value = ""; 
    document.getElementById('commentInput').value = "";
}
