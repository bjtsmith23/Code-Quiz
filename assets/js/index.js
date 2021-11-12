// ===========
// DATA
// ===========
// Global variable for applicatoin state
var questions = [
    {
        text: "My code quiz question 1",
        choices: ["user choice 1", 'user choice 2', "userchoice 3", "user's final choice"],
        answer: "user choice 1"
    },
    {
        text: "My code quiz question 2",
        choices: ["user choice 1", 'user choice 2', "userchoice 3", "user's final choice"],
        answer: 'user choice 2'
    },
    {
        text: "My code quiz question 3",
        choices: ["user choice 1", 'user choice 2', "userchoice 3", "user's final choice"],
        answer: "user choice 1"
    },
    {
        text: "My code quiz question 4",
        choices: ["user choice 1", 'user choice 2', "userchoice 3", "user's final choice"],
        answer: "user choice 1"
    },
]

var quizQuestionsIndex = 0;
var timerId;
var timeCount = questions.length * 7;

// HTML elements
var startScreenEl = document.getElementById("start-screen");
var startBtn = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var questionTextEl = document.getElementById("question-text");

// Choices element
var choicesEl = document.getElementById("choices");

// feedback element
var feedbackEl = document.getElementById("feedback");

// end screen element
var endScreenEl = document.getElementById("end-screen");

// initials input element 
var initialsInputEl = document.getElementById("initials");

// initials submit button
var initialsSubmitBtn = document.getElementById("submit");






// =============
// MAIN PROCESS
// =============
function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
    questionsEl.setAttribute("class", "show");
    // Start timer
    timerId = setInterval(handleTicks, 1000);

    // Ask questions
    askQuestions();
};

function askQuestions() {
    var currentQuestionObj = questions[quizQuestionsIndex];
    var questionText = currentQuestionObj.text;
    // Display question text
    questionTextEl.textContent = questionText;
    // ?? Display choices
    choicesEl.innerHTML = '';
    choicesEl.textContent = '';
};

    // create a loop
    var choicesArr = currentQuestionObj.choices;
    for (var i = 0; i < choicesArr.length; i++) {
        // creat li element
        var liEL = document.createElement("li");
        // on each list item add a value attribute to hold the choice
        console.log()
        liEL.setAttribute('value', choicesArr[i]);
        liEL.textContent = choicesArr[i];
        choicesEl.appendChild(liEL);
    };


    // Increment index for the next questio


    function handleTicks() {
        // Decement time count
        timeCount--;
        // Display time count
        timerEl.textContent = timeCount;
        // Check time count if it reaches 0
        // if timed out, quiz ends
        if (!timeCount) {
            console.log("Time is up");
            clearInterval(timerId);
            // ?? quizEnd
        };
    };

    function handleChoices(event) {
        var choiceValue = event.target.getAttribute('value');
        console.log(choiceValue);
        if (choiceValue === questions[quizQuestionsIndex].answer) {
            feedbackEl.textContent = "Correct!";
        }
        else {
            // timeCount = timeCount - 5
            timeCount -= 5 ;
            if (timeCount < 0)
                timeCount = 0; 
            }
            timerEl.textContent = timeCount;
    }

    startBtn.addEventListener("click", startQuiz);

    // add enent listener to choices
    choicesEl.onclick = handleChoices;
