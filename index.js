const options = ["rock", "paper", "scissors"];
// Get computer to return random 'rock', 'paper', or 'scissor
function getComputerChoice() {
    const computerChoice = options[Math.floor(Math.random() * options.length)];
    // to generate random integer between 0 & length of options
    // could also have done * 3 since that's how many elements in the array
    /* could also have done this if no const:
      if (randomInt === 0) {
        return "rock";
      } else if (randomInt === 1) {
        return "paper";
      } else {
        return "scissors";
      }  */
    console.log(computerChoice)
    return computerChoice; 
    /* NOTE: Return = OUTCOME. Console.log = OUTPUT (for debugging)
    NEED THIS RETURN STATEMENT! It was missing the whole time. That's why I kept only getting ELSE response. 
    Prior, it was only logging a random response to the console but it did not return a value. Now it can be used in 'computerSelection' under 'playRound'. */
}

// Create function that plays single round of RPS
function playRound(playerSelection, computerSelection) {
    
    let tie = "It's a tie! You selected " + playerSelection + " and the computer chose " + computerSelection + "!"
    let rockLosePaper = "You Lose! You selected " + playerSelection + " and the computer chose " + computerSelection + "!"
    let rockBeatScissors = "You Win! You selected " + playerSelection + " and the computer chose " + computerSelection + "!"
    let paperLoseScissors = "You Lose! You selected " + playerSelection + " and the computer chose " + computerSelection + "!"
    let paperBeatRock = "You Win! You selected " + playerSelection + " and the computer chose " + computerSelection + "!"
    let scissorLoseRock = "You Lose! You selected " + playerSelection + " and the computer chose " + computerSelection + "!"
    let scissorBeatPaper = "You Win! You selected " + playerSelection + " and the computer chose " + computerSelection + "!"

    if (playerSelection === computerSelection) {
        return tie;
    } else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        return rockLosePaper;
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        return rockBeatScissors;
    } else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        return paperLoseScissors;
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        return paperBeatRock;
    } else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        return scissorLoseRock;
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        return scissorBeatPaper;
    } else {
    // If invalid playerSelection
    return("Invalid selection! Please choose rock, paper, or scissors.")
    }
}                                                        



// Allow player 5 rounds w/ score at end. Note: i could also start at 1
function game() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 1;
  for (let i = 0; i < 5; i++) {
      let playerSelection;
      while (!playerSelection) {
        playerSelection = prompt(`Round ${round}: Choose Rock, Paper, or Scissors`).toLowerCase();
        if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
          alert('Invalid choice. Please choose Rock, Paper, or Scissors.');
          playerSelection = null;
        }
      }
  
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);

    console.log(`Round ${round}: ${result}`);

    if (result.startsWith('You Win')) {
      playerScore++;
    } else if (result.startsWith('You Lose')) {
      computerScore++;
    }
    
    round++;
  }

  if (playerScore > computerScore) {
    console.log(`You win! Final score: ${playerScore}-${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`You lose! Final score: ${playerScore}-${computerScore}`);
  } else {
    console.log(`It's a tie! Final score: ${playerScore}-${computerScore}`);
  }
}

game();