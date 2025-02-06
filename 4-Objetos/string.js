// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

let totalTaxa = 0;
let totalRecebimento = 0;

transacoes.forEach(transacao => {
  const valorNumerico = parseFloat(transacao.valor.replace("R$", ""));

  if (transacao.descricao.includes("Taxa")) {
    totalTaxa += valorNumerico;
  } else {
    totalRecebimento += valorNumerico;
  }  
});

console.log(`Total de Taxas: ${totalTaxa}.`)
console.log(`Total de Recebimentos: ${totalRecebimento}.`)

  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
  const arrayItens = transportes.split(";");

  console.log(arrayItens);


  
  // Substitua todos os span's por a's
 let html = ` <ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
              </ul>`;
// html = html.replace(/<span>/g, '<a>').replace(/<\/span>/g, '</a>');
html = html.split("span").join("a");
console.log(html);             
  
  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
  /*const ultimoCaracter = frase.slice(13, 14);*/
  /*const ultimoCaracter = frase.slice(-1);*/
  const ultimoCaracter = frase.charAt(frase.length-1);

  console.log(ultimoCaracter);
  console.log(frase.slice(-1)) //Outra maneira
  
  // Retorne o total de taxas
  const transacoes_2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  // let totalTaxa_2 = 0;
  // const textoTaxa = transacoes_2.forEach(transacao => {
  //   let resultado = transacao.toLowerCase().includes("taxa");
  //  if (resultado === true) {
  //   totalTaxa_2++;
  //  }

  // });

  // const totalTaxas = transacoes_2.filter(transacao => 
  //     transacao.toLowerCase().includes('taxa')
  // ).length;

let totalTaxas = 0

  transacoes_2.forEach((item) => {
    item = item.toLowerCase().trim().slice(0,4);

    if (item === "taxa") {
      totalTaxas++;
    }

  });
  
  console.log(totalTaxas);  