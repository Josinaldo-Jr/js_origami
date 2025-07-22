// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const ul = document.createElement("ul");
document.body.appendChild(ul);

const itens = ["Item 1", "Item 2", "Item 3", "Item 4"];

for(const texto of itens) {
  const li = document.createElement("li");
  li.textContent = texto;
  li.classList.add("lista-item");
  ul.appendChild(li);
}


// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
for(const item in window) {
  console.log(item);
}
