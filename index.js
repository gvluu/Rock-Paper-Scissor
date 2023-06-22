// Grab HTML elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const winnerElement = document.getElementById('winner');
const resetBtn = document.getElementById('reset');

// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Create computer's choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Play a round
function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  
  // Determine the winner
  if (playerChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    return 'You win!';
  } else {
    computerScore++;
    return 'Computer wins!';
  }
}

// Update scores and check for a winner
function updateScoreboard() {
    playerScoreElement.textContent = 'Player: ' + playerScore;
    computerScoreElement.textContent = 'Computer: ' + computerScore;
  
    if (playerScore === 5 || computerScore === 5) {
      // Game over
      if (playerScore === 5) {
        winnerElement.textContent = 'Congratulations! You won the game!';
      } else {
        winnerElement.textContent = 'Computer won the game!';
      }
      resetBtn.style.display = 'block';
      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorsBtn.disabled = true;
    }
  }
  
  // Reset the game
  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = 'Player: 0';
    computerScoreElement.textContent = 'Computer: 0';
    winnerElement.textContent = '';
    resetBtn.style.display = 'none';
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
  }
  
  // Event listeners for player's choices
  rockBtn.addEventListener('click', function() {
    const result = playRound('rock');
    winnerElement.textContent = result;
    updateScoreboard();
  });
  
  paperBtn.addEventListener('click', function() {
    const result = playRound('paper');
    winnerElement.textContent = result;
    updateScoreboard();
  });
  
  scissorsBtn.addEventListener('click', function() {
    const result = playRound('scissors');
    winnerElement.textContent = result;
    updateScoreboard();
  });
  
  // Event listener for reset button
  resetBtn.addEventListener('click', resetGame);
  
