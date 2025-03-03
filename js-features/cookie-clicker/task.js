const cookie = document.getElementById("cookie"); 
const counter = document.getElementById("clicker__counter");  

let clicks = 0;

cookie.addEventListener("click", () => {
    clicks++;  
    counter.textContent = clicks;
    
    cookie.style.transform = "scale(1.2)";

    setTimeout(() => {
        cookie.style.transform = "scale(1)";
    }, 100);
});
