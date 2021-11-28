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
 * @param {number} k
 * @return {number[]}
 */
const getAverages = function(nums, k) {
  const n = nums.length
  const bit = new FenwickTree(n)
  for(let i = 0; i < n; i++) {
    bit.update(i + 1, nums[i])
  }
  const res = Array(n).fill(-1)
  // console.log(bit)
  for(let i = k; i < n - k; i++) {
    const pre = bit.query(i + 1 - k - 1), cur = bit.query(i + 1 + k)
    res[i] = ~~((cur - pre) / (k * 2 + 1))
  }
  
  return res
};
