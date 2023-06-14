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

/**
 * @param {number[]} nums
 * @return {number}
 */
const subarraysWithMoreZerosThanOnes = function(nums) {
  const n = nums.length, mod = 1e9 + 7
  const bit = new FenwickTree(2 * n + 1)
  bit.update(n + 1, 1)
  let balance = 0, res = 0
  for(const e of nums) {
    balance += (e === 1 ? 1 : -1)
    bit.update(balance + n + 1, 1)
    res = (res + bit.query(balance + n)) % mod 
  }
  
  return res
};
