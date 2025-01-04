// Eventos:

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

/*const linkInterno = document.querySelectorAll('a[href^="#"]');

function addAtivo(event) {
  event.preventDefault();
  linkInterno.forEach((linkAtivo) => {
    linkAtivo.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
  console.log(linkInterno);
}

linkInterno.forEach((link) => {
  link.addEventListener("click", addAtivo);
});*/



// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

/*const elementos = document.querySelectorAll("body *");

function exibeElemento(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log("O elemento clicado foi: "this);
}

elementos.forEach((elemento) => {
  elemento.addEventListener("click", exibeElemento);
})*/



// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

/*const elementos = document.querySelectorAll("body *");

function exibeElemento(event) {
  event.preventDefault();
  event.stopPropagation();
  console.log("O elemento deletado foi: ", this);
  this.remove();
}

elementos.forEach((elemento) => {
  elemento.addEventListener("click", exibeElemento);
})*/



// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

// Adiciona um evento ao documento para capturar a tecla pressionada
// document.addEventListener('keydown', function (event) {
//   // Verifica se a tecla pressionada é a letra 't' (case insensitive)

//   if (event.key.toLowerCase() === 't') {
//     // Seleciona o elemento <body>
//     const elementos = document.querySelectorAll("body, p, h1, h2, li, a");

//     // Obtém o tamanho atual da fonte
//     elementos.forEach((elemento) => {


//       const fontSizeAtual = window.getComputedStyle(elemento).fontSize;

//     // Converte o tamanho da fonte para um número
//     const tamanhoAtual = parseFloat(fontSizeAtual);

//     // Aumenta o tamanho da fonte em 2px
//     const novoTamanho = tamanhoAtual + 2;

//     // Aplica o novo tamanho ao <body>
//     elemento.style.fontSize = `${novoTamanho}px`;
//     });
    
//   }
// });



/*--------------------------------------------------------------------------*/
// Seleção de Elementos:
/*
// Retorne no console todas as imagens do site
const imagemSite = document.getElementsByTagName("img");
console.log(imagemSite);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagemEspecifica = document.querySelectorAll("[src^='img/imagem']");
console.log(imagemEspecifica);

// Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll("[href^='#']");
console.log(linkInterno);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);


// Selecione o último p do site
const ultimoP = document.querySelector("footer p:last-child");
console.log(ultimoP);

const outroUltimoP = document.querySelectorAll("p");
console.log(outroUltimoP[outroUltimoP.length - 1]);



--------------------------------------------------------------------------*/
/*
// forEach e Arrow Function:

// Mostre no console cada parágrado do site
const paragrafoSite = document.querySelectorAll("p");

paragrafoSite.forEach((paragrafo, index) => {
    console.log(index, paragrafo);
});


// Mostre o texto dos parágrafos no console
paragrafoSite.forEach((paragrafo, index) => {
    console.log(index, paragrafo.innerText);
});


// Como corrigir os erros abaixo:
/*const imgs = document.querySelectorAll('img');

imgs.forEach(item, index => {
  console.log(item, index);
});

let i = 0;
imgs.forEach( => {
  console.log(i++);
});

imgs.forEach(() => i++);

// const imgs = document.querySelectorAll('img');

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach( ()=> {
//   console.log(i++);
// });

// imgs.forEach(() => i++);



--------------------------------------------------------------------------*/
// Classes e Atributos:

// Adicione a classe ativo a todos os itens do menu
// const menuSite = document.querySelectorAll(".menu a");
// menuSite.forEach((item) => {
//     item.classList.add("ativo");
// });

// console.log(menuSite);

// // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
// menuSite.forEach((item, index) => {
//     if (index > 0) {
//         item.classList.remove("ativo");
//     }    
// }); 
// /*Outra opção:
// menuSite.forEach((item, index) => {
//     item.classList.remove("ativo");
        
// });

// menuSite[0].classList.add("ativo");

// */

// console.log(menuSite);


// // Verifique se as imagens possuem o atributo alt
// const imagensSite = document.querySelectorAll("img");
// imagensSite.forEach((imagem, index) => {
//     console.log(index, imagem.hasAttribute("alt")); 

// })

// // Modifique o href do link externo no menu
// const linkExterno = document.querySelector("a[href^='https']")
// linkExterno.setAttribute("href", "https://www.youtube.com/");

// console.log(linkExterno);
/*--------------------------------------------------------------------------*/



// // Dimensões e Distâncias 1:

// // Verifique a distância da primeira imagem
// // em relação ao topo da página
// const primeiraImagem = document.querySelector("img");
// console.log(`A distância da primeira imagem em relação ao topo da página é: ${primeiraImagem.offsetTop}`);

// // Retorne a soma da largura de todas as imagens
// function somaImagens () {
// const todasImagens = document.querySelectorAll("img");
// let larguraImagens = 0;

// todasImagens.forEach((imagem) => {
//   larguraImagens += imagem.width; 
  
// });

// console.log(larguraImagens);
// }

// window.onload = function() {
//   somaImagens();
// }





// // Verifique se os links da página possuem
// // o mínimo recomendado para telas utilizadas
// // com o dedo. (48px/48px de acordo com o google)
// const linksPagina = document.querySelectorAll("a");

// linksPagina.forEach((imagem, index) => {
//   if ((imagem.width >= 48) && (imagem.height >= 48)) {
//     console.log(`Link de ${index} possue o mínimo recomendado para telas utilizadas com o dedo!`);
//   } else {
//     console.log(`Link de ${index} NÃO possue o mínimo recomendado para telas utilizadas com o dedo!`);
//   }  
// });

// // Se o browser for menor que 720px,
// // adicione a classe menu-mobile ao menu

// const verificaTela = window.matchMedia("(max-width: 720px)").matches;


// console.log(verificaTela);

// if (verificaTela) {
//   console.log("Tela menor que 720px");
//   const menuSite = document.querySelector(".menu")
//   menuSite.classList.add("menu-mobile");
//   console.log(menuSite);
// } else {
//   console.log("Tela maior que 720px"); 
 
// }


