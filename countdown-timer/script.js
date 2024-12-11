const input = document.getElementById('time-input');
const timers = document.getElementById('timers');
const timerForm = document.getElementById('timer-form');

const corectPlurals = (num) => {
  const bigReminder = num % 100;
  const smallReminder = num % 10;
  if ((bigReminder > 10 && bigReminder < 21) || (smallReminder > 4 || smallReminder === 0)) {
    return `${num} секунд`;
  } else if(smallReminder > 1) {
    return `${num} секунды`;
  } else {
    return `${num} секунда`;
  }
};

const startTimer = async (duration, display, timerElement) => {
  return new Promise((resolve) => {
    const timerId = setInterval(() => {
      duration -= 1;
      display.textContent = `Осталось ${corectPlurals(duration)}`;
  
      if (duration <= 0) {
        clearInterval(timerId);
        timerElement.remove();
        resolve();
      }
    }, 1000);
    return timerId;
  });
}

const createTimer = async (duration) => {
  const timerElement = document.createElement('li');
  timerElement.className = 'timer';

  const timeDisplay = document.createElement('span');
  timeDisplay.textContent = `Осталось ${corectPlurals(duration)}`;

  const removeButton = document.createElement('button');
  removeButton.className = 'remove-button';
  removeButton.textContent = 'Удалить';

  timerElement.appendChild(timeDisplay);
  timerElement.appendChild(removeButton);
  
  timers.appendChild(timerElement);

  const deleteTimer = (id) => {
    clearInterval(id);
    timerElement.remove();
  }

  let remainingTime = duration;

  const timerId = startTimer(remainingTime, timeDisplay, timerElement)

  removeButton.addEventListener('click', () => {
    deleteTimer(timerId);
  });
};

timerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const time = parseInt(input.value);

  if (isNaN(time) || time <= 0) {
    alert('Пожалуйста, введите корректное время в секундах.');
    return;
  }

  createTimer(time);

  timerForm.reset();
});
