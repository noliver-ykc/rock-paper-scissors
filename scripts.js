function rockPaperScissorsCPU(options) {
  let choice = options[Math.floor(Math.random()*options.length)];
  return choice;
}

const options = ["🪨","📃","✂️"];


const btn = document.querySelector('#setWeapon');        
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
    console.log("here");
  });
}
