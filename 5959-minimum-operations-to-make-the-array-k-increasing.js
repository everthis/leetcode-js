/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const kIncreasing = function(arr, k) {
  const n = arr.length
  const a = Array.from({ length: k }, () => Array())
  
  for(let i = 0; i < k; i++) {
    for(let j = i; j < n; j += k) {
      a[i].push(arr[j])
    }
  }
  
  let res = 0
  for(let i = 0; i < a.length; i++) {
    const r = a[i]
    res += r.length - lis(r)
  }
  
  return res
  
  function bisect_right(a, x, lo = 0, hi = null) { // > upper_bound
      if (lo < 0) throw new Error('lo must be non-negative');
      if (hi == null) hi = a.length;
      while (lo < hi) {
          let mid = parseInt((lo + hi) / 2);
          x < a[mid] ? hi = mid : lo = mid + 1;
      }
      return lo;
  }
  
  function lis(ar) {
    let q = []
    for (let x of ar) {
        let i = bisect_right(q, x)
        if (i == q.length) q.push(x)
        else q[i] = x      
    }

    return q.length
  }
};

