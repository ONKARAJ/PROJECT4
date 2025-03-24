let userScore=0;
let compScore=0;

const msg= document.querySelector("#msg");
const choices= document.querySelectorAll(".choice");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const gencompchoice= () =>{
    const options =["rock", "paper", "scissor"];
 const randidx= Math.floor(Math.random()*3);
 return options[randidx];
};

const drawgame=() =>{
alert("game was draw");
console.log("game was draw");
msg.innerText="Game was draw. Play again"; 
msg.style.backgroundColor="pink";
};

const showWinner =(userWin,userChoice,compChoice) =>{
if(userWin){
    alert("user win");
    userScore++;
    userScorepara.innerText=userScore;
    msg.innerText=`you win ! Your ${compChoice} beats ${ userChoice}`;
    msg.style.backgroundColor="green";
} else{
    alert("computer win");
    compScore++;
    compScorepara.innerText=compScore;
    msg.innerText=`you loose ! ${userChoiceChoice} beats Your ${compChoiceChoice}`;
    msg.style.backgroundColor="red";
}
}


const playGame=(userChoice) =>{
    console.log("user choice=", userChoice);
    // nowgenerate computer choice
    const compChoice = gencompchoice();
    console.log("comp choice" , compChoice)

    if(userChoice===compChoice){
        //draw game
        drawgame();
    } else{
        let userWin=true;
        if(userChoice === "rock") {
            //scissors, paper
            userwin=compChoice==="paper" ? true: false;
        } else if (userChoice==="paper"){
            //rock,scissors
            userwin= compChoice==="scissors" ? false: true ;
        
        } else{
            //rock,paper
            userwin= compChoice==="rock" ? false: true ;
        }
        showWinner(userWin, compChoice,userChoice);
    }
};




choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice= choice.getAttribute("id")
       // console.log("choice was clicked", choiceId);
        playGame(userChoice);
    });
});



