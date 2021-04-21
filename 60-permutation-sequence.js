/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function (n, k) {
  let sb = ''
  const num = []
  let fact = 1
  for (let i = 1; i <= n; i++) {
    fact *= i
    num.push(i)
  }
  for (let i = 0, l = k - 1; i < n; i++) {
    fact = Math.floor(fact / (n - i))
    const index = Math.floor(l / fact)
    sb += num.splice(index, 1)[0]
    l -= index * fact
  }
  return sb
}

// another

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function(n, k) {
  let pos = 0
  const numbers = []
  const factorial = Array(n + 1).fill(0)
  let str = ''

  let sum = 1
  factorial[0] = 1

  for(let i = 1; i <= n; i++) {
    sum *= i
    factorial[i] = sum
  }
  for(let i = 1; i <= n; i++) {
    numbers.push(i)
  }
  k--
  for(let i = 1; i <= n; i++) {
    const idx = ~~(k / factorial[n - i])
    str += numbers[idx]
    numbers.splice(idx, 1)
    k -= idx * factorial[n - i]
  }

  return str
};
