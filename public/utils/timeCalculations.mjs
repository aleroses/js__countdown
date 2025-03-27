// 2. Función para calcular la distancia de tiempo restante
const getTimeRemaining = (targetDate) => {
  const date = new Date();
  let newDay = date.getDate();
  let newMont = date.getMonth() + 1;

  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
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
    newMont,
  };
};

export { getTimeRemaining };
