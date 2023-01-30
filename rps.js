const buttAll = document.querySelectorAll('button');

let computerScore = 0;
let drawScore = 0;
let playerScore = 0;
let gameScore = 0;


let pWinner = "You are the Champion!";
let cWinner = "You are DEFEATED!!!!";
let dWinner = "The game is a DRAWWWWW!";

//shouldn't change
const computerChoice = ['rock', 'paper', 'scissors']; 

//identifying playerSelection with Button ID

buttAll.forEach((button) =>
button.addEventListener("click", function(e) {
    //console.log(this);
   // console.log(button.id);
    playerSelection = this.id;
    console.log("Player Selection = " + playerSelection);
    
    updateC();
    updateD();
    updateP();
    //checking the score before using the button clicked
    if (drawScore >= 5) {
           /// stopGame();
            declareDWinner();
            return dWinner;
   
    } else if (playerScore >= 5 && playerScore > computerScore) {
           // stopGame();
            declarePWinner();
            return pWinner;
                
    } else if (computerScore >= 5 && playerScore < computerScore) {
           // stopGame();
            declareCWinner();
            return cWinner;
                
    } else {
        //not enought rounds allows for button
        playRound(playerSelection);
    }
})
);

/////beginning of playRound///////
function playRound(playerSelection) {
    //computer selection
    
    let computerSelection = computerChoice[Math.round(Math.random() * 2)];
    console.log("Computer = " + computerSelection);
    document.querySelector('.round').textContent = "Your weapon is " + playerSelection.toUpperCase() + " against " + (computerSelection.toUpperCase() )+ ".";
    
    //round rules
    if (playerSelection === computerSelection){
            drawScore++; //TIE
            gameScore++;
            
            updateD();
           
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') || 
        (playerSelection === 'scissors' && computerSelection === 'paper') || 
        (playerSelection === 'paper' && computerSelection === 'rock')){
        //Player Wins, computer loses
            playerScore++; 
            updateP();
            
            gameScore++;
           
    } else {
            computerScore++; 
            gameScore++;
            
            updateC();
           
    } 
    
    
    
    console.log("Player score is " + playerScore);
                
    console.log("Computer score is " + computerScore);
                
    console.log("Tie rounds is " + drawScore);     
    
    console.log("Game round is " + gameScore);
}
///////end of playRound//////



function stopGame() {
    alert("The game is over. Reload to restart.");
   
}

function updateP() {
    document.querySelector('.pScore').textContent = "Player score = " + playerScore + "!";
}
function updateC() {
    document.querySelector('.cScore').textContent = "Computer score = " + computerScore + "!";

}
function updateD() {
    document.querySelector('.dScore').textContent = "Tied by " + drawScore + "!";
}

function declareCWinner() {
    document.querySelector('.round').textContent = cWinner;
    
}

function declarePWinner() {
    document.querySelector('.round').textContent = pWinner;
    
}
function declareDWinner() {
    document.querySelector('.round').textContent = dWinner;
    
}
