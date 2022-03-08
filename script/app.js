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
    const createResetBtn = document.createElement('button');
    const createDivContainer = document.createElement('div');
    const btnContainer = document.createElement('div');

    
    // setting textContent
    createFirstBtn.textContent = 'Rock';
    createSecondBtn.textContent = 'Paper';
    createThirdBtn.textContent = 'Scissors';
    createResetBtn.textContent = 'Reset';
    createDivContainer.textContent = "Waiting for user's choice"

    
    // Set class
    createFirstBtn.classList.add('rock');
    createSecondBtn.classList.add('paper');
    createThirdBtn.classList.add('scissors') 
    createDivContainer.classList.add('container');
    btnContainer.classList.add('btn-container');
    
    // Add listeners to the buttons
    createFirstBtn.addEventListener('click', () => {
        createDivContainer.textContent = game('rock', computerPlay());
    })
    createSecondBtn.addEventListener('click', () => {
        createDivContainer.textContent = game('paper', computerPlay());
    })
    createThirdBtn.addEventListener('click', () => {
        createDivContainer.textContent = game('scissors', computerPlay());
    })
    createResetBtn.addEventListener('click', () => {
        createDivContainer.textContent = "Waiting for user's choice"
    })

    // create 3 buttons:
    getDiv.appendChild(createDivContainer);
    getDiv.appendChild(btnContainer)
    btnContainer.appendChild(createFirstBtn);
    btnContainer.appendChild(createSecondBtn);
    btnContainer.appendChild(createThirdBtn);
    btnContainer.appendChild(createResetBtn)


}
// for(let i = 1; i <= 5; i++){
//     let userInput = prompt('Please enter your choice');
//     console.log(`Round: ${i}: ${game(userInput, computerPlay())}`)
// }