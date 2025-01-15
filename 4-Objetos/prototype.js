// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa (nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

}

Pessoa.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
}

const pessoa1 = new Pessoa("joão", "Bezerra", 38);
const pessoa2 = new Pessoa("Maria", "Oliveira", 29);

// console.log(`${pessoa1.nome} ${pessoa1.sobrenome}`)
// console.log(pessoa2.nome + " " + pessoa2.sobrenome);
console.log(pessoa1.nomeCompleto());
console.log(pessoa2.nomeCompleto());


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));



// // Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
li.click;
li.innerText;
li.value;
li.hidden;
li.offsetLeft;
li.click();

console.log(li.constructor.name);
console.log(li.click.constructor.name);
console.log(li.innerText.constructor.name);
console.log(li.value.constructor.name);
console.log(li.hidden.constructor.name);
console.log(li.offsetLeft.constructor.name);
// console.log(li.click().constructor.name); // undefined




// // Qual o construtor do dado abaixo:
// li.hidden.constructor.name;

const resposta = li.hidden.constructor.name;
console.log(resposta.constructor.name);

// Resposta: String
