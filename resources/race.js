const boxes = document.querySelectorAll(".bars");
const num = "0%";
let score1 = 0;
let score2 = 0;
let score3 = 0;



function race() {
  //resets the banner
  document.querySelector("h1").style.fontSize = 0;
  //resets width so they're equal.
  for(var i = 0; i <= 2; i++) {
  .bars[i].style.width = num;
 };
  //paused for 3 seconds so we can see the change.
  setTimeout(width, 3000);
};

//gets the race going.
function width() {
  document.getElementById("box1").style.width =   Math.floor(Math.random() * 100) + 1 + '%';
  document.getElementById("box2").style.width = Math.floor(Math.random() * 100) + 1 + '%';
  document.getElementById("box3").style.width = Math.floor(Math.random() * 100) + 1 + '%';

  setTimeout(win, 1000);
};

//
function win() {
  var b1 = document.getElementById("box1").style.width;
  var b2 = document.getElementById("box2").style.width;
  var b3 = document.getElementById("box3").style.width;

  if (b1 > b2 & b1 > b3) {
    document.querySelector("span").innerHTML = "b1";
    document.querySelector("span").style.color = "red";
    document.querySelector("h1").style.fontSize = "50px";
    rscore += 1;
    document.getElementById("red").innerHTML = rscore;
  } else if (b2 > b1 & b2 > b3) {
    document.querySelector("span").innerHTML = "b2";
    document.querySelector("span").style.color = "blue";
   document.querySelector("h1").style.fontSize = "50px";
    bscore += 1;
    document.getElementById("blue").innerHTML = bscore;
  } else if (b3 > b1 & b3 > b2) {
    document.querySelector("span").innerHTML = "b3";
    document.querySelector("span").style.color = "green";
   document.querySelector("h1").style.fontSize = "50px";
    gscore += 1;
    document.getElementById("green").innerHTML = gscore;
  } else {
    document.querySelector("h1").innerHTML = "TIE GAME";
   document.querySelector("h1").style.fontSize = "50px";
  };

  document.getElementById("scorecard").style.display = "block";

};

//resets the bars back to origins.
function reset() {
  document.querySelector("h1").style.fontSize = 0;

  document.getElementById("scorecard").style.display = "none";

  document.getElementById("box1").style.width = "10%";
  document.getElementById("box2").style.width = "30%";
  document.getElementById("box3").style.width = "60%";
};
