const prompt = require('prompt-sync')();

function Game(){
    // this.wannaPlay = wannaPlay;
    this.myHub = ["rock", "paper", "scissors"];
    this.optionPlayer = 0;
    this.optionComputer = 0;
    this.scorePlayer = 0;
    this.scoreComputer = 0;
    this.isThereWinner = false;
    this.noWannaPlayMessage = function(){
        console.log("--------------------------------");
        console.log("Ahh! ok. Maybe the next time");
        console.log("Have a good one!");
    }

    this.gameInstructions = function(){
        console.log("--------------------------------");
        console.log("ok. This is how the game works:");
        console.log("you have three options");
        console.log("you can choose one of the three options");
        console.log("0 for rock, 1 for paper and 2 for scissors");
    }

    this.gameLogic = function(optionPlayer, optionComputer){
        let realPlayerOption = this.myHub[optionPlayer];
        let realComputerOption = this.myHub[optionComputer];
        if(realComputerOption === "rock" && realPlayerOption === "paper"){
            this.scorePlayer += 1
        } else if(realComputerOption === "paper" && realPlayerOption === "rock"){
            this.scoreComputer += 1
        } else if(realComputerOption === "scissors" && realPlayerOption === "rock"){
            this.scorePlayer += 1
        } else if(realComputerOption === "rock" && realPlayerOption === "scissors"){
            this.scoreComputer += 1
        } else if(realComputerOption === "paper" && realPlayerOption === "scissors"){
            this.scorePlayer += 1
        } else if(realComputerOption === "scissors" && realPlayerOption === "paper"){
            this.scoreComputer += 1
        }
    }

    this.whoWins = function(scoreComputer, scorePlayer){
        if(scoreComputer > scorePlayer){
            console.log("loser score: " + this.scorePlayer);
            console.log("computer wins!");
        } else {
            console.log("loser score: " + this.scoreComputer);
            console.log("human wins!");
        }
    }
}


wannaPlay = prompt("Do you wanna play rock, papers scissors?(y/n): ").toLocaleLowerCase();
// this while code portion is for validating wannaplay variable
while(wannaPlay !== "y" && wannaPlay !== "n"){
    console.log("not valid hitting, try again");
    wannaPlay = prompt("Do you wanna play rock, papers scissors?(y/n): ");
}

if (wannaPlay === "y"){
    const newGame = new Game();
    newGame.gameInstructions();
    while (!newGame.isThereWinner){
        newGame.optionPlayer = parseInt(prompt("choose a number: "));
        newGame.optionComputer = Math.floor(Math.random() * 3);
        //this while code portion is for validating option player
        while(newGame.optionPlayer !== 0 && newGame.optionPlayer !== 1 && newGame.optionPlayer !== 2){
            console.log("Not valid input, Try again!");
            newGame.optionPlayer = parseInt(prompt("choose a number between 0 and 2: "));
        }

        newGame.gameLogic(newGame.optionPlayer,newGame.optionComputer);

        if(newGame.scoreComputer === 3 || newGame.scorePlayer === 3){
            newGame.isThereWinner = true;
        }
    }

    console.log("--------------------------------");

    newGame.whoWins(newGame.scoreComputer,newGame.scorePlayer);

} else {
    const newGame = new Game();
    newGame.noWannaPlayMessage();
}
