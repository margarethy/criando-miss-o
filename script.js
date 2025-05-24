// Seleciona os elementos principais do DOM
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Valida se os elementos do DOM foram encontrados
if (!caixaPrincipal || !caixaPerguntas || !caixaAlternativas || !caixaResultado || !textoResultado) {
    console.error("Erro: Um ou mais elementos do DOM não foram encontrados.");
    return;
}

// Dados das perguntas
const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    // ...restante das perguntas...
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

// Mostra a pergunta atual
function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

// Mostra as alternativas da pergunta atual
function mostraAlternativas() {
    caixaAlternativas.innerHTML = ""; // Limpa as alternativas anteriores
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.setAttribute("aria-label", `Escolha: ${alternativa.texto}`); // Acessibilidade
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

// Processa a resposta selecionada
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;

    // Desabilita os botões para evitar múltiplos cliques
    const botoes = caixaAlternativas.querySelectorAll("button");
    botoes.forEach(botao => botao.disabled = true);

    setTimeout(() => mostraPergunta(), 500); // Pequeno atraso para transição
}

// Mostra o resultado final
function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";

    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Reiniciar";
    botaoReiniciar.setAttribute("aria-label", "Reiniciar o jogo"); // Acessibilidade
    botaoReiniciar.addEventListener("click", reiniciarJogo);
    caixaAlternativas.appendChild(botaoReiniciar);
}

// Reinicia o jogo
function reiniciarJogo() {
    atual = 0;
    historiaFinal = "";
    mostraPergunta();
}

// Inicia o jogo
mostraPergunta();
