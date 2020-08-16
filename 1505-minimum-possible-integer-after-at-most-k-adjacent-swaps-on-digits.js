/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const minInteger = function (num, k) {
  const nums = num.split('')
  const len = nums.length
  const q = Array(10)
    .fill(null)
    .map(() => [])
  nums.forEach((n, i) => q[+n].push(i))
  const tree = new Fenwick(nums.length)
  for (let i = 1; i <= len; i++) tree.update(i, 1)
  let re = ''
  for (let i = 0; i < len; i++) {
    for (let j = 0; j <= 9; j++) {
      const idxArr = q[j]
      if (idxArr && idxArr.length) {
        const idx = idxArr[0]
        const num = tree.query(idx)
        if (num > k) continue
        k -= num
        idxArr.shift()
        tree.update(idx + 1, -1)
        re += j
        break
      }
    }
  }

  return re
}
class Fenwick {
  constructor(n) {
    this.sums = new Array(n + 1).fill(0)
  }

  update(i, delta) {
    while (i < this.sums.length) {
      this.sums[i] += delta
      i += i & -i
    }
  }

  query(i) {
    let sum = 0
    while (i > 0) {
      sum += this.sums[i]
      i -= i & -i
    }
    return sum
  }
}
