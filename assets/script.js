// Variables to get from HTML
var startBtn = document.querySelector('.start-btn');
var startPage = document.querySelector('.start-page')
var questionPage = document.querySelector('.question-page');
var endOfGamePage = document.querySelector('.end-of-game');
var highscorePage = document.querySelector('.highscore');
var highscoresBtn = document.querySelector('.highscores');
var timer = document.querySelector('.timer');
var goBackBtn = document.querySelector('.go-back');
var clearHighscores = document.querySelector('.clear-highscores');
var corAnswer = document.querySelector('#correct-answer');
var userCorrect = document.querySelector('#user-correct');
var aBtn = document.querySelector('#aBtn');
var bBtn = document.querySelector('#bBtn');
var cBtn = document.querySelector('#cBtn');
var dBtn = document.querySelector('#dBtn');
var hsList = document.querySelector('#highscore-list');
var submitBtn = document.querySelector('#initial-submit');
var userInitials = document.querySelector('#user-initials');

// Array of questions objects
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            a: "strings",
            b: "booleans",
            c: "alerts",
            d: "numbers",
        },
        correctAnswer: "c",
    },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        answers: {
            a: "quotes",
            b: "curly brackets",
            c: "parentheses",
            d: "square brackets",
        },
        correctAnswer: "c",
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: {
            a: "numbers and strings",
            b: "other arrays",
            c: "booleans",
            d: "all of the above",
        },
        correctAnswer: "d",
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answers: {
            a: "commas",
            b: "curly brackets",
            c: "quotes",
            d: "parentheses",
        },
        correctAnswer: "a",
    },
    {
        question: "A very useful tool used during development and de bugging for printing content to the debugger is:",
        answers: {
            a: "JavaScript",
            b: "terminal / bash",
            c: "for loops",
            d: "console.log",
        },
        correctAnswer: "d",
    }
]

var questionsIndex = 0;
questionPage.style.display = "none";
endOfGamePage.style.display = "none";
highscorePage.style.display = "none";

startBtn.addEventListener('click', function(event){
    
    //timer();
    startPage.style.display = "none";
    questionPage.style.display = "block";
    corAnswer.style.display = "none";

    displayQuestion(questions[questionsIndex]);
});

aBtn.addEventListener('click', function(event){
    if (questions[questionsIndex].correctAnswer === 'a') {
        document.getElementById("user-correct").innerHTML = "Correct!";
        questionsIndex++;
    }
    else {
        //timer = timer - 10
        document.getElementById("user-correct").innerHTML = "Incorrect";
        questionsIndex++;
    }

    if (questionsIndex === questions.length - 1) {
        stopQuiz();
    }
    else {
        displayQuestion(questions[questionsIndex]);
    }
});

bBtn.addEventListener('click', function(event){
    if (questions[questionsIndex].correctAnswer === 'b') {
        document.getElementById("user-correct").innerHTML = "Correct!";
        questionsIndex++;
    }
    else {
        //timer = timer - 10
        document.getElementById("user-correct").innerHTML = "Incorrect";
        questionsIndex++;
    }

    if (questionsIndex === questions.length - 1) {
        stopQuiz();
    }
    else {
        displayQuestion(questions[questionsIndex]);
    }
});

cBtn.addEventListener('click', function(event){
    if (questions[questionsIndex].correctAnswer === 'c') {
        document.getElementById("user-correct").innerHTML = "Correct!";
        questionsIndex++;
    }
    else {
        //timer = timer - 10
        document.getElementById("user-correct").innerHTML = "Incorrect";
        questionsIndex++;
    }

    if (questionsIndex === questions.length - 1) {
        stopQuiz();
    }
    else {
        displayQuestion(questions[questionsIndex]);
    }
});

dBtn.addEventListener('click', function(event){
    if (questions[questionsIndex].correctAnswer === 'd') {
        document.getElementById("user-correct").innerHTML = "Correct!";
        questionsIndex++;
    }
    else {
        //timer = timer - 10
        document.getElementById("user-correct").innerHTML = "Incorrect";
        questionsIndex++;
    }

    if (questionsIndex === questions.length - 1) {
        stopQuiz();
    }
    else {
        displayQuestion(questions[questionsIndex]);
    }
});


goBackBtn.addEventListener('click', function(event){
    startPage.style.display = "block";
    highscorePage.style.display = "none";

});

highscoresBtn.addEventListener('click', function(event){
    showHighscores();
    
});

// save users highscore to the local storage and show highscores page
submitBtn.addEventListener('click', function(event){
    var initials = userInitials.value;

    if (initials === null) {
        alert('Please enter your initials!');
    }

    else { 
        var userInfo = {
            initials: initials,
            score: timeLeft
        }
        var highscores = localStorage.getItem('highscores');
        if (highscores === null) {
            highscores = [];
        }
        else {
            highscores = JSON.parse(highscores);
        }
        
        highscores.push(userInfo);
        var newHighscores = JSON.stringify(highscores);
        localStorage.setItem("highscores", newHighscores);
    }
    showHighscores();
});




function timer() {
    var timeLeft = 70;

    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
        }
        else {
            clearInterval(timeInterval);
            stopQuiz();
        }
    }, 1000);
}

function stopQuiz() {
    startPage.style.display = "none";
    questionPage.style.display = "none";
    endOfGamePage.style.display = "block";
    highscorePage.style.display = "none";
    questionsIndex = 0;
}

function showHighscores() {
    startPage.style.display = "none";
    questionPage.style.display = "none";
    endOfGamePage.style.display = "none";
    highscorePage.style.display = "block";
}

function displayQuestion(arrayIndex) {
    document.getElementById("question").innerHTML = arrayIndex.question;
    document.getElementById("choiceA").innerHTML = arrayIndex.answers.a;
    document.getElementById("choiceB").innerHTML = arrayIndex.answers.b;
    document.getElementById("choiceC").innerHTML = arrayIndex.answers.c;
    document.getElementById("choiceD").innerHTML = arrayIndex.answers.d;
    document.getElementById("correct-answer").innerHTML = arrayIndex.correctAnswer;
}
