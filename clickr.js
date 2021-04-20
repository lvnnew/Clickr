let clicks = 0; // Переменная для хранения кликов

const TIMEOUT = 5000; // Константа для хранения обратного отсчета

// Получаем доступ к элементам со страницы
const display = document.querySelector('#display'); // Получаем доступ к дисплею
const button = document.querySelector('#button'); 
const counter = document.querySelector('#counter'); 

// Обработчик
button.onclick = start;

// Определяем функцию start
function start() {
    const startTime = Date.now(); // получаем текущее колличество миллисекунд

    display.textContent = formatTime(TIMEOUT); // отображаем оставшееся колличество миллисекунд
    button.onclick = () => counter.textContent = clicks++;

    const interval = setInterval(() => {
        const delta = Date.now() - startTime; // получаем разницу
        display.textContent = formatTime(TIMEOUT - delta); // отображаем разницу
    }, 100);

    const timeout = setTimeout(() => {
        button.onclick = null; // убирает обработчик
        display.textContent = 'Game Over'; // показываем сообщение

        clearInterval(interval);
        clearTimeout(timeout);
    }, TIMEOUT);
}

// форматирование миллисекунд в нормальный формат
function formatTime(ms) {
    return Number .parseFloat(ms / 1000).toFixed(2);
}