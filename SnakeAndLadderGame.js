/**
 * This snake and ladder application is working automatic
 * woriking for two players and gives the result who won the game   
 **/
const WIN_POSITION = 100;
const START_POSITION = 0;
const NO_PLAY = 0;
const LADDER = 1;
const SNAKE = 2;

var numberOfRolls = 0;
var diceRollResult = 0;
var playerMove = 1;

class Player {
    WIN_POSITION = 100;
    START_POSITION = 0;
    playerPosition = 0;
    playerName = null;

    constructor(playerName, playerPosition) {
        this.playerPosition = playerPosition;
        this.playerName = playerName;
    }

    // Ladder method
    ladder = (diceRollResult) => {
        ((this.playerPosition + diceRollResult) > this.WIN_POSITION) ?
            this.playerPosition : (this.playerPosition = this.playerPosition + diceRollResult);
    }

    // Snake method
    snake = (diceRollResult) => {
        ((this.playerPosition - diceRollResult) < this.START_POSITION) ?
            (this.playerPosition = this.START_POSITION) : (this.playerPosition = this.playerPosition - diceRollResult);
    }
}

// Check and print who won the match 
winCheck = () => {
    (player1.playerPosition == player1.WIN_POSITION) ?
        (console.log("Player1 won the game ")) : console.log("Player2 won the game ");
}

/**
 * This function firstly decide player move 
 * then decide for ladder() and snake() which one going  to execute 
 * */
decidePlyerMoveAndExecute = (optionToPlay) => {
    (playerMove % 2 == 0) ? (player = player1) : (player = player2);
    switch (optionToPlay) {
        case NO_PLAY:
            break;
        case LADDER:
            player.ladder(diceRollResult);
            break;
        case SNAKE:
            player.snake(diceRollResult);
            break;
        default:
            console.log("no match");
    }
}

/**
 * PlayGame method initiate the game and execute the game
 *loop will itterate till WIN_POSITION position
 * */
playGame = () => {
    while (player1.playerPosition != player1.WIN_POSITION && player2.playerPosition != player2.WIN_POSITION) {
        diceRollResult = (Math.floor(Math.random() * 10) % 6 + 1);
        optionToPlay = (Math.floor(Math.random() * 10) % 3);
        decidePlyerMoveAndExecute(optionToPlay);

        numberOfRolls++;
        playerMove++;
    }

    winCheck();
    console.log("Number of dice rolls taken to win : " + numberOfRolls);
}

console.log("\nwelcome to Snake and Ladder Game");
const player1 = new Player("player1", 0);
const player2 = new Player("player2", 0);
playGame();


