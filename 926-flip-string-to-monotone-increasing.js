/**
 * @param {string} s
 * @return {number}
 */
const minFlipsMonoIncr = function(s) {
  const n = s.length
  const arr = Array(n).fill(0)
  let oneCnt = 0
  for(let i = 0; i < n; i++) {
    if(s[i] === '1') oneCnt++
    arr[i] = oneCnt
  }
  const zeroCnt = n - oneCnt
  let res = Infinity
  
  for(let i = 0; i < n; i++) {
    const cnt = arr[i]
    const tmp = cnt + (zeroCnt - (i + 1 - cnt))
    res = Math.min(res, tmp)
  }
  res = Math.min(res, oneCnt, zeroCnt)
  return res
};
