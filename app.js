
const userInput = document.createElement('h3');
const computerChoice = document.createElement('h3');
const result = document.createElement('h2');
const gameSpace = document.getElementById('gamebox');
gameSpace.append(userInput, computerChoice, result);

const rps = ['rock', 'paper', 'scissors'];
let player;
let computer;



function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * rps.length);
    computer = rps[randomNum];
    computerChoice.innerHTML = 'Computer: ' + computer;

    
} 

for(i = 0;  i < 3; i++){
    const button = document.createElement('button');
    button.innerHTML = rps[i];
    gameSpace.append(button);
    document.addEventListener('click', (event) => {
         player = event.target.innerHTML;
         userInput.innerHTML = 'Player: ' + player
        getComputerChoice(); 
        getResult();
    })
}

function getResult(){
    switch(player + computer){
        case('rockpaper'):
        case('scissorsrock'):
        case('paperscissors'):
            result.innerHTML = 'YOU LOSE, TRY AGAIN !!!';
            break;
        case('paperrock'):
        case('rockscissors'):
        case('scissorspaper'):
            result.innerHTML = 'YOU WIN, CONGRATS !!!';
            break;
        case('paperpaper'):
        case('scissorsscissors'):
        case('rockrock'):
            result.innerHTML = 'ITS A DRAW, STAND DOWN !!!'
            break;
    }
}