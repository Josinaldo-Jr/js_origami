// Fetching a text file

const doc = fetch("./doc.txt");

doc
.then((responde) => {
  return responde.text();
})
.then((body) => {
  const conteudo = document.querySelector(".conteudo");
  conteudo.innerText = body;
});


// Fetching JSON data from an API
const CEP = fetch("https://viacep.com.br/ws/59063400/json/");

CEP
.then((responde) => {
  return responde.json();
})
.then((body) => {
  const conteudo2 = document.querySelector(".conteudo2");
  conteudo2.innerText = body.logradouro;
});