/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function(gas, cost) {
  let total = 0
  let curLeft = 0
  let curtIdx = 0
  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i]
    curLeft += gas[i] - cost[i]
    if (curLeft < 0) {
      curtIdx = i + 1
      curLeft = 0
    }
  }
  return total < 0 ? -1 : curtIdx
}
