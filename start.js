// select all the cells

const cells = document.getElementsByClassName("cells");

// select the player scores

const player1Score = document.getElementById("score-1");
const player2Score = document.getElementById("score-2");

// possibilities of winning combinations using individual cell indices

const winningCombs = [
  [0, 1, 2], // top row
  [3, 4, 5], //middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // bottom column
  [0, 4, 8], // diagonal from top-left to bottom-right
  [2, 4, 6], // Diagonal from top-right to bottom-left
];
