import { countdownDate } from "./utils/countdownDate.mjs";
import { getTimeRemaining } from "./utils/timeCalculations.mjs";
import { updateDOM } from "./utils/updateDOM.mjs";

// 4. Function that executes the complete countdown flow.
const updateCountdown = () => {
  const timeData = getTimeRemaining(countdownDate);
  updateDOM(timeData, interval);
};

// 5. Interval to update the countdown every second
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
