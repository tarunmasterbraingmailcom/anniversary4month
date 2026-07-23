/* ===========================
   PROJECT ANU - SCRIPT PART 1
=========================== */

// Hide loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "1s";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 1500);
});

// Enter Button

const enterBtn = document.getElementById("enter");

enterBtn.addEventListener("click", () => {

    document.querySelector(".story").scrollIntoView({

        behavior:"smooth"

    });

});

// Anniversary Countdown

const targetDate = new Date("March 25, 2026 00:00:00").getTime();

const timer = document.getElementById("timer");

function updateCountdown(){

const now = new Date().getTime();

const distance = targetDate - now;

if(distance < 0){

timer.innerHTML = "❤️ Happy Anniversary ❤️";

return;

}

const days = Math.floor(distance / (1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((distance%(1000*60*60))/(1000*60));

const seconds = Math.floor((distance%(1000*60))/1000);

timer.innerHTML =

`${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

}

setInterval(updateCountdown,1000);

updateCountdown();
/* ===========================
   PROJECT ANU - SCRIPT PART 2
=========================== */

// Floating Hearts

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(20+Math.random()*25)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,800);

// Music

const music=document.querySelector("audio");

if(music){

enterBtn.addEventListener("click",()=>{

music.play().catch(()=>{});

});

}

// Celebrate Button

const celebrate=document.getElementById("celebrate");

celebrate.addEventListener("click",()=>{

alert("❤️ Happy Anniversary! ❤️\n\nWishing you endless happiness together.");

});

// Fade Animation

const sections=document.querySelectorAll("section");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade");

}

});

});

sections.forEach(section=>{

observer.observe(section);

});

// Gallery Click

const images=document.querySelectorAll(".photos img");

images.forEach(img=>{

img.addEventListener("click",()=>{

window.open(img.src,"_blank");

});

});
const envelope = document.getElementById("envelope");
const openLetter = document.getElementById("openLetter");

if(envelope && openLetter){
    openLetter.addEventListener("click", () => {
        envelope.classList.toggle("open");
    });
}
function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(5+Math.random()*5)+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},10000);

}

setInterval(createPetal,700);
const letter=document.getElementById("typewriter");

if(letter){

const text=letter.innerHTML;

letter.innerHTML="";

let i=0;

function type(){

if(i<text.length){

letter.innerHTML+=text.charAt(i);

i++;

setTimeout(type,35);

}

}

setTimeout(type,600);

}
const celebrateBtn = document.getElementById("celebrate");

if (celebrateBtn) {

celebrateBtn.addEventListener("click", () => {

const duration = 5000;
const animationEnd = Date.now() + duration;

const defaults = {
spread: 360,
ticks: 80,
gravity: 0.7,
decay: 0.94,
startVelocity: 30
};

const interval = setInterval(() => {

const timeLeft = animationEnd - Date.now();

if (timeLeft <= 0) {
clearInterval(interval);
return;
}

confetti({
...defaults,
particleCount: 6,
origin: {
x: Math.random(),
y: Math.random() * 0.5
}
});

}, 120);

});

}
