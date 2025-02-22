// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragraphs = document.querySelectorAll("section:not([class]) p");

const totalCharacters = Array.from(paragraphs).reduce((acc, p) => {
  return (acc + p.textContent.length);

}, 0); 

const totalCharacters2 = Array.from(paragraphs).reduce((acc, p) => acc + p.textContent.length, 0); //outra maneira

const totalCharacters3 = Array.prototype.reduce.call(paragraphs, (acc, p) => acc + p.textContent.length, 0); //outra maneira

console.log("O total de caracteres é:", totalCharacters, "ou", totalCharacters2, "ou", totalCharacters3);



// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  elemento.classList.add(classe);
  classe ? elemento.classList.add(classe) : null; // outra maneira
  conteudo ? elemento.textContent = conteudo : null; // outra maneira
  elemento.textContent = conteudo;
  return elemento;
}

const newDiv = criarElemento('div', 'container', 'Olá, Mundo!');
document.body.appendChild(newDiv);
console.log(newDiv);


// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
function criarH1(conteudo) {
  return criarElemento("h1", "titulo", conteudo);
}

const h1Titulo = criarH1("Título da função h1");
document.body.appendChild(h1Titulo);
console.log(h1Titulo);  

// Outra Maneira:
const h1Titulo2 = criarElemento.bind(null, "h1", "titulo");
const cursoJS = h1Titulo2("Curso de JavaScript");
document.body.appendChild(cursoJS);
console.log(cursoJS);