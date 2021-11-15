// ===========
// DATA
// ===========
// Global variable for applicatoin state
var questions = [
    {
        text: "What is Javascript",
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
var timeCount = questions.length * 5;

// HTML elements
var startScreenEl = document.getElementById("start-screen");
var startBtn = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var questionTextEl = document.getElementById("question-text");
// ???
// choices element
var choicesEl = document.getElementById('choices');
// feedback element
var feedbackEl = document.getElementById('feedback');
// end screen element
var endScreenEl = document.getElementById('end-screen');
// initials Input Elment
var initialsInputEl = document.getElementById('initials');
// initials Submit Btn
var initialsSubmitBtn = document.getElementById('submit');

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
    console.log(currentQuestionObj);
    var questionText = currentQuestionObj.text;

    // Display question text
    questionTextEl.textContent = questionText;

    // ?? Display choices
    // Clear the existing choices content
    choicesEl.innerHTML = '';
    choicesEl.textContent = '';

    // Create a loop to create list item elements.
    var choicesArr = currentQuestionObj.choices;
    for (var i = 0; i < choicesArr.length; i++) {
        var liEl = document.createElement('li');
        // On each list item add an value attribute to hold the choice
        console.log(choicesArr[i]);
        liEl.setAttribute('value', choicesArr[i]);
        liEl.textContent = (i + 1) + ". " + choicesArr[i];
        choicesEl.appendChild(liEl);
    }

    // ?? Wrong! to Increment index for the next question here
    // quizQuestionsIndex++;
}

// ?? quizEnd function
// clear interval
// display end screen element
// add the content to the 'final-score' element with timeCount
// hide questions element
function quizEnd() {
    console.log('quizEnd');
    // clear interval
    clearInterval(timerId);
    // hide questions element
    questionsEl.setAttribute('class', 'hide');

    return;
}

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
        // ??
        quizEnd();
    }
}

// ?? handleChoices function
function handleChoices(event) {
    // get the value attribute from event target
    var choiceValue = event.target.getAttribute('value');
    console.log(choiceValue);
    // compare the value with the current question answer
    if (choiceValue === questions[quizQuestionsIndex].answer) {
        feedbackEl.textContent = "Correct!";
    }
    else {
        timeCount -= 5 ; // timeCount = timeCount - 5;
        if (timeCount < 0) {
            timeCount = 0;
        }
        timerEl.textContent = timeCount;
        feedbackEl.textContent = 'Wrong!';
    }

    feedbackEl.setAttribute('class', 'feedback');
    setTimeout(function() {
        feedbackEl.setAttribute('class', 'hide');
    }, 2000);

    quizQuestionsIndex++;
    if (quizQuestionsIndex === questions.length) {
        quizEnd();
    }
    else {
        askQuestions();
    }
    // if equal, add content to the feedback element with 'Correct!'
    // if not,
    //   subtract seconds from time count as penalty
    //   if time count less than zero, make it zero
    //   modify the content of the timer element with this new time count
    //   add content to the feedback element with 'Wrong!'
    // display feedback element
    // set one-time timer to hide the feedback element in 1 ~ 2 secs
    // increment the quiz questions index by 1
    // check if the index is equal to the length (size) of questions
    // if equal, call quizEnd function
    // if not, call ask questions function
}

startBtn.addEventListener("click", startQuiz);

// ?? add event listener for choices
choicesEl.onclick = handleChoices;

// ?? add event listener for initials
