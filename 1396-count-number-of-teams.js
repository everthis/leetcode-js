/**
 * @param {number[]} rating
 * @return {number}
 */
const numTeams = function(rating) {
  let res = 0
  for(let i = 1, n = rating.length; i < n - 1; i++) {
    const less = Array(2).fill(0), greater = Array(2).fill(0)
    for(let j = 0; j < n; j++) {
      if(rating[i] > rating[j]) {
        less[j < i ? 0 : 1]++
      }
      if(rating[i] < rating[j]) {
        greater[j > i ? 0 : 1]++
      }
    }
    res += less[0] * greater[0] + less[1] * greater[1]
  }
  return res
};
