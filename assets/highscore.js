var homeBtn = document.querySelector('#homeBtn');
var clearHighscores = document.querySelector('.clear-highscores');
var hsList = document.querySelector('#highscore-list');

homeBtn.addEventListener('click', function(){
    window.location.replace("./index.html");
});

clearHighscores.addEventListener('click', function() {
    localStorage.clear();
    location.reload();
});

var highscores = localStorage.getItem("highscores");
highscores = JSON.parse(highscores);

if (highscores != null) {
    for (var i = 0; i < highscores.length; i++) {
        var list = document.createElement("li");
        list.textContent = highscores[i].initials + ": " + highscores[i].score;
        hsList.appendChild(list);
    }
}
