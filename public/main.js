// Countdown end date
const countdownDate = new Date(
  "Dec 31, 2024 23:59:59"
).getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    clearInterval(interval);

    document.querySelector(".countdown").innerHTML =
      "It's already a new year!";
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

/*
getTime(): devuelve el número de milisegundos que han transcurrido desde el 1 de enero de 1970 00:00:00 UTC

1 segundo = 1000 milisegundos.
Hay 60 segundos en un minuto.
Hay 60 minutos en una hora.
Hay 24 horas en un día.

x ms / 1000 ms = s
x s / 60s = m
x m / 60m = h
x h / 24h = d
*/
