// 2. Function for calculating the remaining time distance
const getTimeRemaining = (targetDate) => {
  const now = new Date();
  const newDay = now.getDate();
  const newMonth = now.getMonth() + 1;

  const distance = targetDate - now.getTime();

  if (newDay < 3 && newMonth === 1) {
    return {
      expired: true,
    };
  }

  const seconds = distance / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  return {
    expired: false,
    days: Math.floor(days),
    hours: Math.floor(hours % 24),
    minutes: Math.floor(minutes % 60),
    seconds: Math.floor(seconds % 60),
    newDay,
    newMonth,
  };
};

export { getTimeRemaining };
