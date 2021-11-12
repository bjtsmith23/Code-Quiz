// DATA
// Global variable for applicatoin state
var questions = [
    {
        text: "What is the highest grossing movie of all time?",
        choices: ["Titanic", 'Avatar', "Wizard of Oz", "National Treasure"],
        answer: "Titanic"
    },
    {
        text: "Which one of these movies have not won an Oscar for best picture?",
        choices: ["Snow Dogs", '', "userchoice 3", "user's final choice"],
        answer: 'user choice 3'
    },
    {
        text: "My code quiz question 3",
        choices: ["user choice 1", 'user choice 2', "userchoice 3", "user's final choice"],
        answer: "user choice 4"
    },
    {
        text: "question four",
        choices: ["user choice 1", 'user choice 2', "userchoice 3", "user's final choice"],
        answer: "user choice 3"
    },
]

for (var i = 0; i < questions.length; i++) {
    console.log(questions[i].text);
    console.log(questions[i].choices);
    console.log(questions[i].answer);
}

var quizQuestionsIndex = 0;
var timerId;
var timeCount = questions.length * 7;

// HTML elements
var startScreenEl = document.getElementById("start-screen");
var startBtn = document.getElementById("start");
var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var questionTextEl = document.getElementById("question-text");
var questionChoicesEl = document.getElementById("choices");

// ============
// MAIN PROCESS
// ============

function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
    questionsEl.setAttribute("class", "show");
    
    
    // Start Timer
    timerId = setInterval(handleTicks, 1000);

    // Ask questions
    askQuestions();
};

function askQuestions() {
    var currentQuestion = questions[quizQuestionsIndex];
    var questionTitle= currentQuestion.text
    var questionChoices = currentQuestion.choices;

    // Display question text
    questionTextEl.textContent = questionTitle;

    //  ?? Display choices

    questionChoicesEl.textContent = questionChoices;

    

    
    // Increment Index for the next question
    quizQuestionsIndex++
}


function displayQuestion() {
    var displayQuestionEl = document.getElementById("question-text");
    var choicesEl = document.getElementById("choices");
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3= document.createElement("button");
    var button4 = document.createElement("button");


    button1.textContent = questions[0].choices[0];
    button2.textContent = questions[0].choices[1];
    button3.textContent = questions[0].choices[2];
    button4.textContent = questions[0].choices[3];

    displayQuestionEl.textContent = questions[0].text;
   
   button1.addEventListener("click", checkForAnswer)
   button2.addEventListener("click", checkForAnswer)
   button3.addEventListener("click", checkForAnswer)
   button4.addEventListener("click", checkForAnswer)
   



    choicesEl.appendChild(button1);
    choicesEl.appendChild(button2);
    choicesEl.appendChild(button3);
    choicesEl.appendChild(button4);  
}

function checkForAnswer() {
    var correctAnswer = questions[0].answer
    console.log(this.innerHTML);
    if (this.innerHTML === correctAnswer) {
        console.log("correct");
    }
    else {
            console.log("incorrect");
        }
}


//    function now () {
//     var today = moment();
// $("#current-time").text(today.format("MMM Do, YYYY, h:mm:ss a"));
// };

// var curTimeEl = document.getElementById("current-time");

// setInterval(now, 1000);



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
    }
}

startBtn.addEventListener("click", startQuiz);












 


