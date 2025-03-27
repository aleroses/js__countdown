// 1. Fecha objetivo para la cuenta regresiva
const currentYear = new Date().getFullYear();

const countdownDate = new Date(
  `Dec 31, ${currentYear} 23:59:59`
  /* "Sep 9, 2024 20:28:00" */
).getTime();

export { countdownDate };
