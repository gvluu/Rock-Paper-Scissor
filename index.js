const options = ["rock", "paper", "scissors"];

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
    // NOTE: Return = OUTCOME. Console.log = OUTPUT (for debugging)
    // NEED THIS RETURN STATEMENT! It was missing the whole time. That's why I kept only getting ELSE response. 
    // Prior, it was only logging a random response to the console but it did not return a value. Now it can be used in 'computerSelection' under 'playRound'.
}

function playRound(playerSelection, computerSelection) {
    // case-insensitive so ANY variation of rock, paper, or scissors will be recognized.
    playerSelection = playerSelection.toLowerCase()
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
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(playRound(playerSelection, computerSelection));

