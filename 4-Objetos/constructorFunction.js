// Transforme o objeto abaixo em uma Constructor Function
function Pessoa (nomePessoa, idadePessoa) {
    this.nome = nomePessoa;
    this.idade = idadePessoa;
    this.andar = function() {
      console.log(this.nome + ' andou');
    }
  }
  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos
  const joao = new Pessoa("João", 20);
//   joao.nome = "João";
//   joao.idade = 20;

  const maria = new Pessoa();
  maria.nome = "Maria";
  maria.idade = 25;

  const bruno = new Pessoa();
  bruno.nome = "Bruno";
  bruno.idade = 15;
  
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
 

  
  