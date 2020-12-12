var playerPosition = 0;

// ladder functionality
ladder = (diceRollResult) => playerPosition + diceRollResult;

// snake functionality
snake = (diceRollResult) => playerPosition - diceRollResult;

/**
 *@description Here Snake and Ladder game is initiated for the single player
 */

console.log("welcome to Snake and Ladder Game");
console.log("dice is rolling to get number....");
diceRollResult = (Math.floor(Math.random() * 10) % 6 + 1);
console.log("dice rolling result is- " + diceRollResult);

optionToPlay = (Math.floor(Math.random() * 10) % 3);

		// Snake and Ladder Evaluation
		switch (optionToPlay) {
		case 0:
			currentPosition = playerPosition;
			console.log("no play");
			console.log("updated player positon- " + currentPosition);
			break;
		case 1:
			currentPosition = ladder(diceRollResult);
			console.log("found ladder");
			console.log("updated player positon- " + currentPosition);
			break;
		case 2:
			currentPosition = snake(diceRollResult);
			console.log("found snake ");
			console.log("updated player positon- " + currentPosition);
			break;
		default:
            console.log("Option did not match");
		}
	
