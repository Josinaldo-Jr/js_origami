const promessa = new Promise((resolve, reject) => {
    const sucesso = true;

    if (sucesso) {
        resolve('Deu certo!');
    } else {
        reject(Error('Deu ruim!'));
    }
});

promessa.then((resultado) => {
    console.log(resultado);
}).catch((erro) => {
    console.error(erro);
}).finally(() => {
    console.log('Operação finalizada.');
});

// ------------------------- //

const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Login Efetuado');
  }, 1000);
});
const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados Carregados');
  }, 1500);
});

const tudoCarregado = Promise.all([login, dados]);

tudoCarregado.then(respostas => {
  console.log(respostas); // Array com ambas respostas
});

// ------------------------- //

const login2 = new Promise(resolve => {
  setTimeout(() => {
    resolve('Login 2 Efetuado');
  }, 1000);
});
const dados2 = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados 2 Carregados');
  }, 1500);
});

const carregouPrimeiro = Promise.race([login2, dados2]);

carregouPrimeiro.then(resposta2 => {
  console.log(resposta2); // Login 2 Efetuado
});
