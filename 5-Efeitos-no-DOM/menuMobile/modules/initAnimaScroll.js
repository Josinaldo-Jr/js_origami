/*------------------Animação ao Scroll------------------*/

export default function initAnimaScroll() {
  const sections = document.querySelectorAll("[data-scroll]");
  const windowHalf = window.innerHeight * 0.6;

  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = sectionTop - windowHalf < 0;

        if (sectionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}