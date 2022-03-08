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

function app(){

    const getDiv = document.getElementById('root');
    const createFirstBtn = document.createElement('button');
    const createSecondBtn = document.createElement('button');
    const createThirdBtn = document.createElement('button');

    // setting textContent
    createFirstBtn.textContent = 'Rock';
    createSecondBtn.textContent = 'Paper';
    createThirdBtn.textContent = 'Scissors';
    
    // Set class
    createFirstBtn.classList.add('rock');
    createSecondBtn.classList.add('paper');
    createThirdBtn.classList.add('scissors')    
    
    // Add listeners to the buttons
    createFirstBtn.addEventListener('click', () => {
        game('rock', computerPlay());
    })
    createSecondBtn.addEventListener('click', () => {
        game('paper', computerPlay());
    })
    createThirdBtn.addEventListener('click', () => {
        game('scissors', computerPlay());
    })
    
    // create 3 buttons:
    getDiv.appendChild(createFirstBtn);
    getDiv.appendChild(createSecondBtn);
    getDiv.appendChild(createThirdBtn);


}
// for(let i = 1; i <= 5; i++){
//     let userInput = prompt('Please enter your choice');
//     console.log(`Round: ${i}: ${game(userInput, computerPlay())}`)
// }