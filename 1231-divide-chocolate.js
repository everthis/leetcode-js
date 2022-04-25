/**
 * @param {number[]} sweetness
 * @param {number} K
 * @return {number}
 */
const maximizeSweetness = function (sweetness, K) {
  let left = 1,
    right = 1e9 / (K + 1)
  while (left < right) {
    let mid = (left + right + 1) >> 1
    let cur = 0,
      cuts = 0
    for (let a of sweetness) {
      if ((cur += a) >= mid) {
        cur = 0
        if (++cuts > K) break
      }
    }
    if (cuts > K) left = mid
    else right = mid - 1
  }
  return left
}

// another

/**
 * @param {number[]} sweetness
 * @param {number} K
 * @return {number}
 */
const maximizeSweetness = function(sweetness, K) {
  let l = 1, r = 10 ** 9
  while(l < r) {
    const mid = r - Math.floor((r - l) / 2)
    if(valid(mid)) l = mid
    else r = mid - 1
  }
  return l
  
  function valid(mid) {
    let res = 0, cur = 0
    const n = sweetness.length
    for(let i = 0; i < n; i++) {
      const e = sweetness[i]
      cur += e
      if(cur >= mid) {
        res++
        cur = 0
      }
    }
    return res >= K + 1
  }
};
