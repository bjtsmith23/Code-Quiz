// ===========
// DATA
// ===========
// Global variable for applicatoin state
var questions = [
    {
        text: "What is the capital of Canada?",
        choices: ["Lima", 'Ottowa', "Toronto", "Montreal"],
        answer: "Ottowa"
    },
    {
        text: "What is the capital of Norway",
        choices: ["Stockholm", 'Nordic City', "Malmo", "Oslo"],
        answer: 'Oslo'
    },
    {
        text: "What is the capital of Austria",
        choices: ["Vienna", 'Sofia', "Budapest", "Kiev"],
        answer: "Vienna"
    },
    {
        text: "What is the capital of France",
        choices: ["Paris", 'Marseille', "Bologna", "Rennes"],
        answer: "Paris"
    },
]

var TIME_PER_QUESTION = 10;
var quizQuestionsIndex = 0;
var timerId;
var timeCount = questions.length * TIME_PER_QUESTION;

// HTML elements
var startScreenEl = document.getElementById("start-screen");
var startBtn = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var questionTextEl = document.getElementById("question-text");

var choicesEl = document.getElementById('choices');

var feedbackEl = document.getElementById('feedback');

var endScreenEl = document.getElementById('end-screen');

var finalScoreEl = document.getElementById('final-score');

var initialsInputEl = document.getElementById('initials');

var initialsSubmitBtn = document.getElementById('submit');

// =============
// MAIN PROCESS
// =============
function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
    questionsEl.setAttribute("class", "show");
    
    timerId = setInterval(handleTicks, 1000);

   
    askQuestions();
};

function askQuestions() {
    var currentQuestionObj = questions[quizQuestionsIndex];
    console.log(currentQuestionObj);
    var questionText = currentQuestionObj.text;

    
    questionTextEl.textContent = questionText;


    choicesEl.innerHTML = '';
    choicesEl.textContent = '';

    
    var choicesArr = currentQuestionObj.choices;
    for (var i = 0; i < choicesArr.length; i++) {
        var buttonEl = document.createElement('button');
        console.log(choicesArr[i]);
        buttonEl.setAttribute('value', choicesArr[i]);
        buttonEl.textContent = (i + 1) + ". " + choicesArr[i];
        choicesEl.appendChild(buttonEl);
    }
}


function quizEnd() {
    console.log('quizEnd');
    clearInterval(timerId);
    questionsEl.setAttribute('class', 'hide');
    finalScoreEl.textContent = timeCount;
    endScreenEl.setAttribute('class', 'show');
    return;
}

function handleTicks() {
    timeCount--;
    timerEl.textContent = timeCount;
    if (!timeCount) {
        console.log("Time is up");
        clearInterval(timerId);
        quizEnd();
    }
}


function handleChoices(event) {
    console.log('handleChoices');
    var choiceValue = event.target.getAttribute('value');
    console.log(choiceValue);
    if (choiceValue === questions[quizQuestionsIndex].answer) {
        feedbackEl.textContent = "Correct!";
    }
    else {
        timeCount -= TIME_PER_QUESTION ; 
        if (timeCount < 0) {
            timeCount = 0;
        }
        timerEl.textContent = timeCount;
        feedbackEl.textContent = 'Wrong!';
    }

    
    feedbackEl.setAttribute('class', 'feedback');
    setTimeout(function() {
        feedbackEl.setAttribute('class', 'hide');
    }, 1500);
    quizQuestionsIndex++;
    if (quizQuestionsIndex === questions.length) {
        quizEnd();
    }
    else {
        askQuestions();
    }
}

function saveScores() {
    console.log('saveScores');
    var initialsValue = initialsInputEl.value.trim();
    var scores = [];
    if (initialsValue) {
        scores = JSON.parse(localStorage.getItem('scores'));
        if (!scores) {
            scores = [];
        };
        var newScore = {
            score: timeCount,
            initials: initialsValue
        }
        console.log(scores);
        scores.push(newScore);
        localStorage.setItem('scores', JSON.stringify(scores));
    }
    
    location.href="./highscores.html";

    return;
}

function handleInitialsKeyup(event) {
    console.log('handleInitialsKeyup');
    console.log('event.key', event.key);
    if (event.key === 'Enter') {
        saveScores();
    }
    return;
}

function handleInitialsSubmit(event) {
    console.log('handleInitialsSubmit');
    saveScores();
}



startBtn.addEventListener("click", startQuiz);

choicesEl.onclick = handleChoices;

initialsInputEl.onkeyup = handleInitialsKeyup;

initialsSubmitBtn.addEventListener("click", handleInitialsSubmit);


