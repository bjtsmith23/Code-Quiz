// DATA
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
        text: "question four",
        choices: ["user choice 1", 'user choice 2', "userchoice 3", "user's final choice"],
        answer: "user choice 1"
    },
]

console.log(questions[1].text);
console.log(questions[0].answer);

for (var i = 0; i < questions.length; i++) {
    console.log(questions[i].text);
    console.log(questions[i].choices);
    console.log(questions[i].answer);
}

var quizQuestionsIndex = 3;


var startScreenEl = document.getElementById("start-screen");
var startBtn = document.getElementById("start");


function startQuiz() {
    startScreenEl.setAttribute("class", "hide");
    displayQuestion();
};

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







startBtn.addEventListener("click", startQuiz);

