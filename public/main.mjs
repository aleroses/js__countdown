import { getCountdownDate } from "./utils/countdownDate.mjs";
import { getTimeRemaining } from "./utils/timeCalculations.mjs";
import { updateDOM } from "./utils/updateDOM.mjs";

let interval;
let currentCountdownDate = getCountdownDate();

const updateCountdown = () => {
  const timeData = getTimeRemaining(currentCountdownDate);

  if (timeData.expired) {
    // If expired, obtain a new date and restart
    currentCountdownDate = getCountdownDate();
    clearInterval(interval);
    interval = setInterval(updateCountdown, 1000);
    return;
  }

  updateDOM(timeData);
};

// Start countdown
interval = setInterval(updateCountdown, 1000);

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
