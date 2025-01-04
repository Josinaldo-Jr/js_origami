//ATIVIDADE 10 - Escopo

// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
  }
  console.log(var, marca, portas);
  //------- Resposta: A variavel esá sendo chamada de maneira errada "var", o correto seria "cor". As variaveis "marca" e "portas" estão dentro de um bloco e não são globais.
  
  
  
  // Como corrigir o erro abaixo?
  function somarDois(x) {
    const dois = 2;
    return x + dois;
  }
  function dividirDois(x) {
    return x / dois;
  }
  somarDois(4);
  dividirDois(6);
  /*------- Resposta: 
  
  const dois = 2;
  
  function somarDois(x) {
    return x + dois;
  }
  function dividirDois(x) {
    return x / dois;
  }
  console.log(somarDois(4));
  console.log(dividirDois(6));
  */
  
  
  
  // O que fazer para total retornar 500?
  const numero = 50;
  
  for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
  }
  
  const total = 10 * numero;
  console.log(total);

// --------------------------------------------------------------
