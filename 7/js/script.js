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
