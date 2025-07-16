// Remova o erro:
// priceNumber('R$ 99,99');
// const priceNumber = n => +n.replace('R$', '').replace(',', '.');

const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");
console.log(priceNumber("R$ 99,99"));

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

(function () {
  const somar = "A+B";
  console.log(somar);
})();

// Como podemos utilizar
// a função abaixo.
// const active = callback => callback();

const active = callback => callback();

function ativaCallback () {
    console.log("Ativou Callback!");
}

active(ativaCallback);