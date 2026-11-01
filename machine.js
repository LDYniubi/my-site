const display = document.getElementById('machine-display');
const label = document.getElementById('machine-label');
const startBtn = document.getElementById('machine-start');
const resetBtn = document.getElementById('machine-reset');

let count = 0;
let timer = null;

function updateDisplay() {
  display.textContent = count;
}

function setRunning(running) {
  startBtn.disabled = running;
  if (running) {
    label.textContent = 'The machine is working...';
    startBtn.textContent = 'Working...';
  } else {
    startBtn.textContent = 'Start';
  }
}

function startMachine() {
  if (timer) return;
  setRunning(true);
  count = 0;
  updateDisplay();

  timer = setInterval(() => {
    count += 1;
    updateDisplay();
    if (count >= 10) {
      clearInterval(timer);
      timer = null;
      setRunning(false);
      label.textContent = 'Done. The machine is proud of itself.';
    }
  }, 400);
}

function resetMachine() {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
  count = 0;
  updateDisplay();
  setRunning(false);
  label.textContent = 'The machine is idle.';
}

startBtn.addEventListener('click', startMachine);
resetBtn.addEventListener('click', resetMachine);
