// choose a random weapon for cpu
const options = ["🪨","📃","✂️"];

function rockPaperScissorsCPU(options) {
  let choice = options[Math.floor(Math.random()*options.length)];
  return choice;
}



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


// game start btn causes btns to shake
let startBtn = document.querySelector('#gameStart');
const user = document.querySelector('.user-fist');
const cpu = document.querySelector('.cpu-fist');
startBtn.addEventListener("click", () => {
  user.classList.add("shake");
  cpu.classList.add("shake");
});

// game start btn causes btns to shake
let newGamebtn = document.querySelector('#newGame');
newGamebtn.addEventListener("click", () => {
  user.classList.remove("shake");
  cpu.classList.remove("shake");
});