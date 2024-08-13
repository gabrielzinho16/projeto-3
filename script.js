
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Hoje é dia de levar seu pet ao petshop, você prefere ir de manhã ou a tarde?",
        alternativas: [
            {
                texto: "manhã!",
                afirmacao: "levou seu pet de manhã."
            },
            {
                texto: "tarde!",
                afirmacao: "levou seu pet à tarde."
            }
        ]
    },
    {
        enunciado: "Qual banho você prefere? banho e tosa tradicional ou apenas higiênico?",
        alternativas: [
            {
                texto: "tradicional",
                afirmacao: "ele recebeu uma tosa tradicional."
            },
            {
                texto: "apenas higiênico",
                afirmacao: "ele recebeu uma tosa higiênica."
            }
        ]
    },
    {
        enunciado: "Deseja algum acessório?",
        alternativas: [
            {
                texto: "sim, obrigado!",
                afirmacao: "recebeu lacinhos."
            },
            {
                texto: "não, obrigado!",
                afirmacao: "voltou sem nenhum acessório."
            }
        ]
    },
    {
        enunciado: "Ao final do procedimento podemos tirar foto?",
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
    caixaPerguntas.textContent = "No final da tosa:"; // Texto final ajustado
    textoResultado.textContent = historiaFinal.trim(); // Mostrar a história final completa
    caixaAlternativas.textContent = ""; // Limpar alternativas
}


mostraPergunta();
