/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = function(days, costs) {
  const last7 = [], last30 = []
  let res = 0
  for(let d of days) {
    while(last7.length && last7[0][0] + 7 <= d) last7.shift()
    while(last30.length && last30[0][0] + 30 <= d) last30.shift()
    last7.push([d, res + costs[1]])
    last30.push([d, res + costs[2]])
    res = Math.min(res + costs[0], last7[0][1], last30[0][1])
  }
  return res
};
