console.log("sup dude");

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

console.log(computerPlay());

/*let playerChoice=prompt("Enter Rock, Paper, or Scissors").toLowerCase();
let computerChoice=computerPlay(); */

/* function playRound(playerSelection, computerSelection){
    if (playerSelection=="rock" && computerSelection=="paper"){
       return console.log("I picked "+computerSelection+ " , you lose!")
    }
    else if (playerSelection=="paper" && computerSelection=="scissors"){
        return console.log("I picked "+computerSelection+ " , you lose!")
    }
    else if (playerSelection=="scissors" && computerSelection=="rock"){
        return console.log("I picked " +computerSelection+ " , you lose!")
    }
    else if (playerSelection==computerSelection){
        return console.log("We both picked " + playerSelection + " , it's a tie!") 
    }
    else {
        return console.log("I picked " +computerSelection + " and you picked " + playerSelection + " , you win!")
    }
} */

function playRound(playerSelection, computerSelection){
    if (playerSelection=="rock" && computerSelection=="paper"){
       return console.log("I picked "+computerSelection+ " , you lose!")
    }
    else if (playerSelection=="paper" && computerSelection=="scissors"){
        return console.log("I picked "+computerSelection+ " , you lose!")
    }
    else if (playerSelection=="scissors" && computerSelection=="rock"){
        return console.log("I picked " +computerSelection+ " , you lose!")
    }
    else if (playerSelection==computerSelection){
        return console.log("We both picked " + playerSelection + " , it's a tie!") 
    }
    else {
        return console.log("I picked " +computerSelection + " and you picked " + playerSelection + " , you win!")
    }
}

function game(){
    for (i=0; i<5; i++){
    let playerChoice=prompt("Enter Rock, Paper, or Scissors").toLowerCase();
    let computerChoice=computerPlay();
    playRound(playerChoice, computerChoice);
    }
}

game();

/*bconsole.log(game(playerChoice, computerChoice));

/* console.log(playRound(playerChoice, computerChoice)); */

