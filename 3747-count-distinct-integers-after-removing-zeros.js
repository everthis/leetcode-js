/**
 * @param {number} n
 * @return {number}
 */
var countDistinct = function(n) {
  const s = '' + n
  const d = s.length
  const {pow} = Math
  let total = 0
  for(let i = 1; i < d; i++) {
    total += pow(9, i)
  }

  for(let i = 0; i < d; i++) {
    const e = +s[i]
    let remaining = d - i - 1

    if(e > 1) {
      total += (e - 1) * pow(9, remaining)
    }
    if(e === 0) return total
  }


  return total + 1
};
