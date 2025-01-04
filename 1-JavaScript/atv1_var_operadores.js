//ATIVIDADE 01 - VARIAVEIS

// Declarar uma variável com o seu nome
var nome = "Júnior";

// Declarar uma variável com a sua idade
var idade = 34;

// Declarar uma variável com a sua comida
// favorita e não atribuir valor
var comida;

// Atribuir valor a sua comida favorita
comida = "Pizza";

// Declarar 5 variáveis diferentes sem valores
var $teste, _teste, Teste, testeTeste, tEstE;

console.log(nome, idade, comida, $teste, _teste, Teste, testeTeste, tEstE);


// --------------------------------------------------------------


// ATIVIDADE 02 - STRING

// Declare uma variável contendo uma string
var nome2 = "João";

// Declare uma variável contendo um número dentro de uma string
var numero = "18";

// Declare uma variável com a sua idade
var idade2 = 34;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var nome3 = "Josinaldo ", 
    sobreNome3 = "Euzebio",
    nomeCompleto = `${nome3} ${sobreNome3}`;

// Coloque a seguinte frase em uma variável: It's time
var frase = "It's time";

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome3, nome2, nome3, sobreNome3, nomeCompleto, frase);


// --------------------------------------------------------------


// ATIVIDADE 03 - Operadores


// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
// 35

// Crie duas expressões que retornem NaN
var expressao1 = 10 / "texto",
    expressao2 = "texto" * 10;

// Somar a string '200' com o número 50 e retornar 250
var soma = +"200" + 50;

// Incremente o número 5 e retorne o seu valor incrementado
var incremento = 5;
console.log(++incremento);

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '40kg'


console.log(peso);


// --------------------------------------------------------------



