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
