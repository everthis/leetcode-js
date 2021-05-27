/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const minKBitFlips = function(A, K) {
    let cur = 0, res = 0;
    for (let i = 0; i < A.length; ++i) {
        if (i >= K) cur -= (A[i - K] / 2) >> 0;
        if ((cur & 1 ^ A[i]) === 0) {
            if (i + K > A.length) return -1;
            A[i] += 2;
            cur++;
            res++;
        }
    }
    return res;
};

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minKBitFlips = function(nums, k) {
  const n = nums.length, q = []
  let res = 0
  for(let i = 0; i < n; i++) {
    if(nums[i] === 0) {
      if(q.length === 0 || q.length % 2 === 0) {
        res++
        q.push(i + k - 1)
      }
    } else {
      if(q.length % 2 === 1) {
        res++
        q.push(i + k - 1)
      }
    }
    if(q.length && i >= q[0]) q.shift()
  }
  return q.length ? -1 : res
};

