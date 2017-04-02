  var navMain = document.querySelector(".menu");
  var navToggle = document.querySelector(".menu__toggle");

  navMain.classList.remove("menu--nojs");

  navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("menu--closed")) {
      navMain.classList.remove("menu--closed");
      navMain.classList.add("menu--open");
    } else {
      navMain.classList.add("menu--closed");
      navMain.classList.remove("menu--open");
    }
  });

var link = document.querySelector(".button--product");
var popup = document.querySelector(".modal__form");

var shadow = document.querySelector(".modal__overlay");
var input = popup.querySelector("[type=radio]");


// Открытие окна
link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal");
    popup.classList.add("modal__show");
  /*  shadow.classList.add("modal__overlay-shadow");*/
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal__content-show")) {
      popup.classList.remove("modal__content-show");
    }
  }
});

shadow.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal__content-show");
});
