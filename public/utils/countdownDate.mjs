// 1. Countdown target date
const getCountdownDate = () => {
  const currentYear = new Date().getFullYear();
  const targetDate = new Date(
    `Dec 31, ${currentYear} 23:59:59`
  );

  // If the current year-end has already passed, use the next year
  if (new Date() > targetDate) {
    return new Date(
      `Dec 31, ${currentYear + 1} 23:59:59`
    ).getTime();
  }

  return targetDate.getTime();
};

export { getCountdownDate };
