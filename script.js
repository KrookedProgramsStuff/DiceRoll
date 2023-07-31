let coinFlip = [1, 2];
let d4arr = [1, 2, 3, 4];
let d6arr = [1, 2, 3, 4, 5, 6];
let d8arr = [1, 2, 3, 4, 5, 6, 7, 8];
let d10arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let d20arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let d100arr = [];

for (let i = 1; i <= 100; i++){
    d100arr.push(i);
} 


let playerSelection = prompt("Enter Flip/3/4/6/8/10/20/100 to roll a die with that many sides \nor flip a coin!");

playerSelection = playerSelection.toLowerCase();

function dieRoll() {
    if (playerSelection == "flip"){
        return coinFlip[(Math.floor(Math.random() * coinFlip.length))];
    }
    alert("Your result is" + dieRoll());
}

