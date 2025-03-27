// 1. Countdown target date
const getCountdownDate = () => {
  const currentYear = new Date().getFullYear();
  const targetDate = new Date(
    `Dec 31, ${currentYear} 23:59:59`
  );

  // Si ya pasó el fin de año actual, usar el próximo año
  if (new Date() > targetDate) {
    return new Date(
      `Dec 31, ${currentYear + 1} 23:59:59`
    ).getTime();
  }

  return targetDate.getTime();
};

// const currentDate = new Date().getFullYear();
// const countdownDate = new Date(
//   `Dec 31, ${currectDate} 23:59:59`
// ).getTime();

export { getCountdownDate };
