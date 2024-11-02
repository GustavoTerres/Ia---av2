const quizContainer = document.getElementById("quiz-container");

const perguntas = [
    {
        pergunta: "O que significa IA?",
        opcoes: ["Inteligência Artificial", "Interatividade Assistida", "Interface de Análise"],
        respostaCorreta: "Inteligência Artificial"
    },
    {
        pergunta: "Qual linguagem é mais usada para IA?",
        opcoes: ["Python", "HTML", "CSS"],
        respostaCorreta: "Python"
    },
    {
        pergunta: "Qual desses é um exemplo de IA usada em casa?",
        opcoes: ["Assistentes virtuais como Alexa e Google Assistant", "Calculadora", "Rádio"],
        respostaCorreta: "Assistentes virtuais como Alexa e Google Assistant"
    },
];

function criarQuiz() {
    perguntas.forEach((pergunta, index) => {
        const perguntaDiv = document.createElement("div");
        perguntaDiv.classList.add("pergunta");

        const perguntaTexto = document.createElement("h3");
        perguntaTexto.textContent = `${index + 1}. ${pergunta.pergunta}`;
        perguntaDiv.appendChild(perguntaTexto);

        pergunta.opcoes.forEach((opcao) => {
            const opcaoLabel = document.createElement("label");
            const opcaoInput = document.createElement("input");
            opcaoInput.type = "radio";
            opcaoInput.name = `pergunta${index}`;
            opcaoInput.value = opcao;

            opcaoLabel.appendChild(opcaoInput);
            opcaoLabel.appendChild(document.createTextNode(opcao));
            perguntaDiv.appendChild(opcaoLabel);
        });

        quizContainer.appendChild(perguntaDiv);
    });
