/**
 * @param {number[]} candidates
 * @return {number}
 */
const largestCombination = function(candidates) {
  let res = 0
  for(let i = 0; i < 25; i++) {
    let tmp = 0, bit = 1 << i
    for(const e of candidates) {
      if((e & bit) !== 0) tmp++
    }
    res = Math.max(res, tmp)
  }
  return res
};

// another

/**
 * @param {number[]} candidates
 * @return {number}
 */
const largestCombination = function(candidates) {
  const arr = Array(24).fill(0), len = 24
  for(const e of candidates) {
    const str = toBin(e)
    for(let n = str.length, i = n - 1; i >= 0; i--) {
      const cur = str[i]
      if(cur === '1') {
        arr[len - 1 - (n - 1 - i)]++
      }
    }
  }
  
  return Math.max(...arr)
  
  function toBin(num) {
    return (num >>> 0).toString(2)
  }
};

