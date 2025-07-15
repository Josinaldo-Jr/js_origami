import Countdown from "./countdown.js";

const tempoParaONatal = new Countdown("24 December 2025 23:59 GMT-0300");
const tempoParaOAnoNovo = new Countdown("31 December 2025 23:59 GMT-0300");
const paragrafoNatal = document.getElementById("pNatal");
const paragrafoAnoNovo = document.getElementById("pAnoNovo");

function atualizaContagem() {
    const tempoNatal = tempoParaONatal.total;
    const tempoAnoNovo = tempoParaOAnoNovo.total;

    paragrafoNatal.innerText = `Faltam ${tempoNatal.days} dias, ${tempoNatal.hours} horas, ${tempoNatal.minutes} minutos e ${tempoNatal.seconds} segundos para o Natal. 🎄`;
     paragrafoAnoNovo.innerText = `Faltam ${tempoAnoNovo.days} dias, ${tempoAnoNovo.hours} horas, ${tempoAnoNovo.minutes} minutos e ${tempoAnoNovo.seconds} segundos para o Ano Novo. 🎆`;  
}

setInterval(atualizaContagem, 1000);
atualizaContagem();