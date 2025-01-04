// Retorne o url da página atual utilizando o objeto window
const urlAtual = window.location.href;
console.log(`A URL atual é:  ${urlAtual}`);

// Seleciona o primeiro elemento da página que
// possua a classe ativo
const selecaoClass = document.querySelector(".ativo");
console.log(`O primeiro elemento da página que possua a classe ativo é:  ${selecaoClass}`);

// Retorne a linguagem do navegador
const liguagemNavegador = navigator.language;
console.log(`A linguagem do navegador é:  ${liguagemNavegador}`);

// Retorne a largura da janela 
const larguraJanela = window.innerWidth;
console.log(`A largura da janela é:  ${larguraJanela}`);
