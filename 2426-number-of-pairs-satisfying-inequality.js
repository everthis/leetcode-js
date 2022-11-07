/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} diff
 * @return {number}
 */
const numberOfPairs = function (nums1, nums2, diff) {
  const n = nums1.length, limit = 6 * 1e4, add = 3 * 1e4
  const bit = new BIT(limit)

  let res = 0
  for(let j = 0; j < n; j++) {
    const d = nums1[j] - nums2[j] + add
    res += bit.query(d + diff)
    bit.update(d, 1)
  }

  return res
}

function lowBit(x) {
  return x & -x
}
class BIT {
  constructor(n) {
    this.arr = Array(n + 1).fill(0)
  }

  update(i, delta) {
    if(i < 1) return
    while (i < this.arr.length) {
      this.arr[i] += delta
      i += lowBit(i)
    }
  }

  query(i) {
    let res = 0
    if(i < 1) return res
    while (i > 0) {
      res += this.arr[i]
      i -= lowBit(i)
    }
    return res
  }
}
