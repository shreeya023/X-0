
let userscore = 0;
let compscore = 0;

let us = document.querySelector("#user-score");
let cs = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

// Function to handle draw
const drawgame = () => {
    console.log("The game is draw");
    msg.innerText = "IT'S A TIE ";
    msg.style.backgroundColor = "#0c243f";
};

// Function to display winner and update score
const showwinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        userscore++; // ✅ correct increment
        us.innerText = userscore;
        console.log("you win");
        msg.innerText = `YOU WIN !! ${userchoice.toUpperCase()} BEATS ${compchoice.toUpperCase()} \n COMPUTER CHOICE WAS ${compchoice.toUpperCase()}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++; // ✅ only once
        cs.innerText = compscore;
        console.log("you lose");
        msg.innerText = `YOU LOSE :) ${compchoice.toUpperCase()} BEATS ${userchoice.toUpperCase()} \n COMPUTER CHOICE WAS ${compchoice.toUpperCase()}`;
        msg.style.backgroundColor = "red";
        // ❌ Removed duplicate compscore++ that was here earlier
    }
};

// Function to generate computer's choice
const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const compinx = Math.floor(Math.random() * 3);
    return options[compinx];
};

// Main game logic function
const playgame = (userchoice) => {
    console.log("user choice was", userchoice);

    let compchoice = gencompchoice(); // ✅ added 'let' to avoid accidental global
    console.log("computer choice was", compchoice);

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = false; // ✅ default to false

        // ✅ Corrected logic for determining win
        if (userchoice === "rock") {
            userwin = compchoice === "scissors";
        } else if (userchoice === "paper") {
            userwin = compchoice === "rock";
        } else {
            userwin = compchoice === "paper";
        }

        showwinner(userwin, userchoice, compchoice);
    }
};

// Event listener to detect user's choice
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
