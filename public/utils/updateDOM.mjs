// 3. Function to update the DOM with the calculated values
const updateDOM = (timeData, interval) => {
  const showDays = document.querySelector(".days");
  const showHours = document.querySelector(".hours");
  const showMinutes = document.querySelector(".minutes");
  const showSeconds = document.querySelector(".seconds");

  const container = document.querySelector(".countdown");
  const emojis = document.querySelector("h2");

  container.classList.remove("new-year");
  emojis.classList.remove("emojis");

  if (timeData.expired) {
    container.classList.add("new-year");
    emojis.classList.add("emojis");

    document.querySelector(".new-year").innerText =
      "It's already a new year!";

    emojis.textContent = "🎊🍇🚀🎉";
  } else {
    showDays.innerHTML = timeData.days;
    showHours.innerHTML = timeData.hours;
    showMinutes.innerHTML = timeData.minutes;
    showSeconds.innerHTML = timeData.seconds;
  }
};

export { updateDOM };
