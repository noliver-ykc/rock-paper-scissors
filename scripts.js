function rockPaperScissorsCPU(options) {
  let choice = options[Math.floor(Math.random()*options.length)];
  return choice;
}

const options = ["🪨","📃","✂️"];
rockPaperScissorsCPU(options);
