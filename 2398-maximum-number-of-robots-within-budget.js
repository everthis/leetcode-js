/**
 * @param {number[]} chargeTimes
 * @param {number[]} runningCosts
 * @param {number} budget
 * @return {number}
 */
var maximumRobots = function(chargeTimes, runningCosts, budget) {
  let times = chargeTimes
  let costs = runningCosts
  let sum = 0;
  let i = 0, n = times.length;
  const d = [];
  for (let j = 0; j < n; ++j) {
      sum += costs[j];
      while (d.length && times[d[d.length - 1]] <= times[j]) d.pop();
      d.push(j);
      if (times[d[0]] + (j - i + 1) * sum > budget) {
          if (d[0] == i) d.shift();
          sum -= costs[i++];
      }
  }
  return n - i; 
};

