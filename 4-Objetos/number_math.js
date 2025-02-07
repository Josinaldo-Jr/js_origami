// Retorne um número aleatório
// entre 1050 e 2000

const numeroAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1)) + 1050;
console.log(numeroAleatorio);


// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';

const arrayNumermos = numeros.split(", ").map(Number);
const maiorNumero = Math.max(...arrayNumermos);

console.log(maiorNumero);


// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

                     function limparPreco(preco) {
                      return Number(preco.replace(/[^0-9,]/g, '').replace(',', '.')).toFixed(2);
                    }
                    
                    function somarPrecos(lista) {
                      const precosLimpos = lista.map(preco => parseFloat(limparPreco(preco)));
                      const total = precosLimpos.reduce((acc, preco) => acc + preco, 0);
                      
                      console.log(`Preços limpos: ${precosLimpos.map(p => p.toFixed(2)).join(', ')}`);
                      console.log(`Total: R$ ${total.toFixed(2)}`);
                    
                      return total.toFixed(2);
                    }
                    
                   
                    
                    somarPrecos(listaPrecos);
                    
