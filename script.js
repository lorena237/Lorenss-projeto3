const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A heroína da nossa história Elara, uma aprendiz de guardiã dos cristais. Elara sonhava em se tornar uma grande protetora do equilíbrio entre a luz e a sombra, como sua avó antes dela. Certo dia, enquanto explorava as antigas ruínas de um templo esquecido, Elara encontrou um misterioso mapa que prometia revelar o segredo para restaurar a harmonia  completa no reino, ameaçado por uma crescente escuridão. Elara decide seguir o mapa. Antes de partir, ela deve escolher um companheiro para a jornada:",
        alternativas: [
            {
                texto: "A sábia coruja Lyria, que possui vasto conhecimento sobre o reino.",
                afirmacao: ""
            },
            {
                texto: "O corajoso guerreiro Kael, famoso por sua bravura e habiloidade com a espada.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Durante a viajem, Elara e seu companheiro encontram um desfiladeiro. Há duas maneiras de atravessá-lo:",
        alternativas: [
            {
                texto: "Seguir por uma ponte estreita que parece prestes a desmoronar.",
                afirmacao: ""
            },
            {
                texto: "Descer até o fundo do desfiladeiro e enfrentar as criaturas que lá habitam.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "No meio da floresta sombria, eles encontram um ser enigmático que oferece ajuda em troca de algo precioso.",
        alternativas: [
            {
                texto: "Aceitar a ajuda e dar ao ser o cristal de sua alma.",
                afirmacao: ""
            },
            {
                texto: "recusar a ajuda e continuar sozinha, confiando apenas em si mesma.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Finalmente, ele chegam ao local indicado pelo mapa, mas encontram uma barreira mágica. Para atravessá-la, Elara deve:",
        alternativas: [
            {
                texto: "Recitar um antigo encantamento de luz.",
                afirmacao: ""
            },
            {
                texto: "Usar um artefato de sombra encontrado nas ruínas do templo",
                afirmacao: ""
            }
        ]
    },
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
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Se Elara escolheu a sábia coruja Lyria, seguiu pelaponte estreita, recusou a ajuda  do ser enigmático e recitou o encantamento de luz, ela conseguiu restaurar a harmonia do reino. A luz brilhou intensamente em todo Luminalis, banindo a escuridão e trazendo paz e prosperidade. Elara foi celebrada como a nova grande guardiã dos cristais, mantendo o equilíbrio por muitos anos.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "Se Elara escolheu o corajo guerreiro Kael, desceu até o fundo do desfiladeiro, aceitou a ajuda do ser enigmático e usou o artefato de sombra, ela inadvertidamente abriu umportal para um reino sombrio. A escuridão se espalhou por Luminalis, e o equilíbrio foi perdido. Elara, arrependida de suas escolhas, lutou para encontrar uma nova forma de restaurar a luz, enquanto o reino mergulhava numa era de trevas.";
}

mostraPergunta();
