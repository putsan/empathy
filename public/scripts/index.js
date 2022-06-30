"use strict";

const toggleBurgerMenu = () => {
  const TARGET_BTN_CLASS_NAME = "navigation__menu-btn";
  const MENU_LINK_CLASS_NAME = "navigation__link";
  const ACTIVE_MENU_CLASS_NAME = "navigation__menu--active";

  const navMenu = document.querySelector(".navigation__menu");
  const navContainer = document.querySelector(".navigation");

  const toggleMenu = () => navMenu.classList.toggle(ACTIVE_MENU_CLASS_NAME);
  const hideMenu = () =>
  navMenu.classList.contains(ACTIVE_MENU_CLASS_NAME) && toggleMenu();

  navContainer.addEventListener("click", ({ target }) => {
    const isTargetBtn = target.className === TARGET_BTN_CLASS_NAME;
    const isTargetLink = target.className === MENU_LINK_CLASS_NAME;

    if (isTargetBtn || isTargetLink) toggleMenu();
  });

  navContainer.addEventListener("focusout", () => hideMenu());
  window.onscroll = () => hideMenu();
};

toggleBurgerMenu();

function onClickOutside(element, func) {
  const outsideClickListener = (event) => {
    if (!element.contains(event.target)) {
    // if (event.target.closest(selector) === null) {
      // or use: event.target.closest(selector) === null
      func();
      removeClickListener();
    }
  };

  const removeClickListener = () => {
    document.removeEventListener("click", outsideClickListener);
  };

  document.addEventListener("click", outsideClickListener);
  return removeClickListener;
}

// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//   // some code..
//  }
