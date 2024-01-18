
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "jogo do filha da puta secreto");
  exibirTextoNaTela("p", "escolhe um numero de 1 a 10 seu fdp");
}
exibirMensagemInicial();

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
  
}

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela("h1", "parabens seu viado, vc acertou");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagensTentativas = `voce so teve que tentar umas ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela("p", mensagensTentativas);
    document.getElementById("reiniciar").removeAtribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "seu viado, vc errou, o numero é menor");
    } else {
      exibirTextoNaTela("p", "seu viado, vc errou, o numero é maior");
      tentativas++;
      limparCampo();
    }
  }
  
  function limparCampo() {
    chute = document.querySelector("input").value = "";
    chute.value = "";
  }
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}