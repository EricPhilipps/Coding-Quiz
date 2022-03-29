## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

HTML

1) Start screen with title, rules, start button, timer
2) Question screen container with question text, buttons, timer, feedback based on answer selected
3) End of game container with final score, form to enter initials, and a submit button
4) High score page

JavaScript

1) Variables that reference DOM elements in the HTML file
    - Start quiz button, start screen element, timer element, highscore element
    question element, question title element, answer choices element

2) Create an array of objects that hold all questions
    - Answer choices
    - Question text
    - Correct answer

3) Create start quiz function triggered by the start quiz button
    - Hide start screen
    - Unhide question screen
    - Timer starts
    - Get the first question in the array

4) Create a function to get questions
    - append buttons, show title

5) Create function to check if an answer is correct
    - If answer is correct move to next question
    - If answer is wrong, decrement timer and move to next question
    - Keep track of score/points
    - Increment index of array of questions to move on

6) Create function to end the quiz
    - Hide question element
    - Unhide the end of quiz element
    - Unhide final score ekement, form and submit button

7) Create functionality to save the high scores in local storage