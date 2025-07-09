// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById("cep");
const formCep = document.getElementById("cep-form");
const resultadoCep = document.getElementById("resultado");

formCep.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const cep = inputCep.value.replace(/\D/g, "");
  if (cep.length !== 8) {
    resultadoCep.innerText = "CEP inválido. Digite 8 números.";
    return;
  }
  buscaCep(cep);
}

async function buscaCep(cep) {
  await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((body) => {
      if (body.erro) {
        resultadoCep.innerText = "CEP não encontrado.";
        return;
      }
      resultadoCep.innerText = `
CEP: ${body.cep}
Rua: ${body.logradouro}
Bairro: ${body.bairro}
Cidade: ${body.localidade}
Estado: ${body.uf}
          `;
    });    
}


// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s
const valorElement = document.getElementById("valor");

function fetchBitcoin() {
  fetch("https://blockchain.info/ticker")
  .then(response => response.json())
  .then(precoBRL => {
    valorElement.innerText = `R$ ${precoBRL.BRL.buy.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  }) 
  .catch (() => {
    valorElement.innerText = "Erro ao buscar valor.";
  });
}

fetchBitcoin();
setInterval(fetchBitcoin, 1000 * 30);

// async function fetchBitcoin() {  
//   try {
//     const resBlockChain = await fetch("https://blockchain.info/ticker");
//     const dataBlockChain = await resBlockChain.json();
//     const precoBRL = dataBlockChain.BRL.buy;

//     valorElement.innerText = `R$ ${precoBRL.toLocaleString("pt-BR", {
//       minimumFractionDigits: 2,
//       maximumFractionDigits: 2,
//     })}`;
//   } catch (error) {
//     valorElement.innerText = "Erro ao buscar valor.";
//   }
// }

// fetchBitcoin();
// setInterval(fetchBitcoin, 1000 * 30);


// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const piada = document.getElementById("piada");
const botao = document.getElementById("proxima");

function buscarPiada() {
  fetch("https://api.chucknorris.io/jokes/random")
  .then(r => r.json())
  .then(dataPiada => {
    piada.innerText = dataPiada.value;
  })
  .catch(() => {
    piada.innerText = "Não foi possível carregar a piada.";
  });
}

botao.addEventListener("click", buscarPiada);

// async function buscarPiada() {
//   try {
//     const resPiada = await fetch("https://api.chucknorris.io/jokes/random");
//     const dataPiada = await resPiada.json();
//     piada.innerText = dataPiada.value;
//     console.log(resPiada);
//   } catch (error) {
//     piada.innerText = "Não foi possível carregar a piada.";
//   }
// }

// botao.addEventListener("click", buscarPiada);

//-------------------------Prática-------------------------
// Fetching a text file

// const doc = fetch("./doc.txt");

// doc
// .then((responde) => {
//   return responde.text();
// })
// .then((body) => {
//   const conteudo = document.querySelector(".conteudo");
//   conteudo.innerText = body;
// });

// // Fetching JSON data from an API
// const CEP = fetch("https://viacep.com.br/ws/59063400/json/");

// CEP
// .then((responde) => {
//   return responde.json();
// })
// .then((body) => {
//   const conteudo2 = document.querySelector(".conteudo2");
//   conteudo2.innerText = body.logradouro;
//   console.log(body);
// });
//----------------------------------------------------------------------
