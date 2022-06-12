/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
  let res = 0
  const arr = brackets
  let first = Math.min(income, arr[0][0])
  res = first * arr[0][1] / 100
  let remain = income - first
  for(let i = 1; i < arr.length; i++) {
    if(remain === 0) break
    const [cur, r] = arr[i]
    const gap = cur - arr[i - 1][0]
    const real = Math.min(gap, remain)
    res += real * r / 100
    remain -= real
  }
  
  return res
};
