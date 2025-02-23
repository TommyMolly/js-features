const cookie = document.getElementById("cookie"); 
const counter = document.getElementById("clicker__counter");  

let clicks = 0;

cookie.addEventListener("click", () => {
    clicks++;  
    counter.textContent = clicks; 
});
