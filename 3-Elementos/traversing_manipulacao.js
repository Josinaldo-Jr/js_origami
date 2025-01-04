// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const cloneMenu = menu.cloneNode(true);
const copy = document.querySelector(".copy");

copy.appendChild(cloneMenu);
// console.log(menu);

// Selecione o primeiro DT da dl de Faq
const primeiroDl = document.querySelector("dl");
const primeiroDt = primeiroDl.querySelector("dt");
// console.log(primeiroDt);

// Selecione o DD referente ao primeiro DT
const primeiroDd = primeiroDt.nextElementSibling;
// console.log(primeiroDd);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector(".faq");
const animais = document.querySelector(".animais");

faq.innerHTML = animais.innerHTML;

console.log(faq.innerHTML);
