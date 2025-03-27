// 3. Función para actualizar el DOM con los valores calculados
const updateDOM = (timeData, interval) => {
  const showDays = document.querySelector(".days");
  const showHours = document.querySelector(".hours");
  const showMinutes = document.querySelector(".minutes");
  const showSeconds = document.querySelector(".seconds");

  // console.log(timeData);

  
  if (
    (timeData.expired,
    timeData.newDay < 3,
    timeData.newMont === 1)
  ) {
    document.querySelector(".countdown").innerHTML =
      "It's already a new year!";
    clearInterval(interval);
  } else {
    showDays.innerHTML = timeData.days;
    showHours.innerHTML = timeData.hours;
    showMinutes.innerHTML = timeData.minutes;
    showSeconds.innerHTML = timeData.seconds;
  }
};

export { updateDOM };
