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

    else if (playerSelection == "3"){
        return coinFlip[(Math.floor(Math.random() * d4arr.length))];
    }

    else if (playerSelection == "4"){
        return d4arr[(Math.floor(Math.random() * d4arr.length))];
    }

    else if(playerSelection == "6"){
        return d6arr[(Math.floor(Math.random() * d6arr.length))];

    }

    else if(playerSelection == "8"){
        return d8arr[(Math.floor(Math.random() * d8arr.length))];

    }
    
    else if(playerSelection == "10"){
        return d10arr[(Math.floor(Math.random() * d10arr.length))];

    }

    else if(playerSelection == "20"){
        return d20arr[(Math.floor(Math.random() * d20arr.length))];

    }

    else if (playerSelection == "100"){
        return d100arr[(Math.floor(Math.random() * d100arr.length))];

    }

}

alert("Your result is " + dieRoll() + " refresh the page to roll again!");

