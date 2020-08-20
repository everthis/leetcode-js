/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(mat, k) {
  let lo = 0;
  let hi = 0;
  for(let r of mat) {
    lo += r[0];
    hi += r[r.length-1];
  }

  const check = (row, sum, limit) => {
    if (sum > limit) return 0;
    if (row === mat.length) return 1;
    let totalcnt = 0;
    for(let v of mat[row]) {
      const cnt = check(row + 1, v + sum, limit);
      totalcnt += cnt;
      if (cnt === 0 || totalcnt > k) break;  
    }
    return totalcnt;
  };

  while(lo <= hi) {
    const m = (lo + (hi - lo) / 2) >> 0;
    const cnt = check(0, 0, m);
    if (cnt < k) {
      lo = m + 1;
    } else {
      hi = m - 1;
    }
  }

  return lo;
};
