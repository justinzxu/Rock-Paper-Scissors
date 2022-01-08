//Event Listener for Buttons

const rockBtn=document.querySelector(".rock");
const paperBtn=document.querySelector(".paper");
const scissorsBtn=document.querySelector(".scissors");
const playerScore=document.querySelector(".player-score");
const cpuScore=document.querySelector(".cpu-score");
const gameRound=document.querySelector(".round");
const playerChoice=document.querySelector(".pchoice");
const cpuChoice=document.querySelector(".cchoice");

let round=0;
let pScore=0;
let cScore=0;

rockBtn.addEventListener('mouseup', function(){
    playerChoice.innerHTML="rock";
    let result=playRound("rock");
    game(result);
});

paperBtn.addEventListener('mousedown', function(){
    playerChoice.innerHTML="paper";
    let result=playRound("paper");
    game(result);
});

scissorsBtn.addEventListener('mousedown', function(){
    playerChoice.innerHTML="scissors";
    let result=playRound("scissors");
    game(result);
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
    //win=0;
    //loss=1;
    //tie=2;
    let computerSelection=computerPlay();
    cpuChoice.innerHTML=`${computerSelection}`;
    if (playerSelection==="rock" && computerSelection==="paper"){
        return 1;
    }
    else if (playerSelection==="paper" && computerSelection==="scissors"){
        return 1;
    }
    else if (playerSelection==="scissors" && computerSelection==="rock"){
        return 1;
    }
    else if (playerSelection===computerSelection){
        return null;
    }
    else {
        return 0;
    }
}

function checkRound(){
    if (round===5){
        gameRound.innerHTML= `<h3>Round ${newRound}/5</h3>`;
        if (pScore>cScore){
            alert("you win!");
        }
        else {alert("I win!")};
        newRound=0;
        round=newRound;
        newPscore=0;
        newCscore=0;
        playerScore.innerHTML= `${newPscore}`;
        cpuScore.innerHTML=`${newCscore}`;
        pScore=newPscore;
        cScore=newCscore;
    } 
}

function game(input){
    if (input===0){
        newPscore=pScore+1;
        playerScore.innerHTML= `${newPscore}`;
        console.log("win");
        pScore=newPscore;
        newRound=round+1;
        gameRound.innerHTML=`<h3>Round ${newRound}/5</h3>`;
        round=newRound;
        checkRound();
    }
    else if (input===1){
        newCscore=cScore+1;
        cpuScore.innerHTML=`${newCscore}`;
        console.log("lose");
        cScore=newCscore;
        newRound=round+1;
        gameRound.innerHTML=`<h3>Round ${newRound}/5</h3>`;
        round=newRound;
        checkRound();      
    }
    else if (input===null){
        console.log("tie");
        newRound=round+1;
        gameRound.innerHTML=`<h3>Round ${newRound}/5</h3>`;
        round=newRound;
        checkRound();
    }
}

//function to play game 5 times

/*
function game(playerInput){
    //for (i=0; i<5; i++){
        let playerChoice=playerInput;
        let result=playRound(playerChoice);
        //let playerScore=0;
        //let cpuScore=0;
        //let round=i+1;
        //let round=0;
        //for (i=0; i<5; i++){
        //playerChoice=prompt("Enter Rock, Paper, or Scissors").toLowerCase();
        //let computerChoice=computerPlay();
        playRound(playerChoice);
        if (result===0){
            console.log("win");
        }
        else if (result===1) {
            console.log("loss");
        }
        else {
            console.log("tie");
        }
    }        
//}
*/

/*
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
*/