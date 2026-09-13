// ==========================================
// DAY 9 - DOM MANIPULATION & EVENTS
// ==========================================


// ==========================================
// 1. QUIZ QUESTIONS
// ==========================================

const questions = [

    {
        question: "Which language is used to add interactivity to a webpage?",

        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],

        answer: "JavaScript"
    },

    {
        question: "Which keyword is used to create a constant in JavaScript?",

        options: [
            "var",
            "let",
            "const",
            "constant"
        ],

        answer: "const"
    },

    {
        question: "Which method selects an element using a CSS selector?",

        options: [
            "getElement()",
            "querySelector()",
            "selectElement()",
            "find()"
        ],

        answer: "querySelector()"
    },

    {
        question: "Which symbol is used for strict equality?",

        options: [
            "=",
            "==",
            "===",
            "!="
        ],

        answer: "==="
    },

    {
        question: "Which method adds an event listener to an element?",

        options: [
            "addEventListener()",
            "addEvent()",
            "eventListener()",
            "createEvent()"
        ],

        answer: "addEventListener()"
    }

];


// ==========================================
// 2. SELECT HTML ELEMENTS
// ==========================================

const questionElement =
    document.querySelector("#question");

const optionsElement =
    document.querySelector("#options");

const nextButton =
    document.querySelector("#nextButton");

const questionNumberElement =
    document.querySelector("#questionNumber");

const scoreElement =
    document.querySelector("#score");


// ==========================================
// 3. QUIZ VARIABLES
// ==========================================

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;


// ==========================================
// 4. LOAD QUESTION
// ==========================================

function loadQuestion() {

    const current = questions[currentQuestion];

    selectedAnswer = null;

    // Change question text
    questionElement.textContent = current.question;

    // Change question number
    questionNumberElement.textContent =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;

    // Clear old options
    optionsElement.innerHTML = "";

    // Create new options
    current.options.forEach(function(option) {

        const button = document.createElement("button");

        button.textContent = option;

        button.classList.add("option");

        // Click event
        button.addEventListener("click", function() {

            // Remove previous selection
            const allOptions =
                document.querySelectorAll(".option");

            allOptions.forEach(function(item) {

                item.classList.remove("selected");

            });

            // Select current option
            button.classList.add("selected");

            selectedAnswer = option;

        });

        optionsElement.appendChild(button);

    });

}


// ==========================================
// 5. NEXT BUTTON EVENT
// ==========================================

nextButton.addEventListener("click", function() {

    // Check if user selected an answer
    if (selectedAnswer === null) {

        alert("Please select an answer first.");

        return;
    }


    // Check answer
    if (
        selectedAnswer ===
        questions[currentQuestion].answer
    ) {

        score++;

    }


    // Move to next question
    currentQuestion++;


    // Check if quiz is finished
    if (currentQuestion < questions.length) {

        loadQuestion();

    } else {

        showResult();

    }

});


// ==========================================
// 6. SHOW RESULT
// ==========================================

function showResult() {

    questionElement.textContent =
        "🎉 Quiz Completed!";

    questionNumberElement.textContent =
        "Final Result";

    optionsElement.innerHTML = "";

    nextButton.textContent = "Restart Quiz";

    scoreElement.textContent =
        "Your Score: " +
        score +
        " / " +
        questions.length;


    // Change button behavior
    nextButton.onclick = function() {

        restartQuiz();

    };

}


// ==========================================
// 7. RESTART QUIZ
// ==========================================

function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;

    nextButton.textContent =
        "Next Question";

    scoreElement.textContent = "";

    loadQuestion();

}


// ==========================================
// 8. START QUIZ
// ==========================================

loadQuestion();
