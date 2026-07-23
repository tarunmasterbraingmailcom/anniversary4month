/* ===========================
   PROJECT ANU - SCRIPT PART 1
=========================== */

// Hide loader
window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    if(loader){
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.transition = "1s";

            setTimeout(() => {
                loader.style.display = "none";
            },1000);

        },1500);
    }
});

// Enter Button

const enterBtn = document.getElementById("enter");

if (enterBtn) {
    enterBtn.addEventListener("click", () => {

        document.querySelector(".story").scrollIntoView({
            behavior: "smooth"
        });

    });
}

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

const petal=document.createElement("img");

petal.src="assets/images/petal.png";

petal.className="petal";

petal.style.left=Math.random()*100+"vw";

petal.style.width=(18+Math.random()*20)+"px";

petal.style.animationDuration=(6+Math.random()*5)+"s";

petal.style.animationDelay=Math.random()*2+"s";

document.body.appendChild(petal);

setTimeout(()=>{
    petal.remove();
},12000);

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
// ===== PREMIUM FIREWORKS ENGINE =====

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

function resizeFireworks(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeFireworks();
window.addEventListener("resize", resizeFireworks);

let particles = [];
let rockets = [];

function randomColor(){
    return `hsl(${Math.random()*360},100%,60%)`;
}

function launchRocket(){

    rockets.push({

        x: Math.random()*canvas.width,

        y: canvas.height,

        targetY: Math.random()*canvas.height*0.45+80,

        color: randomColor()

    });

}

function explode(x,y,color){

    for(let i=0;i<120;i++){

        const angle=Math.random()*Math.PI*2;

        const speed=Math.random()*6+2;

        particles.push({

            x:x,
            y:y,

            dx:Math.cos(angle)*speed,
            dy:Math.sin(angle)*speed,

            life:100,

            color:color

        });

    }

}

function animateFireworks(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    rockets.forEach((r,index)=>{

        r.y-=8;

        ctx.beginPath();
        ctx.arc(r.x,r.y,3,0,Math.PI*2);
        ctx.fillStyle=r.color;
        ctx.fill();

        if(r.y<=r.targetY){

            explode(r.x,r.y,r.color);

            rockets.splice(index,1);

        }

    });

    particles.forEach((p,index)=>{

        p.x+=p.dx;
        p.y+=p.dy;

        p.dy+=0.05;

        p.life--;

        ctx.beginPath();
        ctx.arc(p.x,p.y,2.5,0,Math.PI*2);
        ctx.fillStyle=p.color;
        ctx.fill();

        if(p.life<=0){

            particles.splice(index,1);

        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();
// ===== CELEBRATE BUTTON =====

const celebrateBtn = document.getElementById("celebrate");

if (celebrateBtn) {

    celebrateBtn.addEventListener("click", () => {

        let launched = 0;

        const show = setInterval(() => {

            launchRocket();

            launched++;

            if (launched >= 15) {
                clearInterval(show);
            }

        }, 250);

    });

}
function createBackgroundHeart(){

const heart=document.createElement("div");

heart.className="bgHeart";

heart.innerHTML="❤";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(12+Math.random()*28)+"px";

heart.style.animationDuration=(8+Math.random()*8)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
    heart.remove();
},16000);

}

setInterval(createBackgroundHeart,900);
const loveText = document.querySelector(".loveGlow");

if(loveText){

setInterval(()=>{

const rect = loveText.getBoundingClientRect();

const p = document.createElement("div");

p.className = "glowParticle";

p.style.left =
(rect.left + Math.random()*rect.width) + "px";

p.style.top =
(rect.top + Math.random()*rect.height) + "px";

document.body.appendChild(p);

setTimeout(()=>{
    p.remove();
},2500);

},180);

}
/* ===== PIN LOCK ===== */

const correctPin = "2503"; // Change this to your own PIN

let enteredPin = "";

const dots = document.querySelectorAll(".dot");
const screen = document.getElementById("passwordScreen");
const message = document.getElementById("pinMessage");

function updateDots(){
    dots.forEach((dot,index)=>{
        dot.classList.toggle("active",index<enteredPin.length);
    });
}

function pressPin(num){

    if(enteredPin.length>=4) return;

    enteredPin+=num;

    updateDots();

}

function clearPin(){

    enteredPin=enteredPin.slice(0,-1);

    updateDots();

}

function checkPin(){

    if(enteredPin===correctPin){

        screen.style.transition="0.8s";

        screen.style.opacity="0";

        setTimeout(()=>{

            screen.style.display="none";

        },800);

    }

    else{

        message.textContent="❌ Wrong PIN";

        enteredPin="";

        updateDots();

        setTimeout(()=>{

            message.textContent="";

        },1500);

    }

}
