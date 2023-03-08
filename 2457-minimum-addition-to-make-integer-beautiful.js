/**
 * @param {number} n
 * @param {number} target
 * @return {number}
 */
const makeIntegerBeautiful = function(n, target) {
  let res = 0, carry = 0
  const arr = []
  while(n) {
    if(digitSum(n) <= target) break
    const remain = (n % 10)
    if(remain === 0) {
      arr.push(0)
      carry = 0
    } else {
      arr.push(10 - remain)
      carry = 1
    }
    
    n = (Math.floor(n / 10)) + carry
  }
  if(arr.length === 0) return 0
  arr.reverse()
  return +arr.map(e => '' + e).join('')
  
  function digitSum(num) {
    let res = 0
    while(num > 0) {
      res += (num % 10)
      num = Math.floor(num/10)
    }
    return res
  }
};
