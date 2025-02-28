// Crie uma função que verifique
// corretamente o tipo de dado
function verificarDado (dado) {
    return Object.prototype.toString.call(dado);
}

const arrayObjeto = ["objeto 1", "objeto2", 3];
const stringObjeto = "Aqui tem uma string";

console.log(verificarDado(arrayObjeto));
console.log(verificarDado(stringObjeto));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável
const quadrado = {};
Object.defineProperties(quadrado, {
    lados: {
        value: 5,
        enumerable: true,
    }
});

quadrado.lados = 10;
console.log(quadrado);



// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
    width: 800,
    height: 600,
    background: '#333'
  }

Object.freeze(configuracao);  

delete configuracao.width;
console.log(configuracao);  

  
  // Liste o nome de todas
  // as propriedades do
  // protótipo de String e Array

  console.log(Object.getOwnPropertyNames(String.prototype));
  console.log(Object.getOwnPropertyNames(Array.prototype));
  