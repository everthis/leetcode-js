/**
 * @param {string} s
 * @return {number}
 */
const minFlipsMonoIncr = function(s) {
  const n = s.length
  let res = 0, oneCnt = 0
  for(const e of s) {
    if(e === '1') oneCnt++
    else {
      const stayZero = oneCnt
      const flipToOne = res + 1
      res = Math.min(stayZero, flipToOne)
    }
  }
  
  return res
};

// another


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
