export default function initTabNav() {
  const tabMenu = document.querySelectorAll("[data-tabmenu] li");
  const tabContent = document.querySelectorAll("[data-anime]");

  const activeClass = "ativo";

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove(activeClass);
      });

      tabContent[index].classList.add(activeClass);
    }

    tabMenu.forEach((menu, index) => {
      menu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}