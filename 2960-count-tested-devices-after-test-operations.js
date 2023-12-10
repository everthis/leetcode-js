/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
  const arr = batteryPercentages
  const n = arr.length
  let cnt = 0
  for(let i = 0; i < n; i++) {
    const e = Math.max(0, arr[i] - cnt)
    if(e > 0) {
      cnt++
    }
  }
  return  cnt
};
