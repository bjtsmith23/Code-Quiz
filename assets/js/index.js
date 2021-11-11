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

// ============
// MAIN PROCESS
// ============

function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
    questionsEl.setAttribute("class", "show");
    
    timerId = setInterval( countdown, 1000);
};

function countdown()
    timeCount--;
    timerEl.textContent = timeCount; 
    if (!timeCount) {
        console.log("time is up");
        clearInterval(timerId);
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



var timeLeft = 30;
    var time = document.getElementById('time');
    var timerId = setInterval(countdown, 1000);
    time--;
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        endQuiz();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }




startBtn.addEventListener("click", startQuiz);
startBtn.addEventListener("click", countdown);

