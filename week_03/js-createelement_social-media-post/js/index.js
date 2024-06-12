console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const newPostContainer = document.createElement("article");
const newPostText = document.createElement("p");
const newPostFooter = document.createElement("footer");
const newPostSpan = document.createElement("span");
const newPostButton = document.createElement("button");

newPostContainer.classList.add("post");
newPostText.classList.add("post__content");
newPostFooter.classList.add("post__footer");
newPostSpan.classList.add("post__username");
newPostButton.classList.add("post__button");

newPostText.textContent = "Lorem fewaqfweqfewqfewqfewqfe NEW";
newPostButton.textContent = "♥ NewLike";
newPostSpan.textContent = "Dracula";

newPostFooter.append(newPostSpan, newPostButton);
newPostContainer.append(newPostText, newPostFooter);

newPostButton.addEventListener("click", handleLikeButtonClick);

document.body.append(newPostContainer);