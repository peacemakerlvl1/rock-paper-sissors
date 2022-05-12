// app.js
// complete logic of the game inside this function
const game = () => {
    let playerScore = 0; 
    let computerScore = 0;
    let moves = 0;

    //function 
    const playGame = () => {
        const rockbtn = document.querySelector('.rock');
        const paperbtn = document.querySelector('.paper');
        const scissorbtn = document.querySelector('.scissor');
        const playerOptions = [rockbtn,paperbtn,scissorbtn];
        const computerOptions = ['rockbtn','paperbtn','scissorbtn']
     
        // function to start playing game
        playerOptions.forEach(option => {
            option.addEventListener('click', function(){

                const movesLeft = document.querySelector('.movesleft');
                moves++;
                movesLeft.innerText = 'Moves left: ${10-moves}';
                

                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[ choiceNumber];

                // Function to  check who wins
                winner(this.innerText,computerChoice)

                // calloing gameover function after 10 moves
                if(moves == 10){  
                gameOver(playerOptions, movesLeft);
                }
            })
        })
    }
    // function to decide winner
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player ==  'rock'){
            result.textContent = 'tie'
        }
        else if (player =='rock'){
            if(computer == 'paper'){
                result.textContent = 'computer won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'player won'
                playerScore++;
                playerScoreBoard.textContent= playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = computerScore;
            }else{
                result.textContent = 'player won';
                playerScore++;
                playerScoreBoard.textContent =playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent ='computer won';
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'player won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
}
// funtion to run when game is over
const gameOver = (playerOptions,movesLeft) =>{

    const chooseMove = document.querySelector('move');
    const result = document.querySelector('.result');
    const reloadBtn =document.querySelector('.reload');

    playerOptions.forEach(option => {
        option.style.display = 'none';
    })
    chooseMove.innerText = 'game over!!';
    movesLeft.style.display = ' none';

    if(playerScore > computerScore){
        result.style.fontSize = '2rem';
        result.innerText ='you won the game'
        result.style.color = '#308D46';
    }
    else{
        result.style.fontSize = '2rem';
        result.innerText = 'tie';
        result.style.color = 'grey'
    }
    reloadBtn.innerText = 'restart';
    reloadBtn.style.display = 'flex'
    reloadBtn.addEventListener(' click',() => {
        window.location.reload();
    })
}
    playGame();
}


game();