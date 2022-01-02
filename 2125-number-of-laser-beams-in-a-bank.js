/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function(bank) {
  const comb = (num1, num2) => num1 * num2
  const m = bank.length, n = bank[0].length
  if(m === 0 || n === 0) return 0
  let pre = 0, res = 0
  for(let j = 0; j < n; j++) {
    if(bank[0][j] === '1') pre++
  }
  for(let i = 1; i < m; i++) {
    let chk = 0, cur = bank[i]
    for(let j = 0; j < n; j++) {
      if(cur[j] === '1') chk++
    }
    if(chk) {
      res += comb(pre, chk)
      pre = chk
    }
  }
  return res
};
