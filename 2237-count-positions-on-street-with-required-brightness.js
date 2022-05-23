/**
 * @param {number} n
 * @param {number[][]} lights
 * @param {number[]} requirement
 * @return {number}
 */
var meetRequirement = function(n, lights, requirement) {
  const arr = Array(n + 1).fill(0)
  for(const [pos, ra] of lights) {
    const start = Math.max(0, pos - ra)
    const end = Math.min(n - 1, pos + ra)
    arr[start]++
    arr[end + 1]--
  }
  for(let i = 1; i <= n; i++) {
    arr[i] += arr[i - 1]
  }
  
  let res = 0
  for(let i = 0; i < n; i++) {
    if(arr[i] >= requirement[i]) res++
  }
  
  return res
};
