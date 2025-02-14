// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll(".curso"); //busca por class .curso

const arrayCursos = Array.from(cursos).map(curso => ({ //converte em array e pecorre cada elemento curso, tranformando em um objeto e retorna em uma nova array
  titulo: curso.querySelector("h1").textContent, //cria a chave com o valor da busca por h1
  descricao: curso.querySelector("p").textContent,//cria a chave com o valor da busca por p
  aulas: parseInt(curso.querySelector(".aulas").textContent),//converte e cria a chave  com o valor da busca por .aulas
  horas: parseInt(curso.querySelector(".horas").textContent)  //converte e cria a chave  com o valor da busca por .horas
}));

const outraArrayCursos = Array.from(cursos).map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aulas = curso.querySelector(".aulas").innerText;
  const horas = curso.querySelector(".horas").innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas
  }
})



console.log(arrayCursos, outraArrayCursos);




// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorQue100 = numeros.filter((numero) => { return numero > 100});
const outroMaiorQue100 = numeros.filter(numero =>  numero > 100);

console.log(maiorQue100, outroMaiorQue100);


// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const temBaixo = instrumentos.some(instrumento => instrumento === "Baixo");

console.log(temBaixo);


// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]


const totalCompras = compras.reduce((acumulador, produto) => {
  const precoLimpo = parseFloat(produto.preco.replace(/[^0-9,]/g, '').replace(',', '.'));
  return acumulador + precoLimpo; 

}, 0);

console.log(`Total: R$ ${totalCompras}`);


