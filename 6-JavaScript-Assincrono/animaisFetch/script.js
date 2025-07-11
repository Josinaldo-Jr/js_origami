// --------------------------------
// Modulos:

import initTabNav from "./modules/initTabNav.js";
import initAccordion from "./modules/initAccordion.js";
import initScrollSuave from "./modules/initScrollSuave.js";
import initAnimaScroll from "./modules/initAnimaScroll.js";
import initModal from "./modules/initModal.js";
import initTooltip from "./modules/initTooltip.js";
import initDropDownMenu from "./modules/initDropDownMenu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

initTabNav();
initAccordion();
initScrollSuave();
initAnimaScroll();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();



// --------------------------------

// Adicione um atributo data-anime="show-down" e
// data-anime="show-right" a todos as section's
// com descricão dos animais.

// Utilizando estes atributos, adicione a classe
// show-down ou show-right a sua respectiva section
// assim que a mesma aparecer na tela (animacao tab)
const sectionsShowDown = document.querySelectorAll('[data-anime="show-down"]');
const sectionsShowRight = document.querySelectorAll('[data-anime="show-right"]');

sectionsShowDown.forEach(section => section.classList.add("show-down"));
sectionsShowRight.forEach(section => section.classList.add("show-right"));



// No CSS faça com que show-down anime de cima para baixo
// e show-right continue com a mesma animação da esquerda
// para a direita

// Substitua todas as classes js- por data atributes.

// --------------------------------