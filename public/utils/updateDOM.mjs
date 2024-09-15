// 3. Function to update the DOM with the calculated values
const updateDOM = (timeData, interval) => {
  const showDays = document.querySelector(".days");
  const showHours = document.querySelector(".hours");
  const showMinutes = document.querySelector(".minutes");
  const showSeconds = document.querySelector(".seconds");

  if (timeData.expired) {
    document.querySelector(".countdown").innerHTML =
      "It's already a new year!";

    const message = document.querySelector("h2");
    message.classList.add("message")
    message.innerHTML = "🎊🍇🚀🎉";

    clearInterval(interval);
  } else {
    showDays.innerHTML = timeData.days;
    showHours.innerHTML = timeData.hours;
    showMinutes.innerHTML = timeData.minutes;
    showSeconds.innerHTML = timeData.seconds;
  }
};

export { updateDOM };
