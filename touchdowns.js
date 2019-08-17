// Given "var players"... 

var players = [
	{firstName: 'Cam', lastName: 'Newton', position: 'QB', touchdowns: 32},
	{firstName: 'Derek', lastName: 'Anderson', position: 'QB', touchdowns: 0},
	{firstName: 'Jonathan', lastName: 'Stewart', position: 'RB', touchdowns: 12},
	{firstName: 'Mike', lastName: 'Tolbert', position: 'RB', touchdowns: 8},
	{firstName: 'Fozzy', lastName: 'Whittaker', position: 'RB', touchdowns: 3},
	{firstName: 'Ted', lastName: 'Ginn', position: 'WR', touchdowns: 9},
	{firstName: 'Devin', lastName: 'Funchess', position: 'WR', touchdowns: 2}
];

 //1. Find a player with the name 'Mike'
var mike = players.find(player => { return player.firstName === 'Mike';});

console.log('Solution 1: ');
console.log(mike);

// 2. Get an array of all players with position 'RB'
var runningBacks = players.filter(player => {return player.position === 'RB';});

console.log('Solution 2: ')
console.log(runningBacks);

// 3. Get an array of all the players lastNames
var lastNames = players.map(player => { return player.lastName; });

console.log('Solution 3: ');
console.log(lastNames);


// 4. Get an array of the full names of all the running backs with more than 5 touchdowns
var runningBacksWMoreThan5TDs = runningBacks
                                    .filter(player => { return player.touchdowns > 5; })
                                    .map(player => { return player.firstName + ' ' + player.lastName;});

console.log('Solution 4:');
console.log(runningBacksWMoreThan5TDs);

// 5. Get the number of touchdowns scored by Running backs
var numTouchdownsByRBs = runningBacks.reduce(function(total, player){
    return total + player.touchdowns;
}, 0);

console.log('Solution 5:');
console.log(numTouchdownsByRBs);