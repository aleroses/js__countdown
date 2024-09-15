import { countdownDate } from "./utils/countdownDate.mjs";
import { getTimeRemaining } from "./utils/timeCalculations.mjs";
import { updateDOM } from "./utils/updateDOM.mjs";

const updateCountdown = () => {
  const timeData = getTimeRemaining(countdownDate);
  updateDOM(timeData, interval);
};

const interval = setInterval(updateCountdown, 1000);
