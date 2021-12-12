/**
 * @param {number[][]} fruits
 * @param {number} startPos
 * @param {number} k
 * @return {number}
 */
const maxTotalFruits = function(fruits, startPos, k) {
    let n = fruits.length, { max, min } = Math
    let pos = fruits.map(([p,a]) => p)
    const prefix = Array(n).fill(0)

    let curr = 0
    for (let i = 0; i < n; i++) {
        curr += fruits[i][1]
        prefix[i] = curr      
    }

  function bisect_left(a, x, lo = 0, hi = null) {
    // >= lower_bound
    if (lo < 0) throw new Error('lo must be non-negative')
    if (hi == null) hi = a.length
    while (lo < hi) {
      let mid = parseInt((lo + hi) / 2)
      a[mid] < x ? (lo = mid + 1) : (hi = mid)
    }
    return lo
  }
    function bisect_right(a, x, lo = 0, hi = null) {
    // > upper_bound
    if (lo < 0) throw new Error('lo must be non-negative')
    if (hi == null) hi = a.length
    while (lo < hi) {
      let mid = parseInt((lo + hi) / 2)
      x < a[mid] ? (hi = mid) : (lo = mid + 1)
    }
    return lo
  }
    function query(left, right) {
         left = max(left, 0)
        right = min(right, 200000)
        let l = bisect_left(pos, left)
        let r = bisect_right(pos, right) - 1
        if (l > r) return 0
        if (!l) return prefix[r]
        return prefix[r] - prefix[l - 1]      
    }


    let best = 0
    let idx = 0
    for(let right = startPos + k; right > startPos - 1; right -= 2) {
        let cand = query(startPos - idx, right)
        best = max(best, cand)
        idx += 1      
    }

    idx = 0
      for(let left = startPos - k; left < startPos + 1; left += 2) {
                let cand = query(left, startPos + idx)
        best = max(best, cand)
        idx += 1
      }

    return best    
};

