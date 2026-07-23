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
