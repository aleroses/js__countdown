// Fecha de fin de la cuenta regresiva
const countdownDate = new Date(
  "Dec 31, 2024 23:59:59"
).getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    clearInterval(interval);
    document.querySelector(".countdown").innerHTML =
      "¡La cuenta regresiva ha terminado!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  document.querySelector(".days").innerText = days;
  document.querySelector(".hours").innerText = hours;
  document.querySelector(".minutes").innerText = minutes;
  document.querySelector(".seconds").innerText = seconds;
}

const interval = setInterval(updateCountdown, 1000);
