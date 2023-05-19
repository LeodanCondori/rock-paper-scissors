const prompt = require('prompt-sync')();

let myHub = ["rock", "paper", "scissors"];
let optionPlayer = 0;
let optionComputer = 0;
let scorePlayer = 0;
let scoreComputer = 0;
let isThereWinner = false;

let wannaPlay = "";
wannaPlay = prompt("Do you wanna play rock, papers scissors?(y/n): ").toLocaleLowerCase();
// this while code portion is for validating wannaplay variable
while(wannaPlay !== "y" && wannaPlay !== "n"){
    console.log("not valid hitting, try again");
    wannaPlay = prompt("Do you wanna play rock, papers scissors?(y/n): ");
}

if (wannaPlay === "y"){
    console.log("--------------------------------");
    console.log("ok. This is how the game works:");
    console.log("you have three options");
    console.log("you can choose one of the three options");
    console.log("0 for rock, 1 for paper and 2 for scissors");
    while (!isThereWinner){
        optionPlayer = parseInt(prompt("choose a number: "));
        optionComputer = Math.floor(Math.random() * 3);
        //this while code portion is for validating option player
        while(optionPlayer !== 0 && optionPlayer !== 1 && optionPlayer !== 2){
            console.log("Not valid input, Try again!");
            optionPlayer = parseInt(prompt("choose a number between 0 and 2: "));
        }

        let realPlayerOption = myHub[optionPlayer];
        let realComputerOption = myHub[optionComputer];
        if(realComputerOption === "rock" && realPlayerOption === "paper"){
            scorePlayer += 1
        } else if(realComputerOption === "paper" && realPlayerOption === "rock"){
            scoreComputer += 1
        } else if(realComputerOption === "scissors" && realPlayerOption === "rock"){
            scorePlayer += 1
        } else if(realComputerOption === "rock" && realPlayerOption === "scissors"){
            scoreComputer += 1
        } else if(realComputerOption === "paper" && realPlayerOption === "scissors"){
            scorePlayer += 1
        } else if(realComputerOption === "scissors" && realPlayerOption === "paper"){
            scoreComputer += 1
        }

        if(scoreComputer === 3 || scorePlayer === 3){
            isThereWinner = true;
        }
    }

    console.log("--------------------------------");

    if(scoreComputer > scorePlayer){
        console.log("loser score: " + scorePlayer);
        console.log("computer wins!");
    } else {
        console.log("loser score: " + scoreComputer);
        console.log("human wins!");
    }

} else {
    console.log("--------------------------------");
    console.log("Ahh! ok. Maybe the next time");
    console.log("Have a good one!");
}
