/**
 * @param {number[]} customers
 * @param {number} boardingCost
 * @param {number} runningCost
 * @return {number}
 */
const minOperationsMaxProfit = function(customers, boardingCost, runningCost) {
  let remain = 0
  let profit = 0
  let cost = 0
  let max = -Infinity
  let maxNum = 0
  for(let i = 0, len = customers.length; i < len; i++) {
    const e = customers[i]
    remain += e
    const cur = (remain >= 4 ? 4 : remain)
    remain -= cur
    profit += cur * boardingCost - runningCost
    if(profit > max) maxNum++
    max = Math.max(max, profit)
  }
  if(remain) {
    const r = Math.floor(remain / 4)
    const single = 4 * boardingCost - runningCost
    remain = remain % 4
    // profit += (single * r + (remain > 0 ? (remain * boardingCost - runningCost) : 0))
    profit += single * r
    if(single > 0) maxNum += r
    max = Math.max(max, profit)
    if (remain < 4) {
      const tmp = remain * boardingCost - runningCost
      profit += tmp
      remain = 0
      if(profit > max) maxNum++
      max = Math.max(max, profit)
    }
  }
  if (max <=0 )return -1
  return maxNum
};
