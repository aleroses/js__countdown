// 1. Countdown target date
const getCountdownDate = () => {
  const currentYear = new Date().getFullYear();
  const targetDate = new Date(
    `Dec 31, ${currentYear} 23:59:59`
  );

  return targetDate.getTime();
};

export { getCountdownDate };
