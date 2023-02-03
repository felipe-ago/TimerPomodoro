let acao = document.getElementById("acao");
let pausa = document.getElementById("pausa");
let sessoes = document.getElementById("sessoes");
let secundos;

var sino = new Audio("./audio/sino.mp3");
var volta = new Audio("./audio/volta.mp3");
var final = new Audio("./audio/final.mp3");

var lofi = document.getElementById("lofi");
var pause = document.getElementById("pause");
var play = document.getElementById("play");

function iniciar() {
  if (acao.value == 0) {
    document.getElementById("erro_acao").innerHTML =
      "Adicione quantos minutos você quer estar focado!";
    acao.focus();
  } else if (pausa.value == 0) {
    document.getElementById("erro_pausa").innerHTML =
      "Adicione quantos minutos você quer descansar!";
    pausa.focus();
  } else if (sessoes.value == 0) {
    document.getElementById("erro_sessoes").innerHTML =
      "Adicione quantas vezes você gostaria de repetir o processo!";
    sessoes.focus();
  } else {
    lofi.play();
    pause.style.setProperty("display", "block", "important");
  }
}
