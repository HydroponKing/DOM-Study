let comments = [
  {
    name: "Глеб Фокин",
    date: new Date(2022, 1, 12, 12, 18),
    text: "Это будет первый комментарий на этой странице",
    likes: 3,
    isLiked: false
  },
  {
    name: "Варвара Н.",
    date: new Date(2022, 1, 13, 19, 22),
    text: "Мне нравится как оформлена эта страница! ❤",
    likes: 75,
    isLiked: true
  }
];


const renderComments = () => {
  const likeButtonClass = "like-button";
  document.querySelector(".comments").innerHTML = comments
    .map((comment, index) => {
      return `
      <li class="comment" data-index="${index}">
        <div class="comment-header">
          <div>${comment.name}</div>
          <div>${comment.date.toLocaleDateString()} ${comment.date.toLocaleTimeString()}</div>
        </div>
         <!--  <div class="comment-body">
               ${comment.text}                почему-то два раза коммент пишется с этой частью функции -->
          <div class="comment-text">
            ${comment.text}
          </div>
        </div>
        <div class="comment-footer">
          <div class="likes">
            <span class="likes-counter">${comment.likes}</span> <!--лайка-->
            <button data-index="${index}" class="${likeButtonClass} ${comment.isLiked ? "-active-like" : ""}"></button>
          </div>
        </div>
      </li>
    `;
    })
    .join("");
};

document.querySelector(".add-form-button").addEventListener("click", () => {
  const nameInput = document.querySelector(".add-form-name");
  const textArea = document.querySelector(".add-form-text");

  const name = DOMPurify.sanitize(nameInput.value.trim());
  const text = DOMPurify.sanitize(textArea.value.trim());

  if (!name) {
    nameInput.classList.add("empty-input");
  } else {
    nameInput.classList.remove("empty-input");
  }

  if (!text) {
    textArea.classList.add("empty-input");
  } else {
    textArea.classList.remove("empty-input");
  }

  if (name && text) {
    comments.push({
      name: name,
      date: new Date(),
      text: text,
      likes: 0,
      isLiked: false
    });

    nameInput.value = "";
    textArea.value = "";

    renderComments();
  } 
});

document.addEventListener("click", (event) => {
  const likeButtonClass = "like-button";
  if (event.target.classList.contains(likeButtonClass)) {
    const index = event.target.dataset.index;
    const comment = comments[index];

    if (!comment.isLiked) {
      comment.likes++;
      comment.isLiked = true;
      event.target.classList.add("-active-like");
    } else {
      comment.likes--;
      comment.isLiked = false;
      event.target.classList.remove("-active-like");
    }

    const counter = event.target.parentElement.querySelector(".likes-counter");
    counter.textContent = comment.likes;
  }
});



document.addEventListener("click", (event) => {
  const commentClass = "comment";
  if (event.target.classList.contains(commentClass) && !event.target.classList.contains("comment-text")) {
    const index = event.target.dataset.index;
    const selectedComment = comments[index];
    const addFormText = document.querySelector(".add-form-text");
    const newComment = `${selectedComment.name}: ${selectedComment.text}`; 

    addFormText.value = newComment; 
    addFormText.focus();
  }
});


renderComments();