let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let userChoiceDisplay = document.querySelector("#youChose");
let compChoiceDisplay = document.querySelector("#compChose");
let msgDisplay = document.querySelector("#msg");
let userScoreDisplay = document.querySelector("#user-score");
let computerScoreDisplay = document.querySelector("#computer-score");

let userChoice;
let computerChoice;
let result;



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
         userChoice = choice.getAttribute("id");
        showingUserChoice(userChoice);
        genComputerChoice();
        showMsg();
        

    })
})

const showingUserChoice = (userChoice) => {
    userChoiceDisplay.innerText = userChoice

}

function genComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3 ) + 1;


    if(randomNumber === 1){
        computerChoice = "rock";

    }
    if(randomNumber === 2){
        computerChoice = "paper";

    }
    if(randomNumber === 3){
        computerChoice = "scissors";

    }

    compChoiceDisplay.innerHTML = computerChoice;
    
}

function showMsg () {
    if(computerChoice === userChoice){
        result = "Draw";
        msgDisplay.style.backgroundColor = "skyblue";
    }
    if(computerChoice === "rock" && userChoice === "paper"){
        result = "You win!, Paper wraps rock";
        msgDisplay.style.backgroundColor = "green";
        getUserScore();
    }
    if(computerChoice === "paper" && userChoice === "scissors"){
        result = "You win!, Scissors cut paper";
        msgDisplay.style.backgroundColor = "green";
        getUserScore();
    }
    if(computerChoice === "scissors" && userChoice === "paper"){
        result = "You lose!, Scissors cut paper";
        msgDisplay.style.backgroundColor = "red";  
        getCompScore();
    }
    if(computerChoice === "paper" && userChoice === "rock"){
        result = "You lose!, Paper wraps rock";
        msgDisplay.style.backgroundColor = "red";
        getCompScore();
    }
    if(computerChoice === "rock" && userChoice === "scissors"){
        result = "You lose!, Rock breaks scissors";
        msgDisplay.style.backgroundColor = "red";
        getCompScore();
    }
    if(computerChoice === "scissors" && userChoice === "rock"){
        result = "You win!, Your rock breaks scissors";
        msgDisplay.style.backgroundColor = "green";
        getUserScore();
    }
   
    msg.innerHTML = result;
    
}

let getUserScore = () => {
    let userWin = true;
     if(userWin){
        userScore++;
        userScoreDisplay.innerText = userScore;
    };
} 
    
    
let getCompScore = () => {
    let compwin = true;
    if(compwin){
        compScore++;
        computerScoreDisplay.innerText = compScore;

        
    }
    }


 



