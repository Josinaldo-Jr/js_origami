const cpfsList = document.querySelectorAll(".cpf li"); //buscou as li's dentro da ul cpf

const elementsInnerText = ([...elements]) => {
    return elements.map(element => element.innerText);
} //recebe os elementos como uma array, percorre cada elemento e retorno o texto interno

const limparCPF = (cpf) => {
    return cpf.replace(/\D/g, "");
} //recebe o elemento e remove tudo que não for número

const construirCPF = (cpf) => {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
} //recebe o elemento, percorre 3 em 3 números e adiciona um ponto(.), depois do 3 grupo, adicona um (-) e 2 números

const formatarCPFS = (cpfs) => {
    return cpfs.map(limparCPF).map(construirCPF);
} //recebe os elementos, usa a função de limpar e depois a função de construir cpf

const substituiCPFS = (cpfsElements) => {
    const cpfs = elementsInnerText(cpfsElements);
    const cpfsFormatados = formatarCPFS(cpfs);

    cpfsElements.forEach((element, index) => {
        element.innerText = cpfsFormatados[index];
    });
}

substituiCPFS(cpfsList);