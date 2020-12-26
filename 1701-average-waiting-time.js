/**
 * @param {number[][]} customers
 * @return {number}
 */
const averageWaitingTime = function(customers) {
  const n = customers.length
  let start = customers[0][0], end = start + customers[0][1]
  let sum = end - start
  for(let i = 1; i < n; i++) {
    end = end > customers[i][0] ? end + customers[i][1] : customers[i][0] + customers[i][1]
    sum += (end - customers[i][0])
  }
  
  let res = sum / n
  
  return res
};
