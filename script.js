let clockInterval;

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const timeString = `<span class="clock-numbers">${hours}</span>:<span class="clock-numbers">${minutes}</span>:<span class="clock-numbers">${seconds}</span>`;

  document.getElementById('clock').innerHTML = timeString;
}

function toggleClock() {
  if (clockInterval) {
    clearInterval(clockInterval);
    clockInterval = null;
  } else {
    clockInterval = setInterval(updateClock, 1000);
    updateClock(); 
  }
}

function resetClock() {
  clearInterval(clockInterval);
  clockInterval = null;
  updateClock(); 
}
toggleClock();
