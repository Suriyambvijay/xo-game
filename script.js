let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = false;
let isGamePaused = false;
let playerXName = "";
let playerOName = "";

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const startGame = () => {
    playerXName = document.getElementById("playerX").value || "Player X";
    playerOName = document.getElementById("playerO").value || "Player O";
    isGameActive = true;
    document.getElementById("player-info").classList.add("hidden");
    document.getElementById("board").classList.remove("hidden");
    document.getElementById("controls").classList.remove("hidden");
    document.getElementById("message").classList.remove("hidden");
    document.getElementById("message").innerText = `${playerXName}'s turn (X)`;
};

const makeMove = (index) => {
    if (board[index] === "" && isGameActive && !isGamePaused) {
        board[index] = currentPlayer;
        document.getElementById(`cell-${index}`).innerText = currentPlayer;
        checkResult();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        if (isGameActive) {
            document.getElementById("message").innerText = 
                `${currentPlayer === "X" ? playerXName : playerOName}'s turn (${currentPlayer})`;
        }
    }
};

const checkResult = () => {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        const winnerName = currentPlayer === "X" ? playerXName : playerOName;
        isGameActive = false;
        showWinnerPage(`${winnerName} wins!`);
        return;
    }

    if (!board.includes("")) {
        isGameActive = false;
        showWinnerPage("It's a draw!");
    }
};

const restartGame = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    isGameActive = true;
    isGamePaused = false;
    document.getElementById("message").innerText = `${playerXName}'s turn (X)`;
    document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
    document.getElementById("resume-pause-button").innerText = "Pause";
};

const pauseOrResumeGame = () => {
    if (isGamePaused) {
        isGamePaused = false;
        document.getElementById("resume-pause-button").innerText = "Pause";
        document.getElementById("message").innerText = 
            `${currentPlayer === "X" ? playerXName : playerOName}'s turn (${currentPlayer})`;
    } else {
        isGamePaused = true;
        document.getElementById("resume-pause-button").innerText = "Resume";
        document.getElementById("message").innerText = "Game Paused";
    }
};

const showWinnerPage = (message) => {
    document.getElementById("winner-message").innerText = message;
    document.querySelector(".container").classList.add("hidden");
    document.getElementById("winner-page").classList.remove("hidden");
};

const goBack = () => {
    document.getElementById("winner-page").classList.add("hidden");
    document.querySelector(".container").classList.remove("hidden");
    restartGame();
};
