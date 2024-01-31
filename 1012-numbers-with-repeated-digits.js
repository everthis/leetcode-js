/**
 * @param {number} n
 * @return {number}
 */
var numDupDigitsAtMostN = function(n) {
  const digits = [], {floor} = Math
  let tmp = n + 1
  while(tmp) {
    digits.push(tmp % 10)
    tmp = floor(tmp / 10)
  }
  let res = 0
  const len = digits.length
  let cur = 9
  for(let i = 0; i < len - 1; i++) {
    res += cur
    cur *= (9 - i)
  }
  cur = floor(cur / 9)
  const seen = Array(10).fill(false)
  for(let i = 0; i < len; i++) {
    const d = digits[len - i - 1]
    for(let j = (i === 0 ? 1 : 0); j < d; j++) {
      if(!seen[j]) res += cur
    }
    cur = floor(cur / (9 - i))
    if(seen[d]) break
    seen[d] = true
  }

  return n - res
};
