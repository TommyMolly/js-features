const deadCounter = document.getElementById("dead");
const lostCounter = document.getElementById("lost");

let dead = 0;
let lost = 0;

const holes = document.querySelectorAll(".hole");

holes.forEach(hole => {
    hole.addEventListener("click", () => {
        if (hole.classList.contains("hole_has-mole")) {
            dead++;
            deadCounter.textContent = dead;  
            hole.classList.remove("hole_has-mole");  
        } else {
            lost++;
            lostCounter.textContent = lost;  
        }

        if (dead >= 10) {
            alert("Вы победили!");
            resetGame();
        } else if (lost >= 5) {
            alert("Вы проиграли!");
            resetGame();
        }
    });
});

function resetGame() {
    dead = 0;
    lost = 0;
    deadCounter.textContent = dead;
    lostCounter.textContent = lost;
}
