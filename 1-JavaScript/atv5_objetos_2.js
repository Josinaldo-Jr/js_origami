//ATIVIDADE 07 - Tudo é Objeto!

// nomeie 3 propriedades ou métodos de strings
var nome = "Júnior";
console.log(nome.length, nome.toUpperCase(), nome.slice(1, 5));

// nomeie 5 propriedades ou métodos de elementos do DOM
var botao = document.querySelector(".btn");

Respostas: botao.addEventListener; 
botao.innerHTML;
botao.innerText;
botao.id;
botao.classList;


// Praticando:
// botao.addEventListener("click", function () {
//   if (botao.innerText === "Clique aqui") {
//     console.log(nome);
//     console.log(botao.classList, botao.innerText);
//     botao.classList.add("ativo");
//     botao.innerText = "Botão";
//     console.log(botao.classList, botao.innerText);
//   } else {
//     console.log(nome);
//     console.log(botao.classList, botao.innerText);
//     botao.classList.remove("ativo");
//     botao.innerText = "Clique aqui";
//     console.log(botao.classList, botao.innerText);
//   }
// });




// busque na web um objeto (método) capaz de interagir com o clipboard,
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
var bton = document.querySelector(".botton");
var textoCopiado = "Tudo certo! Texto copiado para o clipboard!";

bton.addEventListener("click", function(){
  console.log(navigator.clipboard.writeText(textoCopiado));
})


// --------------------------------------------------------------
