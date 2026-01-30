/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function(n, k) {
  const res = [];
  bt(res, [], 1, n, k);
  return res;
};

function bt(res, tmp, start, n, k) {
  if (k === 0) {
    res.push(tmp.slice(0));
    return;
  }
  for (let i = start; i <= n - k + 1; i++) {
    tmp.push(i);
    bt(res, tmp, i + 1, n, k - 1);
    tmp.pop();
  }
}


// another

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  const cur = Array(k).fill(0)

  let i = 0
  const res = []
  while(i >= 0) {
    cur[i]++
    if(cur[i] > n) {
      i--
    } else if(i === k - 1) {
      res.push(cur.slice(0))
    } else {
      i++
      cur[i] = cur[i - 1]
    }
  }

  return res
};
