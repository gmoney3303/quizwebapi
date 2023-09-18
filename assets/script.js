const correct1 = document.getElementById('correct-answer1');
const wrong1 = document.getElementsByClassName("wrong-answer1");
const correct2 = document.getElementById('correct-answer2');
const wrong2 = document.getElementsByClassName("wrong-answer2");
const correct3 = document.getElementById('correct-answer3');
const wrong3 = document.getElementsByClassName("wrong-answer3");
const startButton = document.getElementById("Start-button");
const saveButton = document.getElementById("Save-score");
var timer = document.getElementById("timer");
var scoreEl = document.getElementById("score");
var initials = document.getElementById("text");
// correct.addEventListener("click", function(event){
localStorage.setItem("highschool", 1);
var example = localStorage.getItem("highschool");
console.log(example);
// })
var score = 5;
// timer
var timeleft = 60;

 function setTime() {
     var timerInterval = setInterval(function() {
         timeleft--;
         timer.textContent = timeleft;
         console.log(timeleft);
     },1000);
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
wrong3[0].addEventListener ("click", wronganswer2);
wrong3[1].addEventListener ("click", wronganswer2);
wrong3[2].addEventListener ("click", wronganswer2);
correct3.addEventListener ("click", correctanswer3);
saveButton.addEventListener("click", savescore);

function savescore() {
console.log(initials.value);
console.log(score);
scoreEl.textContent = score;

}


// brings up next question
function startQuiz(){
    document.getElementById("First-question").style.display = "block";
    document.getElementById("start-screen").style.display = "none";
    setTime();
    console.log("click");
}

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
    score--;
    timeleft =timeleft - 10;
}

function correctanswer2(){
    document.getElementById("Second-question").style.display = "none";
    document.getElementById("Third-question").style.display = "block";
    document.getElementById("right").style.display = "block";
}

function wronganswer2() {
    document.getElementById("Third-question").style.display = "block"
    document.getElementById("Second-question").style.display = "none";
    document.getElementById("incorrect").style.display = "block";
    score--;
    timeleft =timeleft - 10;
}

function correctanswer3(){
    document.getElementById("Third-question").style.display = "none"
    document.getElementById("End-screen").style.display = "block";
    document.getElementById("right").style.display = "block";
    scoreEl.textContent = score;
}

function wronganswer3() {
    document.getElementById("Third-question").style.display = "none"
    document.getElementById("End-screen").style.display = "block";
    document.getElementById("incorrect").style.display = "block";
    score--;
    timeleft =timeleft - 10;
    scoreEl.textContent = score;
}
