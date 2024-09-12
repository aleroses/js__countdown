const countdownDate = new Date(
  "Dec 31, 2024 23:59:59"
).getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    clearInterval(interval);

    document.querySelector(".countdown").innerHTML =
      "It's already a new year!";
    return;
  }

  const showDays = document.querySelector(".days");
  const showHours = document.querySelector(".hours");
  const showMinutes = document.querySelector(".minutes");
  const showSeconds = document.querySelector(".seconds");

  const seconds = distance / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  const calculateDays = days;
  const calculateHours = hours % 24;
  const calculateMinutes = minutes % 60;
  const calculateSeconds = seconds % 60;

  showDays.innerHTML = Math.floor(calculateDays);
  showHours.innerHTML = Math.floor(calculateHours);
  showMinutes.innerHTML = Math.trunc(calculateMinutes);
  showSeconds.innerHTML = Math.trunc(calculateSeconds);
};

const interval = setInterval(updateCountdown, 1000);
