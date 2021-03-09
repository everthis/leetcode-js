/**
 * @param {string} s
 * @return {number}
 */
const numSplits = function(s) {
  const n = s.length
  const freq = new Map()
  const prefix = Array(26).fill(0)
  for(let i = 0; i < n; i++) {
    if(freq.get(s[i]) == null) freq.set(s[i], 0)
    freq.set(s[i], freq.get(s[i]) + 1)
    prefix[i] = freq.size
  }
  freq.clear()
  const suffix = Array(26).fill(0)
  for(let i = n - 1; i >= 0 ;i--) {
    if(freq.get(s[i]) == null) freq.set(s[i], 0)
    freq.set(s[i], freq.get(s[i]) + 1)
    suffix[i] = freq.size
  }
  // console.log(prefix, suffix)
  let res = 0
  for(let i = 1; i < n; i++) {
    if(prefix[i - 1] === suffix[i]) res++
  }
  
  return res
};


// another


/**
 * @param {string} s
 * @return {number}
 */
const numSplits = function(s) {
  const arr = Array(26).fill(0)
  const a = 'a'.charCodeAt(0)
  for(let i = 0, len = s.length; i < len; i++) {
    arr[s.charCodeAt(i) - a]++
  }
  const cur = Array(26).fill(0)
  let res = 0
  for(let i = 0, len = s.length; i < len - 1; i++) {
    cur[s.charCodeAt(i) - a]++
    let tmp = false, clone = arr.slice()
    for(let j = 0; j < 26; j++) {
      clone[j] -= cur[j]
    }
    const curNum = cur.reduce((ac, e) => ac + (e > 0 ? 1 : 0), 0)
    const cloneNum = clone.reduce((ac, e) => ac + (e > 0 ? 1 : 0), 0)
    if(curNum === cloneNum) res++
  }
  
  return res
};

