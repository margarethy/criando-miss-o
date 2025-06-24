const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");
const botaoReiniciar = document.querySelector(".botao-reiniciar");
const botaoExportar = document.querySelector(".botao-exportar");
const toggleTema = document.getElementById("toggleTema");

const perguntas = [
  {
    enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter. Qual o primeiro pensamento?",
    alternativas: [
      { texto: "Isso é assustador!", afirmacao: "Você ficou receoso com o avanço da tecnologia" },
      { texto: "Isso é maravilhoso!", afirmacao: "Você ficou animado com as possibilidades da tecnologia" }
    ]
  },
  {
    enunciado: "Sua professora pede um trabalho sobre IA. Como você reage?",
    alternativas: [
      { texto: "Uso IA para me ajudar a entender o tema.", afirmacao: "Você usou a IA como apoio educacional" },
      { texto: "Faço tudo com o que já sei e pesquiso por conta própria.", afirmacao: "Você confiou na sua autonomia" }
    ]
  }
];

let atual = 0;
let historiaFinal = "";

// Efeito sonoro (click suave)
const audioClick = new Audio('https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg');
audioClick.volume = 0.2;

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  const perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.innerHTML = "";

  perguntaAtual.alternativas.forEach((alternativa) => {
    const botao = document.createElement("button");
    botao.textContent = alternativa.texto;
    botao.classList.add("botao-alternativa");

    botao.addEventListener("click", () => {
      audioClick.currentTime = 0;
      audioClick.play();

      document.querySelectorAll(".botao-alternativa").forEach(b => b.disabled = true);
      botao.style.backgroundColor = "#d3d3d3";
      historiaFinal += alternativa.afirmacao + ".\n";
      atual++;
      setTimeout(mostraPergunta, 400);
    });

    caixaAlternativas.appendChild(botao);
  });
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2049...";
  textoResultado.textContent = historiaFinal.trim();
  caixaAlternativas.innerHTML = "";

  botaoReiniciar.classList.add("mostrar");
  botaoExportar.classList.add("mostrar");
}

function reiniciarJogo() {
  atual = 0;
  historiaFinal = "";
  textoResultado.textContent = "";
  botaoReiniciar.classList.remove("mostrar");
  botaoExportar.classList.remove("mostrar");
  mostraPergunta();
}

botaoReiniciar.addEventListener("click", reiniciarJogo);

botaoExportar.addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFont("helvetica", "normal");
  doc.setFontSize(16);
  doc.text("História do Futuro da IA", 20, 20);

  const texto = historiaFinal.trim();
  const linhas = doc.splitTextToSize(texto, 170);
  doc.setFontSize(12);
  doc.text(linhas, 20, 40);

  doc.save("futuro-da-ia.pdf");
});

toggleTema.addEventListener("click", () => {
  document.body.classList.toggle("claro");
  if(document.body.classList.contains("claro")){
    toggleTema.textContent = "Modo Escuro";
  } else {
    toggleTema.textContent = "Modo Claro";
  }
});

mostraPergunta();
