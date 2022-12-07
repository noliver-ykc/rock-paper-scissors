
// user weapon choice    
const radioButtons = document.querySelectorAll('input[name="radio-group"]');
const output = document.querySelector('.user-fist')
for (const radioButton of radioButtons) {
  radioButton.addEventListener("click", () => {
    let selection;
    if (radioButton.checked) {
      selection = radioButton.value;
    }
    // show the output:
    output.innerText = selection;
  });
}


// INITAL game start btn causes btns to shake
let startBtn = document.querySelector('#gameStart');
const user = document.querySelector('.user-fist');
const cpu = document.querySelector('.cpu-fist');
const options = ["🪨","📃","✂️"];
startBtn.addEventListener("click", () => {
  user.classList.add("shake");
  cpu.classList.add("shake");
  let cpuChoice = rockPaperScissorsCPU(options);
  cpu.innerText = cpuChoice;
  let userChoice = user.innerText;
  startBtn.disabled = true;
  determineWinner(cpuChoice, userChoice);
});

// play again btn causes btns to shake on next start click
let newGamebtn = document.querySelector('#newGame');
newGamebtn.addEventListener("click", () => {
  user.classList.remove("shake");
  user.innerText = "✊";
  cpu.innerText = "✊";
  cpu.classList.remove("shake");
  startBtn.disabled = false;
  let resultBox = document.querySelector('#match-result');
  resultBox.style.display = "none";
});



// choose a random weapon for cpu
function rockPaperScissorsCPU(options) {
  let choice = options[Math.floor(Math.random()*options.length)];
  return choice;
}

// determine and display winner 
async function determineWinner(cpuChoice, userChoice) {
  let resultDisplay = document.querySelector('.result')
  let result;
  let resultBox = document.querySelector('#match-result');
  let exitBtn = document.querySelector('.exit-btn');

  if(cpuChoice == userChoice) {
    result = "tied";
    console.log("you tied!"); 
  } else if(cpuChoice === "🪨" && userChoice === "✂️" || cpuChoice === "✂️" && userChoice === "📃" || cpuChoice === "📃" && userChoice === "🪨"){
    result = "lose"
    console.log("you lose!"); 
  } else {
    result = "win";
    console.log("you win!");
  }
  await delay(2750);
  resultBox.style.display = "block";
  resultDisplay.innerText = result;

  // exit results box btn 
  exitBtn.addEventListener("click", () => {
    resultBox.style.display = "none";
  });
}


// needed to delay time of results showing 
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}


