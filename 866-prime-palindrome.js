/**
 * @param {number} N
 * @return {number}
 */
const primePalindrome = function(N) {
  if(N >= 8 && N <= 11) return 11
  for(let x = 1; x < 100000; x++) {
    let s = '' + x, r = s.split('').reverse().join('')
    let y = +(s + r.slice(1))
    if(y >= N && isPrime(y)) return y
  }
  return -1
};

function isPrime(x) {
  if(x < 2 || x % 2 === 0) return x === 2
  for(let i = 3; i * i <= x; i += 2) {
    if(x % i === 0) return false
  }
  return true
}
