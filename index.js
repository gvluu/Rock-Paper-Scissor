const options = ["rock", "paper", "scissors"];

function getComputerChoice () {
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
    console.log(computerChoice);
}

function playRound(playerSelection, computerSelection) {
    // case-insensitive so ANY variation of rock, paper, or scissors will be recognized.
    playerSelection = playerSelection.toLowerCase();
    let tie = "It's a tie! You selected " + playerSelection + " and the computer chose " + computerSelection + "!";
    let rockLosePaper = "You Lose! You selected " + playerSelection + " and the computer chose " + computerSelection + "!";
    let rockBeatScissors = "You Win! You selected " + playerSelection + " and the computer chose " + computerSelection + "!";
    let paperLoseScissors = "You Lose! You selected " + playerSelection + " and the computer chose " + computerSelection + "!";
    let paperBeatRock = "You Win! You selected " + playerSelection + " and the computer chose " + computerSelection + "!";
    let scissorLoseRock = "You Lose! You selected " + playerSelection + " and the computer chose " + computerSelection + "!";
    let scissorBeatPaper = "You Win! You selected " + playerSelection + " and the computer chose " + computerSelection + "!";

    if (playerSelection === 'rock') {
      if (computerSelection === 'paper') {
        return rockLosePaper;
      } else if (computerSelection === 'scissors') {
        return rockBeatScissors;
      } else {
        return tie;
      }
    } else if (playerSelection === 'paper') {
      if (computerSelection === 'scissors') {
        return paperLoseScissors;
      } else if (computerSelection === 'rock') {
        return paperBeatRock;
      } else {
        return tie;
      }
    } else if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
        return scissorLoseRock;
      } else if (computerSelection === 'paper') {
        return scissorBeatPaper;
      } else {
        return tie;
      }
    } else {
      // If invalid playerSelection
      return 'Invalid selection! Please choose Rock, Paper, or Scissors.';
    }
  }
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));


  // to be able to play 5 rounds. i could also start at 1
  function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(play(playerSelection, computerSelection));
    }
  }
    