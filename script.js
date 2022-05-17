// returns a random number between 0 and "max" (exclusive)
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// determine if the game is a win, loss, or tie
function play(action) {
    // keep track of what the computer and player intend to do
    let computerAction = '';
    let playerAction = action;

    // keep track of the player, computer, and end message
    let playerMessage = '';
    let computerMessage = '';
    let endMessage = '';

    // randomly assign an action to the computer
    // (you could use a regular if-else statement as opposed to a switch)
    let option = getRandomInt(3);
    switch (option) {
        case 0:
            computerAction = 'ROCK';
            break;
        case 1:
            computerAction = 'PAPER';
            break;
        case 2:
            computerAction = 'SCISSORS';
            break;
        default:
            break;
    }

    // assign the player's and computer's message accordingly
    playerMessage = 'The PLAYER chooses: ' + playerAction + '!';
    computerMessage = 'The COMPUTER chooses: ' + computerAction + '!';

    // handle who wins or loses
    // update the end message accordingly
    // (same here, this could be accomplished with nested if-else statements)
    switch (playerAction) {
        case 'ROCK':
            if (computerAction === playerAction)
                endMessage = 'The game is a tie!';
            else if (computerAction === 'PAPER')
                endMessage = 'The COMPUTER wins!';
            else
                endMessage = 'The PLAYER wins!';
            break;
        case 'PAPER':
            if (computerAction === playerAction)
                endMessage = 'The game is a tie!';
            else if (computerAction === 'ROCK')
                endMessage = 'The PLAYER wins!';
            else
                endMessage = 'The COMPUTER wins!';
            break;
        case 'SCISSORS':
            if (computerAction === playerAction)
                endMessage = 'The game is a tie!';
            else if (computerAction === 'ROCK')
                endMessage = 'The COMPUTER wins!';
            else
                endMessage = 'The PLAYER wins!';
            break;
        default:
            break;
    }

    // update the game log

    // get the actual element
    let gameContent = document.getElementById('game-content');

    // create the list items
    let playerItem = document.createElement('li');
    playerItem.appendChild(document.createTextNode(playerMessage));
    let computerItem = document.createElement('li');
    computerItem.appendChild(document.createTextNode(computerMessage));
    let endItem = document.createElement('li');
    endItem.appendChild(document.createTextNode(endMessage));

    // add the list items to the list in the HTML
    gameContent.appendChild(playerItem);
    gameContent.appendChild(computerItem);
    gameContent.appendChild(endItem);
}