const mod = 1e9 + 7
const fact = Array(1e5 + 2)
getfact()
// console.log(fact)
/**
 * @param {string} s
 * @return {number}
 */
const countAnagrams = function (s) {
  let ans = 1
  const arr = s.trim().split(' ')
  for (const word of arr) {
    ans = modmul(ans, ways(word))
  }

  return ans
}

function modmul(a, b) {
  const big = BigInt
  return Number(((big(a) % big(mod)) * (big(b) % big(mod))) % big(mod))
}

function binExpo(a, b) {
  if (b === 0) return 1
  let res = binExpo(a, Math.floor(b / 2))
  if (b & 1) {
    return modmul(a, modmul(res, res))
  } else {
    return modmul(res, res)
  }
}

function modmulinv(a) {
  return binExpo(a, mod - 2)
}

function getfact() {
  fact[0] = 1
  for (let i = 1; i <= 100001; i++) {
    fact[i] = modmul(fact[i - 1], i)
  }
}

function ways(str) {
  const freq = Array(26).fill(0)
  const a = 'a'.charCodeAt(0)
  for (let i = 0; i < str.length; i++) {
    freq[str.charCodeAt(i) - a]++
  }

  let totalWays = fact[str.length]

  let factR = 1
  for (let i = 0; i < 26; i++) {
    factR = modmul(factR, fact[freq[i]])
  }
  // console.log(freq, totalWays, factR)
  return modmul(totalWays, modmulinv(factR))
}
