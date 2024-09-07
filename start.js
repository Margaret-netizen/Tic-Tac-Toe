const cells = document.querySelectorAll(".cell");
// update on who's turn and winner
const upStatus = document.getElementById('status-update')
const firstp = document.getElementById('start-game')

// who is player
// let currentPlayer = 'cross';








// let currentPlayer = null; // Start with no player selected
// let gofirst = document.getElementById('whowillgof')
// function whoIsPlayer() {
//   const players = document.querySelectorAll(".theplayer");
  
//   players.forEach(player => {
//     player.addEventListener('click', (e) => {
//       // Set current player to the clicked player's ID (either 'circle' or 'cross')
//       currentPlayer = e.target.closest('.theplayer').id;
//       alert(`The Starting player is: ${currentPlayer}`);
//       gofirst.textContent = `${currentPlayer} will go first!`;
//     });
//   });
// }
// whoIsPlayer();  













  // the game
  function startGame(){
    cells.forEach(cell =>{
      cell.addEventListener('click', crossCircle)
      upStatus.textContent = `${currentPlayer} go first`
  })
  }
  startGame()
  
  function crossCircle(e){
  e.target.classList.add(currentPlayer)
  if(currentPlayer === 'circle'){
    currentPlayer = 'cross'
  } else{
    currentPlayer = 'circle'
  }
  upStatus.textContent = `it is ${currentPlayer}'s turn`
  e.target.removeEventListener('click', crossCircle)
  checkWinner()
  }
  
  function checkWinner() {
   // possibilities of winning combinations using individual cell indexes
  const winningCombs = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  let estaWinner = false;
  winningCombs.forEach(poss => {
    const crosswins = poss.every(cel => cells[cel].classList.contains('cross'));
    if (crosswins){
      estaWinner = true;
      upStatus.textContent = ` cross is winner`
        //stop playing
        end()
    }
  })
  winningCombs.forEach(poss => {
    const circlewins = poss.every(cel => cells[cel].classList.contains('circle'));
    if (circlewins){
      estaWinner = true;
      upStatus.textContent = ` circle is winner`
        //stop playing
        end()
    }
  })
  // draw
  if (!estaWinner) {
    const isDraw = [...cells].every(cell => cell.classList.contains('cross') || cell.classList.contains('circle'));
    if (isDraw) {
      upStatus.textContent = 'It\'s a draw!';
      end();
    }
  }
  }
  
  function end(){
    cells.forEach(box => box.replaceWith(box.cloneNode(true)));
  }