/**
 * @param {number[]} chargeTimes
 * @param {number[]} runningCosts
 * @param {number} budget
 * @return {number}
 */
const maximumRobots = function(chargeTimes, runningCosts, budget) {
  const times = chargeTimes, costs = runningCosts
  let sum = 0, res = 0, j = 0
  const q = [], n = times.length
  for(let i = 0; i < n; i++) {
    sum += costs[i]
    while(q.length && times[q[q.length - 1]] <= times[i]) q.pop()
    q.push(i)
    
    if(q.length && times[q[0]] + (i - j + 1) * sum > budget) {
      if(q[0] === j) q.shift()
      sum -= costs[j]
      j++
    }
    res = Math.max(res, i - j + 1)
  }
  
  return res
};

