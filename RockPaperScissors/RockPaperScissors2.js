// Define a hands array with the values 'rock', 'paper', and 'scissors';
// Define a function called getHand() that returns a hand from the array using 
//    parseInt(Math.random()*10)%3)
// Define two objects for two players. Each player has name and getHand() properties.
// Define a function called playRound() that
    // Takes two player objects as arguments
    // Gets hands from each
    // Determines the winner
    // Logs the hands played and name of the winner.
    // If its a tie, log the hands played and "it's a tie".
    // Returns the winner object (null if no winner)
// Define a function called playGame() that takes arguments player1, player2, and playUntil.
// Play rounds until one of the players wins playUntil hands
// When one player has won enough games, return the winning player object
// Play a game to 5 wins

const hands = ['rock', 'paper', 'scissors'];


function getHand(arr){
    return arr[parseInt(Math.random()*10%3)];
}

function playRound(p1,p2){
    p1hand = p1.getHand(hands);
    p2hand = p2.getHand(hands);
    winner = null;


    if ((p1hand === 'rock') && (p2hand === 'scissors')){
        winner = p1;
    } else if ((p1hand === 'paper') && (p2hand === 'rock')){
        winner = p1;
    } else if ((p1hand === 'scissors') && (p2hand === 'paper')){
        winner = p1;
    } else {
        winner = p2;
    }

    console.log(`${p1.name}: ${p1hand}\n${p2.name}: ${p2hand} \n`);
    
    if(p1hand === p2hand){
        console.log("It's a tie!");
        console.log();
    } else {
        console.log (`Winner: ${winner.name}`);
        console.log();
    }
    return winner;    
}

function playGame(p1, p2, playUntil){
    var p1count = 0;
    var p2count = 0;
    var winner = playRound(p1,p2);
    while((p1count <= playUntil) && (p2count <= playUntil)){
        if (winner === p1){
            p1count += 1;
        }else if (winner === p2){
            p2count += 1;
        }
        winner = playRound(p1, p2);
    }

    console.log(`${winner.name} won ${playUntil} games!`);
    return winner;
}

playerOne = {
    name: 'Player 1',
    hand: 
}

playerTwo = {
    name: 'Player 2',
    getHand
}

playGame(playerOne, playerTwo, 5);