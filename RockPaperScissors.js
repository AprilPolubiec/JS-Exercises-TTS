

function getHand(possibleHands){
    return possibleHands[parseInt(Math.random()*10)%3];
    //return possibleHands[Math.floor(Math.random() * possibleHands.length)];
}

const p1 = {
    name: "Player 1",
    // getHand: getHand(hands) - NOT CORRECT
    getHand
    //option2
    // getHand() {
    //     return getHand(hands);
    // }
    
    //option3
    // getHand: () => getHands(hands)
    
    //option4
    // getHand: function getHand1(){
    //     return getHands(hands)
    // }
};

const p2 = {
    name: 'Player 2',
    getHand: getHand
    //getHand           - if key matches value, you don't have to include the value
};

function playRound(p1, p2){
    const hands = ['rock', 'paper', 'scissors'];
    const p1Hand = p1.getHand(hands);
    const p2Hand = p1.getHand(hands);

    if (p1Hand === p2Hand)
        return [p1Hand, p2Hand, "it's a tie"];

    if ((p1Hand === 'rock' && p2Hand === 'scissors')
        || (p1Hand === 'paper' && p2Hand === 'rock') 
        || (p1Hand === 'scissors' && p2Hand === 'paper')){
            return p1.name;
    }

    return p2.name;
     
}

console.log(playRound(p1, p2));

function playGame(p1, p2, until){
    
    const wins = {
        [p1.name]: 0,                  //in brackets bc we are using a variable name, equivalent to "Player 1"
        [p2.name]: 0
    }

    while (wins[p1.name] < until && wins[p2.name] < until){
    const result = playRound(p1, p2);       //returns and assigns a name to result
    wins[result] += 1;                  //looks in wins for the key result and adds to win total
    if (wins[p1.name] === until){
        return wins[p1.name];
    }
    if (wins[p2.name] === until){
        return wins[p2.name];
    }
}

}