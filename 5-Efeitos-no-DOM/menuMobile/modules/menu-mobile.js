import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  function openMenu(event) {
    if (menuList.classList.contains("active")) {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    } else {
      menuList.classList.add("active");
      menuButton.classList.toggle("active");

      // event.stopPropagation();
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }
  }

  eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
}
