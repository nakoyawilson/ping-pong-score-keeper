const playerOneScore = document.querySelector("#playerOneScore");
const playerOneBtn = document.querySelector("#playerOneBtn");
const playerTwoScore = document.querySelector("#playerTwoScore");
const playerTwoBtn = document.querySelector("#playerTwoBtn");
const resetBtn = document.querySelector("#resetBtn");
const maxScoreDropdown = document.querySelector("#maxScore");
let endScore = 5;

maxScoreDropdown.addEventListener("change", function (e) {
    endScore = e.target.options[e.target.options.selectedIndex].value;
    endScore = parseInt(endScore);
})

playerOneBtn.addEventListener("click", function () {
    let score = parseInt(playerOneScore.innerText);
    if (score !== endScore) {
        score++;
        playerOneScore.innerText = score;
        if (score === endScore) {
            playerOneScore.classList.add("text-success");
            playerTwoScore.classList.add("text-danger");
            playerOneBtn.disabled = true;
            playerTwoBtn.disabled = true;
        }
    }
})

playerTwoBtn.addEventListener("click", function () {
    let score = parseInt(playerTwoScore.innerText);
    if (score !== endScore) {
        score++;
        playerTwoScore.innerText = score;
        if (score === endScore) {
            playerTwoScore.classList.add("text-success");
            playerOneScore.classList.add("text-danger");
            playerOneBtn.disabled = true;
            playerTwoBtn.disabled = true;
        }
    }
})

resetBtn.addEventListener("click", function () {
    playerOneScore.innerText = "0";
    playerOneScore.className = ""
    playerTwoScore.innerText = "0";
    playerTwoScore.className = ""
    playerOneBtn.disabled = false;
    playerTwoBtn.disabled = false;
})