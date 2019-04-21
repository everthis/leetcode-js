/**
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = function(costs) {
  const len = costs.length
  if(len === 0) return 0
  const N = len / 2
  costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]))
  let res = 0
  for(let i = 0; i < costs.length; i++) {
    if(i < N) {
      res += costs[i][0]
    } else {
      res += costs[i][1]
    }
  }
  return res
};
