const WIN_POSITION = 100;
const START_POSITION = 0;
const NO_PLAY = 0;
const LADDER = 1;
const SNAKE = 2;

var numberOfRolls = 0;
var playerPosition = 0;
var previousPosition = 0;

// Ladder functionality
ladder = (diceRollResult) => playerPosition + diceRollResult;

// Snake functionality
snake = (diceRollResult) => playerPosition - diceRollResult;

/**
 * Here Snake and Ladder game for the single player
 *loop will itterate till WIN_POSITION position
 * */
playGame = () => {
    while (playerPosition != WIN_POSITION) {
        previousPosition = playerPosition;
        console.log("welcome to Snake and Ladder Game");
        diceRollResult = (Math.floor(Math.random() * 10) % 6 + 1);
        console.log("dice rolling result is- " + diceRollResult);

        optionToPlay = (Math.floor(Math.random() * 10) % 3);

        // Snake and Ladder Evaluation
        switch (optionToPlay) {
            case NO_PLAY :
                console.log("no play");
                console.log("updated player positon- " + playerPosition);
                break;
            case LADDER:
                playerPosition = ladder(diceRollResult);
                console.log("found ladder");
                console.log("updated player positon- " + playerPosition);
                break;
            case SNAKE:
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

playGame();
console.log("\nPlayer have won the game ");
console.log("Number of dice rolls taken to win " + numberOfRolls);