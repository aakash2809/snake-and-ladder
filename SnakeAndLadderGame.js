const WIN_POSITION = 100;
const START_POSITION = 0;

var numberOfRolls = 0;
var playerPosition = 0;
var previousPosition = 0;

// Ladder functionality
ladder = (diceRollResult) => playerPosition + diceRollResult;

// Snake functionality
snake = (diceRollResult) => playerPosition - diceRollResult;

/**
 *@description Here Snake and Ladder game for the single player
 *loop will itterate till WIN_POSITION position
 * */
main = () => {
    while (playerPosition != WIN_POSITION) {
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

        (playerPosition < START_POSITION) ? playerPosition = 0 : playerPosition;
        (playerPosition > WIN_POSITION) ? playerPosition = previousPosition : playerPosition;

        numberOfRolls++;
    }
}

main();
console.log("-----------------------------------------------------------");
console.log();
console.log("Player have won the game ");
console.log("Number of dice rolls taken to win " + numberOfRolls);