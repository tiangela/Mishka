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

  // для модального окна
  var btnCart = document.querySelector(".button--js");
  var overlay = document.querySelector(".modal__overlay");

  btnCart.addEventListener("click", function (event) {
    event.preventDefault();
    overlay.classList.toggle("modal__overlay--show");
  });

  window.addEventListener("keydown", function (event) {
    if (event.keyCode == 27) {
      if (overlay.classList.contains("modal__overlay--show")) {
        overlay.classList.remove("modal__overlay--show"); }
    }
  });

  overlay.addEventListener("click", function (event) {
    if (event.target === this) {
      if (overlay.classList.contains("modal__overlay--show")) {
        overlay.classList.remove("modal__overlay--show");
      }
    }
  });
