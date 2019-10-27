/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
  const maxInt = Math.pow(3,30)
  if(n < 0) {
    return false
  }
  return maxInt % n === 0
} 

// another

const isPowerOfThree = function(n) {
  if (n == 1) return true
  if (n === 0) return false
  if (n % 3 !== 0) return false
  if (n == 3) return true
  return isPowerOfThree(n / 3)
}

// another

const isPowerOfThree = function(n) {
  if(n == null || n === 0) return false
  let num = 1
  while(num < n) {
    num *= 3
  }  
  return num > n ? false : true
}
