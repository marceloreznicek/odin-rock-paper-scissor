       //main
        // Setup
       const buttons = document.querySelectorAll("button");
       for (let button of buttons) {
           button.addEventListener("click", (e) => runRound(e.target.textContent));
       }

      // iniatilize
      let humanScore = 0
      let botScore = 0
       
       
       //run Match
       function runMatch(){
        console.log("Let's play a game of Rock Paper Scissors!")

        let botScore = 0;
        let humanScore = 0;

        while (botScore < 5 && humanScore < 5) {
            console.log("Current score is human: " + humanScore + " vs bot: " + botScore);
            
            let roundResults = runRound();
            if (roundResults == "human") {humanScore = humanScore + 1}
            else if (roundResults == "bot") {botScore = botScore + 1}
        }

        if (botScore > humanScore) {console.log("Computer WON!")} else {console.log("Human WON!")}

    }

    //run round
    function runRound(humanChoice){ 
        
    //Check if we need to reset Match
    resetMatch()

    // let varHumanChoice = getHumanChoice();
    let varHumanChoice = humanChoice
    console.log("Human: " + varHumanChoice);

    let varComputerChoice = getComputerChoice();
    console.log("Comput: " + varComputerChoice);

    console.log(checkWhoWon(varHumanChoice, varComputerChoice));
    roundWinner = checkWhoWon(varHumanChoice, varComputerChoice);

    if (roundWinner == "bot") {botScore++} else {humanScore++}

    checkWinnerUpdateSB()
    }


    function checkWinnerUpdateSB(){
        console.log("Checking winner")

        // Update leaderboard element
        const leaderBoard = document.querySelector("#scoreboard")
        console.log("Human: " + humanScore + " vs Bot: " + botScore);
        leaderBoard.textContent = ("Human: " + humanScore + " vs Bot: " + botScore);

        // Check for winner to then update leaderboard
        if (botScore == 5) {
            console.log("Computer WON!")
            leaderBoard.textContent = "Computer Won"
        } else if (humanScore == 5){
            console.log("Human WON!")
            leaderBoard.textContent = "Human Won"
        }
    }


    // get input
        //to-do: What if user iputs invalid values
    function getHumanChoice() {
        return prompt("Rock, Paper or Scissor?", "Rock")
    }

    // generate random value for PC
    function getComputerChoice() {
        let randVar = Math.random()
        let computerHand = "temp"

        if (randVar <= 0.33) {
            computerHand = "Rock"
        } else if (randVar <= 0.66) {
            computerHand = "Paper"
        } else (
            computerHand = "Scissor"
        )
        return computerHand
    }



    // Check who won
    function checkWhoWon(human, bot){
        let whoWon = "bot"

        if (bot == "Rock" & human == "Paper") {whoWon = "human"}
        else if (bot == "Paper" & human == "Scissor") {whoWon = "human"}
        else if (bot == "Scissor" & human == "Rock") {whoWon = "human"}

        else if (bot == human) {whoWon = "tie"}

        return whoWon;
    }

    function resetMatch() {
        const scoreboard = document.querySelector("#scoreboard")
        if (humanScore >= 5 || botScore >= 5) {
            humanScore = 0
            botScore = 0
        }
    }