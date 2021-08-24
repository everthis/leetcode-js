/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
const daysBetweenDates = function(date1, date2) {
  const d1 = new Date(date1)
  const d2 = new Date(date2)
  return Math.abs((d1.getTime() - d2.getTime()) / (1000 * 60 * 60 * 24))
};
