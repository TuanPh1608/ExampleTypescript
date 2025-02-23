window.onload = (): void => {
    const startButton = document.getElementById('startButton');
    const resetButton = document.getElementById('resetButton');
    const timerDisplay = document.getElementById('timer');
    let timerValue: number = 0;
    let timerInterval: number | undefined;

    if (startButton && resetButton && timerDisplay) {
        startButton.addEventListener('click', (): void => {
            if (startButton.textContent === 'Start') {
                startButton.textContent = 'Stop';
                startButton.classList.remove('btn-primary');
                startButton.classList.add('btn-danger');
                timerInterval = setInterval((): void => {
                    timerValue += 10;
                    timerDisplay.textContent = (timerValue / 1000).toFixed(3);
                }, 10);
            } else {
                startButton.textContent = 'Start';
                startButton.classList.remove('btn-danger');
                startButton.classList.add('btn-primary');
                if (timerInterval) {
                    clearInterval(timerInterval);
                }
            }
        });

        resetButton.addEventListener('click', (): void => {
            if (timerInterval) {
                clearInterval(timerInterval);
            }
            timerValue = 0;
            timerDisplay.textContent = (timerValue / 1000).toFixed(3);
            startButton.textContent = 'Start';
            startButton.classList.remove('btn-danger');
            startButton.classList.add('btn-primary');
        });
    }
};
