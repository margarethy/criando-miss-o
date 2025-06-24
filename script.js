const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");
const botaoReiniciar = document.querySelector(".botao-reiniciar");
const botaoExportar = document.querySelector(".botao-exportar");
const toggleTema = document.getElementById("toggleTema");

const perguntas = [
  {
    enunciado: "Como você acha que a tecnologia impactou o mercado de trabalho nas últimas décadas?",
    imagem: "img/trabalho-tecnologia.jpg",
    alternativas: [
      { texto: "Criou novas oportunidades e profissões.", afirmacao: "A tecnologia ampliou o mercado de trabalho com novas profissões" },
      { texto: "Eliminou empregos tradicionais e causou desemprego.", afirmacao: "A tecnologia trouxe desafios para empregos tradicionais" }
    ]
  },
  {
    enunciado: "Como a tecnologia influencia o meio ambiente?",
    imagem: "img/meio-ambiente.jpg",
    alternativas: [
      { texto: "Ajuda a monitorar e preservar a natureza.", afirmacao: "A tecnologia tem papel positivo na proteção ambiental" },
      { texto: "Contribui para o consumo excessivo e poluição.", afirmacao: "O uso irresponsável da tecnologia pode prejudicar o planeta" }
    ]
  },
  {
    enunciado: "Qual o papel das redes sociais na sociedade atual?",
    imagem: "img/redes-sociais.jpg",
    alternativas: [
      { texto: "Facilitam a troca de ideias e conexão entre pessoas.", afirmacao: "As redes sociais promovem a comunicação global" },
      { texto: "Causam vício, ansiedade e desinformação.", afirmacao: "O uso excessivo das redes pode afetar a saúde mental" }
    ]
  },
  {
    enunciado: "Como a tecnologia afeta a educação atualmente?",
    imagem: "img/educacao.jpg",
    alternativas: [
      { texto: "Facilita o acesso ao conhecimento e aprendizado.", afirmacao: "A tecnologia democratiza e potencializa a educação" },
      { texto: "Pode aumentar desigualdades entre estudantes.", afirmacao: "O acesso desigual à tecnologia pode gerar exclusão" }
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

  const img = document.getElementById("imagem-pergunta");
  if (perguntaAtual.imagem) {
    img.src = perguntaAtual.imagem;
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }

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
  document.getElementById("imagem-pergunta").style.display = "none";
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
  const doc = new jsPDF();doc.setFont("helvetica", "normal");
  doc.setFontSize(16);
  doc.text("Reflexão sobre Tecnologia e Sociedade", 20, 20);

  const texto = historiaFinal.trim();
  const linhas = doc.splitTextToSize(texto, 170);
  doc.setFontSize(12);
  doc.text(linhas, 20, 40);

  doc.save("reflexao-tecnologia-sociedade.pdf");
});

toggleTema.addEventListener("click", () => {
  document.body.classList.toggle("claro");
  toggleTema.textContent = document.body.classList.contains("claro") ? "Modo Escuro" : "Modo Claro";
});

mostraPergunta();
