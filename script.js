//Event Listener for Buttons

const rockBtn=document.querySelector(".rock");
const paperBtn=document.querySelector(".paper");
const scissorsBtn=document.querySelector(".scissors");

rockBtn.addEventListener('mousedown', function(){
    playRound("rock");
});

paperBtn.addEventListener('mousedown', function(){
    playRound("paper");
});

scissorsBtn.addEventListener('mousedown', function(){
    playRound("scissors");
});

//RNG for computer to make choice

function computerPlay(){
    let computerResult=Math.floor(Math.random()*3);
    if (computerResult==0){
        return 'rock';
    }
    else if(computerResult==1){
        return 'paper';
    }
    else {return 'scissors'};
}

//Plays a single round, decides winner, loser, tie

function playRound(playerSelection){
    let computerSelection=computerPlay();
    if (playerSelection==="rock" && computerSelection==="paper"){
        return console.log("I picked "+computerSelection+ " , you lose!")
    }
    else if (playerSelection==="paper" && computerSelection==="scissors"){
        return console.log("I picked "+computerSelection+ " , you lose!")
    }
    else if (playerSelection==="scissors" && computerSelection==="rock"){
        return console.log("I picked " +computerSelection+ " , you lose!")
    }
    else if (playerSelection===computerSelection){
        return console.log("We both picked " + playerSelection + " , it's a tie!") 
    }
    else {
        return console.log("I picked " +computerSelection + " and you picked " + playerSelection + " , you win!")
    }
}

//function to play game 5 times

function game(){
    //for (i=0; i<5; i++){
    playerChoice=prompt("Enter Rock, Paper, or Scissors").toLowerCase();
    //let computerChoice=computerPlay();
    playRound(playerChoice);
}

