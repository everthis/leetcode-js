/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N) {
  let used = Array(N + 1).fill(false)
  let res = 0
  function backtrack(curIdx) {
    if (curIdx === 0) return res++
    for (let i = 1; i <= N; i++) {
      if (used[i]) continue
      if (i % curIdx === 0 || curIdx % i === 0) {
        used[i] = true
        backtrack(curIdx - 1)
        used[i] = false
      }
    }
  }
  backtrack(N)
  return res
};
