const timerElement = document.getElementById("timer");

let timeLeft = 40;
timerElement.textContent = timeLeft; 

const countdown = setInterval(() => {
    if (timeLeft === 0) {
        clearInterval(countdown); 
        alert("Вы победили в конкурсе!"); 
    } else {
        timeLeft--; 
        timerElement.textContent = timeLeft; 
    }
}, 1000);