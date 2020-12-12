/**
 *@description Here Snake and Ladder game is initiated for the single player
 */
var playerPosition = 0;
console.log("welcome to Snake and Ladder Game");
console.log("dice is rolling to get number....");
diceRollResult = (Math.floor(Math.random() * 10) % 6 + 1);
console.log("dice rolling result is- " + diceRollResult);