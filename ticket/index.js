    window.onload = function() {
      const userInput = prompt("Введіть кількість пасажириів:");
      const userInputWagon = prompt("Введіть вагон:");

      if (userInput !== null && !isNaN(userInput)) {
        document.getElementById("result").textContent = `${userInput}`;
        document.getElementById("wagon").textContent = `№${userInputWagon}`;

      } else {
        document.getElementById("result").textContent = "Було введено не число або скасовано.";
      }
    };
    
    
    
    function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');

      const currentTime = `${hours}:${minutes}:${seconds}`;
      document.getElementById('clock').textContent = currentTime;
    }

    // Оновлювати щосекунди
    setInterval(updateClock, 1000);

    // Запуск одразу після завантаження сторінки
    updateClock();


  function getCurrentDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}.${month}.${year}`;
  }

  document.getElementById("date").textContent = getCurrentDate();
  

      function startOneHourTimer() {
      const duration = 60 * 60; // 1 година в секундах
      let timeLeft = duration;

      const timerEl = document.getElementById('timer');

      function updateTimer() {
        const hours = String(Math.floor(timeLeft / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, '0');
        const seconds = String(timeLeft % 60).padStart(2, '0');

        timerEl.textContent = `${hours}:${minutes}:${seconds}`;

        if (timeLeft > 0) {
          timeLeft--;
        } else {
          clearInterval(timerInterval);
          timerEl.textContent = 'Час вийшов!';
        }
      }

      updateTimer(); // оновити одразу
      const timerInterval = setInterval(updateTimer, 1000);
    }

    startOneHourTimer();