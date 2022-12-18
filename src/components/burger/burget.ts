window.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector(".burger");
  const navMenu = document.querySelector(".nav__list");
  const navLink = document.querySelectorAll(".nav__item");
  const header = document.querySelector(".header");

  const menuState = () => {
    burgerMenu?.classList.toggle("burger_state_active");
    navMenu?.classList.toggle("nav__list_state_active");
    if(!header?.classList.contains("header_state_active")) {
        setTimeout(() => {
            header?.classList.toggle("header_state_active");
        }, 500)
    } else {
        header?.classList.toggle("header_state_active");
    }
  }

  const closeMenu = () => {
    if(burgerMenu?.classList.contains("burger_state_active")
      && navMenu?.classList.contains("nav__list_state_active")
      && header?.classList.contains("header_state_active")
    ) {
      burgerMenu?.classList.remove("burger_state_active");
      navMenu?.classList.remove("nav__list_state_active");
      header?.classList.remove("header_state_active");
    }
  }

  burgerMenu?.addEventListener("click", (e) => {
    e.preventDefault();
    return menuState();
  })

  navLink.forEach((el) => {
    el.addEventListener("click", closeMenu);
  })
})