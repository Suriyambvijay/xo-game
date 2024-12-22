<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic-Tac-Toe</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Tic-Tac-Toe</h1>
        <div id="player-info">
            <input type="text" id="playerX" placeholder="Enter Player X Name">
            <input type="text" id="playerO" placeholder="Enter Player O Name">
            <button onclick="startGame()">Start Game</button>
        </div>
        <div id="board" class="hidden">
            <div class="cell" id="cell-0" onclick="makeMove(0)"></div>
            <div class="cell" id="cell-1" onclick="makeMove(1)"></div>
            <div class="cell" id="cell-2" onclick="makeMove(2)"></div>
            <div class="cell" id="cell-3" onclick="makeMove(3)"></div>
            <div class="cell" id="cell-4" onclick="makeMove(4)"></div>
            <div class="cell" id="cell-5" onclick="makeMove(5)"></div>
            <div class="cell" id="cell-6" onclick="makeMove(6)"></div>
            <div class="cell" id="cell-7" onclick="makeMove(7)"></div>
            <div class="cell" id="cell-8" onclick="makeMove(8)"></div>
        </div>
        <div id="controls" class="hidden">
            <button onclick="restartGame()">Restart</button>
            <button onclick="pauseOrResumeGame()" id="resume-pause-button">Pause</button>
        </div>
        <div id="message" class="hidden"></div>
    </div>

    <!-- Winner Page -->
    <div id="winner-page" class="hidden">
        <h1 id="winner-message"></h1>
        <button onclick="goBack()">Play Again</button>
    </div>

    <script src="script.js"></script>
</body>
</html>
