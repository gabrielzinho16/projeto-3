
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "vamos jogar basquete?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "foi jogar basquete."
            },
            {
                texto: "não",
                afirmacao: "não foi jogar basquete."
            }
        ]
    },
    {
        enunciado: "prefere jogar de manhã ou de tarde?",
        alternativas: [
            {
                texto: "manhã",
                afirmacao: "foram jogar de manhã"
            },
            {
                texto: "tarde",
                afirmacao: "foram jogar de tarde"
            }
        ]
    },
    {
        enunciado: "você prefere jogar com bola oficial ou bola normal",
        alternativas: [
            {
                texto: "bola oficial",
                afirmacao: "apenas jogar com bola oficial"
            },
            {
                texto: "bola normal",
                afirmacao: "apenas jogar com bola normal"
            }
        ]
    },
    {
        enunciado: "Ao final do jogo podemos tirar foto?",
        alternativas: [
            {
                texto: "simm!",
                afirmacao: "tirou várias fotos."
            },
            {
                texto: "não",
                afirmacao: "foi embora sem tirar nenhuma foto."
            }
        ]    
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""; // Limpar alternativas antes de adicionar novas
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}


function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " "; // Concatenar a afirmação selecionada na história final
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No final da partida"; // Texto final ajustado
    textoResultado.textContent = historiaFinal.trim(); // Mostrar a história final completa
    caixaAlternativas.textContent = ""; // Limpar alternativas
}


mostraPergunta();
