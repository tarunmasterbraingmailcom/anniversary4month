const loader = document.getElementById("loader");
const enterBtn = document.getElementById("enterBtn");
const music = document.getElementById("bgMusic");
const timer = document.getElementById("timer");

// Hide loader
window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.transition = "1s";
        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);
    }, 1500);
});

// Start music after clicking Enter
enterBtn.addEventListener("click", () => {
    music.play().catch(() => {});
    document.querySelector(".message").scrollIntoView({
        behavior: "smooth"
    });
});

// Anniversary date (25 March 2026)
const startDate = new Date("2026-03-25T00:00:00");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    if (diff < 0) {
        timer.innerHTML = "Anniversary is coming soon ❤️";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    timer.innerHTML =
        `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}

setInterval(updateTimer, 1000);
updateTimer();

// Fade-in animation
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                [
                    { opacity: 0, transform: "translateY(50px)" },
                    { opacity: 1, transform: "translateY(0px)" }
                ],
                {
                    duration: 1000,
                    fill: "forwards"
                }
            );
        }
    });
});

sections.forEach((section) => {
    section.style.opacity = "0";
    observer.observe(section);
});

// Floating hearts
function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-40px";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.opacity = Math.random();
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";

    document.body.appendChild(heart);

    let pos = -40;

    const move = setInterval(() => {

        pos += 3;

        heart.style.bottom = pos + "px";

        heart.style.transform =
            `translateX(${Math.sin(pos / 40) * 20}px)`;

        if (pos > window.innerHeight + 100) {
            clearInterval(move);
            heart.remove();
        }

    }, 20);

}

setInterval(createHeart, 800);

// Sparkles
function sparkle() {

    const s = document.createElement("div");

    s.innerHTML = "✨";

    s.style.position = "fixed";
    s.style.left = Math.random() * window.innerWidth + "px";
    s.style.top = Math.random() * window.innerHeight + "px";
    s.style.pointerEvents = "none";
    s.style.fontSize = (10 + Math.random() * 15) + "px";

    document.body.appendChild(s);

    s.animate(
        [
            { opacity: 0 },
            { opacity: 1 },
            { opacity: 0 }
        ],
        {
            duration: 1500
        }
    );

    setTimeout(() => {
        s.remove();
    }, 1500);

}

setInterval(sparkle, 400);
