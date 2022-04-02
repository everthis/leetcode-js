/**
 * @param {number} n
 * @return {number}
 */
const primePalindrome = function(n) {
  if(n >= 8 && n <= 11) return 11
  const rev = str => str.split('').reverse().join('')
  for (let i = 1; i < 1e5; i++) {
    let left = `${i}`, right = rev(left).slice(1)
    let num = +(left + right)
    if (num >= n && isPrime(num)) return num
  }
  return -1

  function isPrime(num) {
    if(num < 2 || num % 2 === 0) return num === 2
    for(let i = 3; i * i <= num; i += 2) {
      if(num % i === 0) return false
    }
    return true
  }
};

// another

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

// another


/**
 * @param {number} n
 * @return {number}
 */
const primePalindrome = function(n) {
  if(n >= 8 && n <= 11) return 11

  const rev = num => `${num}`.split('').reverse().join('')
  for(let i = 1; i < 1e5; i++) {
    let left = i, right = rev(left).slice(1)
    const tmp = +(left + right)
    if(tmp >= n && isPrime(tmp)) return tmp
  }

  function isPrime(num) {
    if(num <= 2) return num === 2
    if(num % 2 === 0) return false
    for(let i = 3; i ** 2 <= num; i += 2) {
      if(num % i === 0) return false
    }
    return true
  }
};
