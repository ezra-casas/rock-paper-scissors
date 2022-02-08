
// TODO: Needs to verify winner on each round


const choices = ['rock', 'paper', 'scissors']
function computerPlay(){
    return choices[Math.floor(Math.random() * choices.length)];
}

function game(playerChoice, computer){
    playerChoice = playerChoice.toLowerCase();
    if(playerChoice === computer){
        return 'Tie!';
    }  
    // Rock:
    if(playerChoice === 'rock'){
        if(computer === 'paper'){
            return 'You Lost!';
        }else if(computer === 'scissors'){
            return 'You Win!';
        }
    }
    // paper: 
    if(playerChoice === 'paper'){
        if(computer === 'scissors'){
            return 'You Lost!';
        }else if(computer === 'rock'){
            return 'You Win!';
        }
    }
    // Scissors:
    if(playerChoice === 'scissors'){
        if(computer === 'rock'){
            return `'You Lost!'`;
        }else if(computer === 'paper'){
            return 'You Win!';
        }
    }
}


for(let i = 1; i <= 5; i++){
    let userInput = prompt('Please enter your choice');
    console.log(`Round: ${i}: ${game(userInput, computerPlay())}`)
}