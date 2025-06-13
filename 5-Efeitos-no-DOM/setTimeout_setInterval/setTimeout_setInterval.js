export default function setTimeout_setInterval() {
  // Mude a cor da tela para azul e depois para vermelho a cada 2s.

  const menuMultColor = document.querySelector(".menu");

  let isBlue = true;

  setInterval(() => {
    if (isBlue) {
      menuMultColor.style.backgroundColor = "#FB58";
    } else {
      menuMultColor.style.backgroundColor = "#FB54";
    }
    isBlue = !isBlue; // Toggle the color
  }, 2000);

  // Crie um cronometro utilizando o setInterval. Deve ser possível
  // iniciar, pausar e resetar (duplo clique no pausar).

  const display = document.getElementById("display");
  const startBtn = document.getElementById("startBtn");
  const pauseBtn = document.getElementById("pauseBtn");

  startBtn.addEventListener("click", iniciarTempo);
  pauseBtn.addEventListener("click", pausarTempo);
  pauseBtn.addEventListener("dblclick", resetarTempo);

  let i = 0;
  let timer;

  function iniciarTempo() {
    timer = setInterval(() => {
      display.innerText = i++;
    }, 100);
    startBtn.setAttribute("disabled", "");
  }

  function pausarTempo() {
    clearInterval(timer);
    startBtn.removeAttribute("disabled");
  }

  function resetarTempo() {
    display.innerText = "00:00:00";
    i = 0;
  }
}
