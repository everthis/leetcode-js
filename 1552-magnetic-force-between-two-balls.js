/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
const maxDistance = function(position, m) {
  position.sort((a, b) => a - b)
  const n = position.length
  let l = Infinity, r = 1
  for (let i = 1; i < n; i++) {
    if (position[i] - position[i - 1] < l) l = position[i] - position[i - 1]
  }
  r = position[n - 1] - position[0]
  while(l < r) {
    const mid = r - Math.floor((r - l) / 2)
    if(valid(mid)) l = mid
    else r = mid - 1
  }
  return l

  function valid(mid) {
    let res = 1, cur = 0
    for (let i = 1; i < n; i++) {
      const delta = position[i] - position[i - 1]
      cur += delta
      if (cur >= mid) {
        res++
        cur = 0
      }
      if(res === m) return true
    }
    return false
  }
};
