// Variables to get from HTML

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