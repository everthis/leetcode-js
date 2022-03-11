/**
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function(calories, k, lower, upper) {
    let res = 0
    for(let i = 0, n = calories.length; i < n - k + 1; i++) {
      let tmp = 0
      for(let j = 0; j < k && i + j < n; j++) {
        tmp += calories[i + j]
      }
      if(tmp < lower) res--
      else if(tmp > upper) res++
    }
    return res
};
