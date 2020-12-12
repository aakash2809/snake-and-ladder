var playerPosition = 0;
var previousPosition = 0;

// Ladder functionality
ladder = (diceRollResult) => playerPosition + diceRollResult;

// Snake functionality
snake = (diceRollResult) => playerPosition - diceRollResult;

/**
 *@description Here Snake and Ladder game for the single player
 *loop will itterate till 100 position
 * */
while (playerPosition != 100) {
    previousPosition = playerPosition;
    console.log("welcome to Snake and Ladder Game");
    console.log("dice is rolling to get number....");
    diceRollResult = (Math.floor(Math.random() * 10) % 6 + 1);
    console.log("dice rolling result is- " + diceRollResult);

    optionToPlay = (Math.floor(Math.random() * 10) % 3);

    // Snake and Ladder Evaluation
    switch (optionToPlay) {
        case 0:
            console.log("no play");
            console.log("updated player positon- " + playerPosition);
            break;
        case 1:
            playerPosition = ladder(diceRollResult);
            console.log("found ladder");
            console.log("updated player positon- " + playerPosition);
            break;
        case 2:
            playerPosition = snake(diceRollResult);
            console.log("found snake ");
            console.log("updated player positon- " + playerPosition);
            break;
        default:
            console.log("Option did not match");
    }

    /**
    * Checking the player position whether it is less than 0 
    * if yes then do some action 
    */
    (playerPosition < 0) ? playerPosition = 0 : playerPosition;

    /**
  * Checking the player position whether it is greater than 100 
  * if yes then do some action 
  */
    (playerPosition > 100) ? playerPosition = previousPosition : playerPosition;

}
