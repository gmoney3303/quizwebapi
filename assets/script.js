const correct1 = document.getElementById('correct-answer1');
const wrong1 = document.getElementsByClassName("wrong-answer1");
const correct2 = document.getElementById('correct-answer2');
const wrong2 = document.getElementsByClassName("wrong-answer2");
const correct3 = document.getElementById('correct-answer3');
const wrong3 = document.getElementsByClassName("wrong-answer3");
const startButton = document.getElementById("Start-button");
const saveButton = document.getElementById("Save-score");

const Highscores = document.getElementById("High-Scores");
const scoreScreen = document.getElementById("score-screen");
var timer = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var initials = document.getElementById("text");
var savedName = document.getElementById("saved-name");
var scoreArray = [];

function pageLoad(){
    var userScore = JSON.parse(localStorage.getItem("score"));
    if (!userScore){
        localStorage.setItem("score", JSON.stringify([{initials:"GMS", score:3},{initials:"GMS", score:3}]));
    }
        
    console.log(userScore);
    scoreArray = userScore;
    console.log(scoreArray);
}
var score = 5;

var timeleft = 60;
var timerInterval;
// starts time 
 function setTime() {
      timerInterval = setInterval(function() {
         timeleft--;
         timer.textContent = timeleft;
        //  console.log(timeleft);
         if (timeleft <= 0) {
            // document.getElementById("First-question").style.display = "none";
            // document.getElementById("Third-question").style.display = "none";
            // document.getElementById("Second-question").style.display = "none";
            // document.getElementById("End-screen").style.display = "block";
            // scoreScreen.style.display = "block";
            // scoreEl.textContent = score;
            clearInterval(timerInterval);
            displayend();
        }
     },1000);
    
 }

function displayend() {
    document.getElementById("First-question").style.display = "none";
            document.getElementById("Third-question").style.display = "none";
            document.getElementById("Second-question").style.display = "none";
            document.getElementById("End-screen").style.display = "block";
            scoreScreen.style.display = "block";
            scoreEl.textContent = score;
            clearInterval(timerInterval);
            savescore();
}


startButton.addEventListener ("click", startQuiz);
correct1.addEventListener ("click", correctanswer1);
 wrong1[0].addEventListener ("click", wronganswer1);
 wrong1[1].addEventListener ("click", wronganswer1);
 wrong1[2].addEventListener ("click", wronganswer1);
correct2.addEventListener ("click", correctanswer2);
wrong2[0].addEventListener ("click", wronganswer2);
wrong2[1].addEventListener ("click", wronganswer2);
wrong2[2].addEventListener ("click", wronganswer2);
wrong3[0].addEventListener ("click", wronganswer3);
wrong3[1].addEventListener ("click", wronganswer3);
wrong3[2].addEventListener ("click", wronganswer3);
correct3.addEventListener ("click", correctanswer3);
saveButton.addEventListener("click", savescore);
 Highscores.addEventListener("click", displayend);

function savescore() {
    console.log(initials.value);
    console.log(score);
    savedName.innerHTML = ""
    for (let i = 0; i < scoreArray.length; i++){
        user = document.createElement("li")
        user.textContent = scoreArray[i].initials + "--" + scoreArray[i].score
        savedName.appendChild(user)
    }
    // scoreEl.textContent = score;
    // localStorage.setItem("saved-name", initials.value);
    // var example = localStorage.getItem("highschool");
    // console.log(example);

}


// brings up next question
function startQuiz(){
    document.getElementById("First-question").style.display = "block";
    document.getElementById("start-screen").style.display = "none";
    setTime();
    console.log("click");
}
//when you answer the first question
function correctanswer1(){
    console.log("click2");
    document.getElementById("First-question").style.display = "none";
    document.getElementById("Second-question").style.display = "block";
    document.getElementById("right").style.display = "block";
}

function wronganswer1() {
    document.getElementById("First-question").style.display = "none";
    document.getElementById("Second-question").style.display = "block";
    document.getElementById("incorrect").style.display = "block";
    document.getElementById("right").style.display = "none";
    score--;
    timeleft =timeleft - 10;
}
//when you answer the second
function correctanswer2(){
    document.getElementById("Second-question").style.display = "none";
    document.getElementById("Third-question").style.display = "block";
    document.getElementById("incorrect").style.display = "none";
    document.getElementById("right").style.display = "block";
}

function wronganswer2() {
    document.getElementById("Third-question").style.display = "block"
    document.getElementById("Second-question").style.display = "none";
    document.getElementById("incorrect").style.display = "block";
    document.getElementById("right").style.display = "none";
    score--;
    timeleft =timeleft - 10;
}
// when you answer the third
function correctanswer3(){
    document.getElementById("Third-question").style.display = "none"
    document.getElementById("End-screen").style.display = "block";
    scoreEl.textContent = score;
    document.getElementById("incorrect").style.display = "none";
    document.getElementById("right").style.display = "block";
    displayend();
}

function wronganswer3() {
    document.getElementById("Third-question").style.display = "none"
    document.getElementById("End-screen").style.display = "block";
    document.getElementById("incorrect").style.display = "block";
    document.getElementById("right").style.display = "none";
    score--;
    timeleft =timeleft - 10;
    scoreEl.textContent = score;
    displayend();
}
pageLoad();

    // function scoreEl() {
    //     document.getElementById("Third-question").style.display = "none"
    // document.getElementById("End-screen").style.display = "none";
    // document.getElementById("incorrect").style.display = "none";
    // document.getElementById("right").style.display = "none";
    // document.getElementById("score-screen").style.display = "block";
    // }
    saveButton.addEventListener("click", savescore);
