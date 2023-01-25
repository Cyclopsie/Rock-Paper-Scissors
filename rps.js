const buttAll = document.querySelectorAll('button');

let computerScore = 0;
let drawScore = 0;
let playerScore = 0;

let pWinner = "You are the Champion!";
let cWinner = "You are DEFEATED!!!!";
let dWinner = "The game is a DRAWWWWW!";

//shouldn't change
const computerChoice = ['rock', 'paper', 'scissors']; 

//let computerSelection = '';

//computer selection
//function computerPlay() {
  //  computerChoice[Math.round(Math.random() * 2)];
   // console.log(computerSelection);
//}

function stopButton() {
    buttAll.forEach((button) => {
        button.disabled
    });
}






////start of game() funtion);
function game() {
    /////for loop game of 5////
    for ( let i = 1; i < 6; i++) {
        //console.log(computerScore + "\n" + drawScore + "\n" + playerScore + "\n" + i + "\n");

        let playerSelection = '';

        
        //button selection
        console.log(playerSelection);
        
        let computerSelection = computerChoice[Math.round(Math.random() * 2)];
        console.log(computerSelection);
        
                        
        if (
            ((playerScore >= 3) && (i == 5)) || 
            ((playerScore > computerScore) && (i == 5))){
                stopButton();
                return pWinner;
        } else if (
            ((computerScore >= 3) && (i == 5)) ||
            ((playerScore < computerScore) && (i == 5))){
                stopButton();
                return cWinner;
        } else if (
            ((drawScore >= 3) && (i == 5)) ||
            ((playerScore = computerScore) && (i == 5)) ||
            ((drawScore > playerScore) && (drawScore > computerScore) && (i == 5))){
                stopButton();
                return dWinner;
        } else {  
            //play another round
            playRound(playerSelection, computerSelection);
        }
    }  
}
/////end of game() and loop////
                  

/////beginning of playRound///////
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
            drawScore++; //TIE
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'scissors' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'rock')){
        //Player Wins, computer loses
            playerScore++; 
    } else {
            computerScore++; 
    } 
                
    console.log("Player score is " + playerScore);
                
    console.log("Computer score is " + computerScore);
                
    console.log("Tie rounds is " + drawScore);       
}
///////end of playRound//////

//have to call the function to start the game


//assigning button selection
buttAll.forEach((button) => {
    button.addEventListener('click', () => {
        if (clickcount == 1) {
    playerSelection = button.id
    console.log(button.id);
    game();
        } else {
            return 'ERROR';
        }
    });
});
        



