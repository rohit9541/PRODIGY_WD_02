let startTime = 0;
let elapsedTime = 0;
let timerInterval;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateTime() {
    const currentTime = Date.now() - startTime + elapsedTime;

    let minutes = Math.floor(currentTime / 60000);
    let seconds = Math.floor((currentTime % 60000) / 1000);
    let milliseconds = Math.floor((currentTime % 1000) / 10);

    display.innerHTML =
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}:` +
        `${String(milliseconds).padStart(2, "0")}`;
}

document.getElementById("start").onclick = function () {
    clearInterval(timerInterval);
    startTime = Date.now();
    timerInterval = setInterval(updateTime, 10);
};

document.getElementById("pause").onclick = function () {
    clearInterval(timerInterval);
    elapsedTime += Date.now() - startTime;
};

document.getElementById("reset").onclick = function () {
    clearInterval(timerInterval);
    startTime = 0;
    elapsedTime = 0;
    display.innerHTML = "00:00:00";
    laps.innerHTML = "";
};

document.getElementById("lap").onclick = function () {
    if (display.innerHTML !== "00:00:00") {
        const li = document.createElement("li");
        li.innerHTML = "Lap " + (laps.children.length + 1) + " : " + display.innerHTML;
        laps.appendChild(li);
    }
};