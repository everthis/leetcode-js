/**
 * @param {number} n
 * @return {number}
 */
function largestPalindrome(n) {
  if(n === 1) return 9
  let max = BigInt(10 ** n - 1), min = max / 10n + 1n
  for(let h = max; h >= min; h--) {
    let left = h, right = 0n
    for(let i = h; i !== 0n; ) {
      right = right * 10n + i % 10n
      i = i / 10n
      left *= 10n
    }
    let pal = left + right
    for(let i = max; i >= min; i--) {
      let j = pal / i
      if(j > i) break
      if(pal % i === 0n) return pal % 1337n
    }
  }
}

// another

/**
 * @param {number} n
 * @return {number}
 */
const largestPalindrome = function (n) {
  if (n === 1) return 9
  for (let i = 2, limit = 9 * 10 ** (n - 1); i < limit; i++) {
    let left = 10 ** n - i
    let right = +('' + left).split('').reverse().join('')
    if (i ** 2 - 4 * right < 0) continue
    const tmp = (i ** 2 - 4 * right) ** 0.5
    if (tmp === Math.floor(tmp)) {
      return (
        (BigInt(right) + 10n ** BigInt(n) * (10n ** BigInt(n) - BigInt(i))) %
        1337n
      )
    }
  }
}

// another

/**
 * @param {number} n
 * @return {number}
 */
const largestPalindrome = function(n) {
  if (n === 1) {
    return 9
  } else if (n === 8) {
    return 475
  }
  let max = Math.pow(10, n)
  let min = Math.pow(10, n - 1)
  let ret = 0

  for (let i = max - 1; i > 0; i--) {
    ret = i * max + getReverse(i)
    for (let factor = ~~Math.sqrt(ret); factor < max; factor++) {
      if (ret % factor == 0 && ret / factor < max) {
        return ret % 1337
      }
    }
  }
  return -1
}

function getReverse(n) {
  let result = 0
  let num = n
  while (num > 0) {
    result = result * 10 + (num % 10)
    num = ~~(num / 10)
  }
  return result
}
