const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");
const botaoReiniciar = document.querySelector(".botao-reiniciar");
const botaoExportar = document.querySelector(".botao-exportar");
const toggleTema = document.getElementById("toggleTema");

const perguntas = [
  {
    enunciado: "Como você acha que a tecnologia impactou o mercado de trabalho nas últimas décadas?",
    alternativas: [
      { texto: "Criou novas oportunidades e profissões.", afirmacao: "A tecnologia ampliou o mercado de trabalho com novas profissões." },
      { texto: "Eliminou empregos tradicionais e causou desemprego.", afirmacao: "A tecnologia trouxe desafios para empregos tradicionais." }
    ]
  },
  {
    enunciado: "De que forma a tecnologia afetou a comunicação entre as pessoas?",
    alternativas: [
      { texto: "Facilitou a conexão global e o compartilhamento de informações.", afirmacao: "A tecnologia tornou o mundo mais conectado e ágil." },
      { texto: "Criou distanciamento e superficialidade nas relações.", afirmacao: "A tecnologia também pode gerar isolamento social." }
    ]
  },
  {
    enunciado: "Qual o impacto da tecnologia na privacidade das pessoas?",
    alternativas: [
      { texto: "Aumentou a exposição e risco de vazamento de dados.", afirmacao: "A privacidade foi impactada pela digitalização dos dados." },
      { texto: "Ofereceu mais controle e transparência para os usuários.", afirmacao: "Novas ferramentas melhoram a proteção da privacidade." }
    ]
  },
  {
    enunciado: "Como a tecnologia influencia na educação atualmente?",
    alternativas: [
      { texto: "Facilita o acesso ao conhecimento e aprendizagem.", afirmacao: "A tecnologia democratiza e potencializa a educação." },
      { texto: "Pode aumentar desigualdades e dependência digital.", afirmacao: "O acesso desigual pode limitar os benefícios educacionais." }
    ]
  }
];

let atual = 0;
let historiaFinal = "";

const audioClick = new Audio('https://actions.google.com/sounds/v1/cartoon/wood_plank_flicks.ogg');
audioClick.volume = 0.15;

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
  caixaPerguntas.textContent = "Reflexão Final";
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
  doc.text("Reflexão sobre Tecnologia e Sociedade", 20, 20);

  const texto = historiaFinal.trim();
  const linhas = doc.splitTextToSize(texto, 170);
  doc.setFontSize(12);
  doc.text(linhas, 20, 40);

  doc.save("reflexao-tecnologia-sociedade.pdf");
});toggleTema.addEventListener("click", () => {
  document.body.classList.toggle("claro");
  if(document.body.classList.contains("claro")){
    toggleTema.textContent = "Modo Escuro";
  } else {
    toggleTema.textContent = "Modo Claro";
  }
});

mostraPergunta();
