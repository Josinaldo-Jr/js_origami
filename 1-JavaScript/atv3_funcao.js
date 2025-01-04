//ATIVIDADE 05 - Funções

// Crie uma função para verificar se um valor é Truthy
function verifica (numero) {
    return numero > 0;
}

console.log (verifica(5));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
function perimetroQuadrado (lado) {  
  return lado * 4;  
}

console.log(perimetroQuadrado(8));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
  
  return `${nome} ${sobrenome}`;
}

console.log(nomeCompleto("Josinaldo", "Júnior"));

// Crie uma função que verifica se um número é par
function verificaPar (numero) {
  if (numero % 2 === 0) {
    return ("Esse número é Par!")
  }else {
    return ("Esse número NÃO é Par!")
  }
  
}

console.log(verificaPar(30));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado (dado) {
  return typeof(dado);
}

console.log(tipoDado("3"));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener("scroll", function () {console.log( "Meu nome é...")});

// Corrija o erro abaixo
var totalPaises = 193;
function precisoVisitar(paisesVisitados) {  
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}


function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(`
    ${precisoVisitar(20)}.
    ${jaVisitei(20)}.`);







// --------------------------------------------------------------

