/**
 * @param {number[]} salary
 * @return {number}
 */
const average = function(salary) {
  const sum = salary.reduce((ac, e) => ac + e, 0)
  const min = Math.min(...salary), max = Math.max(...salary)
  const n = salary.length
  
  return (sum - min - max) / (n - 2)
};
