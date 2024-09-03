let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msgs");
const userscorepara = document.querySelector("#user-score");
const compscorepara =document.querySelector("#comp-score")
const drawgame=()=>{
    
    msg.innerText="Game was draw,Try again";
    msg.style.backgroundColor = "#081b31"
}
const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin){
        userscore++
        userscorepara.innerText=userscore;
      
      msg.innerText =`You WIN! Your ${userChoice} beats ${compChoice}`
      msg.style.backgroundColor = "green"
    }else{
        compscore++;
        compscorepara.innerText=compscore;
       
        msg.innerText=`You LOSE! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}


const playgame=(userChoice)=>{
console.log("User Choice =",userChoice);
const compChoice= gencompchoice();
console.log("comp choice",compChoice);
if(userChoice===compChoice){
  drawgame();
}else{
    let userwin = true;
    if(userChoice ==="rock"){
       userwin= compChoice==="paper"?false:true;
    }else if(userChoice === "paper"){
       userwin = compChoice==="scissors"?false:true;
    }else{
       userwin= compChoice==="rock"?false:true;
    }
    showWinner(userwin,userChoice,compChoice)
}
}
const gencompchoice=()=>{
    const option =["rock","paper","scissors"];
    const ranidx=Math.floor(Math.random()*3);
    return option[ranidx];
}


choices.forEach((choice) =>{
   
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
       
        playgame(userChoice);
    });
});
