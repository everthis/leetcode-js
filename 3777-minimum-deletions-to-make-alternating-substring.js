/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {number[]}
 */
var minDeletions = function(s, queries) {
  const A = 'A'.charCodeAt(0)
  const arr = s.split('').map(e => e.charCodeAt(0) - A)
  const n = s.length
  const bit = new FenwickTree(n)

  for(let i = 0; i < n - 1; i++) {
    if(arr[i] === arr[i + 1]) bit.update(i + 1, 1)
  }

  const res = []

  for(const q of queries) {
    if(q[0] === 1) {
      let idx = q[1]
      arr[idx] ^= 1
      if(idx > 0) {
        bit.update(idx, arr[idx] === arr[idx - 1] ? 1 : -1)
      }
      if(idx < n - 1) {
        bit.update(idx + 1, arr[idx] === arr[idx + 1] ? 1 : -1)
      }
    } else {
      res.push(bit.query(q[2]) - bit.query(q[1]))
    }
  }
// console.log(arr)
  return res
};

const lowBit = (x) => x & -x
class FenwickTree {
  constructor(n) {
    if (n < 1) return
    this.sum = Array(n + 1).fill(0)
  }
  update(i, delta) {
    if (i < 1) return
    while (i < this.sum.length) {
      this.sum[i] += delta
      i += lowBit(i)
    }
  }
  query(i) {
    if (i < 1) return 0
    let sum = 0
    while (i > 0) {
      sum += this.sum[i]
      i -= lowBit(i)
    }
    return sum
  }
}
