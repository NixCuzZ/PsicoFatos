
const questions = [
    {
        image: "https://i.imgur.com/lQBEMAe.png",
        text: "",
        options: ["Dopamina", "Serotonina", "Acetilcolina", "Endorfina"],
        answer: "Dopamina"
    },
    {
        image: "https://i.imgur.com/IvfQEQh.png",
        text: "",
        options: ["Codificação", "Recall", "Consolidação", "Recuperação"],
        answer: "Consolidação"
    },
    {
        image: "https://i.imgur.com/kZteKbc.png", 
        text: "",
        options: ["Estágio REM", "Estágio NREM 1", "Estágio NREM 2", "Estágio NREM 3"],
        answer: "Estágio REM"
    },
    {
        image: "https://i.imgur.com/bbMMyT1.png",
        text: "",
        options: ["Efeito de Primazia", "Efeito de Recência", "Efeito de Proximidade", "Efeito de Similaridade"],
        answer: "Efeito de Primazia"
    },
    {
        image: "https://i.imgur.com/DhgqEhq.png",
        text: "",
        options: ["Psicanálise", "Behaviorismo", "Humanismo", "Gestalt"],
        answer: "Humanismo"
    },
    {
        image: "https://i.imgur.com/h3a2u5b.png",
        text: "",
        options: ["Ivan Pavlov", "Sigmund Freud", "B.F. Skinner", "Albert Bandura"],
        answer: "B.F. Skinner"
    },
    {
        image: "https://i.imgur.com/8ZA2BzZ.png", 
        text: "",
        options: ["Estágio Sensoriomotor", "Estágio Pré-operacional", "Estágio Operacional Concreto", "Estágio Operacional Formal"],
        answer: "Estágio Operacional Formal"
    },
    {
        image: "https://i.imgur.com/1nwACbn.png",
        text: "",
        options: ["Condicionamento", "Ilusão de Controle", "Atribuição", "Viés de Confirmação"],
        answer: "Atribuição"
    },
    {
        image: "https://i.imgur.com/3tVWtJz.png",
        text: "",
        options: ["Efeito de Grupo", "Efeito de Obediência", "Efeito de Halo", "Efeito de Dissonância Cognitiva"],
        answer: "Efeito de Obediência"
    },
    {
        image: "https://i.imgur.com/xji1jfs.png",
        text: "",
        options: ["Efeito de Ajustamento", "Efeito de Projeção", "Efeito de Autoindulgência", "Efeito de Assunção"],
        answer: "Efeito de Projeção"
    }
];

let currentQuestion = 0;
let score = 0;
let timer;


function startQuiz() {
    showQuestion();
    startTimer();
}


function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
        startTimer(); 
    } else {
        clearInterval(timer); 
        showResult();
    }
}


function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }

    nextQuestion(); 
}


function startTimer() {
    let secondsLeft = 30;
    document.getElementById('timer').innerText = `Tempo restante: ${secondsLeft}s`;

    clearInterval(timer); 
    timer = setInterval(() => {
        secondsLeft--;
        document.getElementById('timer').innerText = `Tempo restante: ${secondsLeft}s`;
        if (secondsLeft < 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 3000);
}

function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('questionImage').src = question.image;
    document.getElementById('questionText').innerText = question.text;

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });

    document.getElementById('nextButton').style.display = 'none';
}

function showResult() {
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('resultContainer').style.display = 'block';
    document.getElementById('score').innerText = `Você acertou ${score} de ${questions.length} questões.`;

    const restartButton = document.getElementById('restartButton');
    restartButton.innerText = 'Reiniciar';
    restartButton.addEventListener('click', restartQuiz);
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    clearInterval(timer); 
    window.location.href = 'index.html'; 
}

window.onload = startQuiz;
