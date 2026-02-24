const quiz = [
    {
        question: "1. What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language", "None"],
        answer: 0
    },
    {
        question: "2. Which CSS property changes text color?",
        options: ["font-color", "text-color", "color", "background"],
        answer: 2
    },
    {
        question: "3. Which symbol is used for comments in JS?",
        options: ["//", "<!-- -->", "#", "**"],
        answer: 0
    },
    {
        question: "4. Which tag is used for JavaScript?",
        options: ["<js>", "<javascript>", "<script>", "<code>"],
        answer: 2
    },
    {
        question: "5. How do you select id in CSS?",
        options: [".id", "#id", "*id", "&id"],
        answer: 1
    },
    {
        question: "6. Which method selects element by id?",
        options: ["getElementById()", "query()", "selectId()", "getId()"],
        answer: 0
    },
    {
        question: "7. Which property changes background color?",
        options: ["bgcolor", "background-color", "color-bg", "bg"],
        answer: 1
    },
    {
        question: "8. Which operator is used for equality in JS?",
        options: ["=", "==", "!=", "++"],
        answer: 1
    },
    {
        question: "9. Which HTML tag creates a paragraph?",
        options: ["<para>", "<p>", "<h1>", "<text>"],
        answer: 1
    },
    {
        question: "10. Which function runs after specific time?",
        options: ["setInterval()", "setTimeout()", "delay()", "wait()"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultElement = document.getElementById("result");

function loadQuestion() {
    let q = quiz[currentQuestion];
    questionElement.innerText = q.question;
    optionsElement.innerHTML = "";
    resultElement.innerText = "";

    q.options.forEach((option, index) => {
        let button = document.createElement("button");
        button.innerText = option;

        button.addEventListener("click", function () {
            selectAnswer(index);
        });

        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    let buttons = optionsElement.querySelectorAll("button");

    buttons.forEach((btn, index) => {
        btn.disabled = true;

        if (index === quiz[currentQuestion].answer) {
            btn.classList.add("correct");
        }

        if (index === selectedIndex && selectedIndex !== quiz[currentQuestion].answer) {
            btn.classList.add("wrong");
        }
    });

    if (selectedIndex === quiz[currentQuestion].answer) {
        score++;
    }
}

nextBtn.addEventListener("click", function () {
    currentQuestion++;

    if (currentQuestion < quiz.length) {
        loadQuestion();
    } else {
        questionElement.innerText = "Quiz Completed!";
        optionsElement.innerHTML = "";
        nextBtn.style.display = "none";
        resultElement.innerText = "Your Score: " + score + "/10";
    }
});

loadQuestion();