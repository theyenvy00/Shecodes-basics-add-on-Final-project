function changeDark() {
  let body = document.querySelector("body");
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
  } else {
    body.classList.add("dark-theme");
  }
}

let darkButton = document.querySelector(".dark-btn");
darkButton.addEventListener("click", changeDark);

function popupButton() {
  let actionButton = alert("Sign up to our streaming platform today");
}

let actionButton = document.querySelector(".cta");
actionButton.addEventListener("click", popupButton);
