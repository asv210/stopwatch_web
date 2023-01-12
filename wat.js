let hours = 00;
let mins = 00;
let secs = 00;
let milis = 00;
let dihours=00;
let dimins=00;
let disecs=00;
let dimilis=00;
let stpw = document.querySelector(".stopw");
let status = "start";
let res = "stop";

let lapNow=null;
let my;
let rau=document.getElementById("rau");
let startbtn = document.querySelector(".start");
let lapbtn = document.querySelector(".lap");
let stopbtn = document.querySelector(".stop");

startbtn.addEventListener("click", (e) => {
  if (status === "start" && res === "stop") {
    my = window.setInterval(st, 10);
    document.querySelector(".start").innerHTML = "Reset";
    status = "reset";}
  else if (status === "reset" && res === "resume") {
    document.querySelector(".stop").innerHTML = "Stop";
    res = "stop";
  } else if ((status = "reset" && res === "stop")) {
    window.clearInterval(my);
    reset();
    document.querySelector(".start").innerHTML = "Start";
    status = "start";
    window.clearInterval(my);
  }
});

stopbtn.addEventListener("click", (e) => {
  if (res === "stop" && status === "reset") {
    window.clearInterval(my);
    document.querySelector(".stop").innerHTML = "Resume";
    res = "resume";
  } else if (status === "reset" && res === "resume") {
    my = window.setInterval(st, 10);
    document.querySelector(".stop").innerHTML = "Stop";
    res = "stop";
  }
});

function st() {
  milis++;
  disecs = secs < 10 ? "0" + secs.toString() : secs;
  dimins = mins < 10 ? "0" + mins.toString() : mins;
  dihours = hours < 10 ? "0" + hours.toString() : hours;
  dimilis = milis < 10 ? "0" + milis.toString() : milis;
  if (milis / 100 === 1) {
    secs++;
    milis = 00;

    if (secs / 60 === 1) {
      mins++;
      secs = 00;

      if (mins / 60 === 1) {
        hours++;
        minutes = 0;
      }
    }
  }

  stpw.innerHTML = `${dihours} : ${dimins} : ${disecs} : ${dimilis}`;
}

function reset() {
  milis = 00;
  secs = 00;
  mins = 00;
  hours = 00;
  stpw.innerHTML = "00 : 00 : 00 : 00";
}


lapbtn.addEventListener("click",lap)

function lap()
{
    
    lapNow = `<div class="lap" style="background-color:#f2dc96;font-family:montserrat;border-radius:13px">${hours} : ${mins} : ${secs} : ${milis}</div><hr>`;
    rau.innerHTML += lapNow;
  
} 