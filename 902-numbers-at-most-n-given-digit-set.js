/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
const atMostNGivenDigitSet = function(digits, n) {
  let res = 0
  const str = `${n}`, len = str.length
  const { pow } = Math, base = digits.length
  for(let i = 1; i < len; i++) {
    res += pow(base, i)
  }
  
  dfs(0)
  
  return res
  
  function dfs(pos) {
    if(pos === len) {
      res++
      return
    }
    for(const ch of digits) {
      if(str[pos] > ch) {
        res += pow(base, len - 1 - pos)
      } else if(str[pos] === ch) {
        dfs(pos + 1)
      } else break
    }
  }
};

// another


/**
 * @param {string[]} digits
 * @param {number} n
 * @return {number}
 */
const atMostNGivenDigitSet = function(digits, n) {
  const str = '' + n, { pow } = Math
  const len = str.length, dsize = digits.length
  let res = 0
  
  for(let i = 1; i < len; i++) {
    res += pow(dsize, i)
  }
  
  for(let i = 0; i < len; i++) {
    let sameNum = false
    for(const d of digits) {
      if(+d < +str[i]) {
        res += pow(dsize, len - i - 1)
      } else if(+d === +str[i]) sameNum = true
    }
    if(sameNum === false) return res
  }
  
  return res + 1
};
