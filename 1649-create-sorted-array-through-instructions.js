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
 * @param {number[]} instructions
 * @return {number}
 */
const createSortedArray = function(instructions) {
  let res = 0, n = instructions.length, mod = 10 ** 9 + 7
  const bit = new FenwickTree(10 ** 5)
  for(let i = 0; i < n; i++) {
    res = (res + Math.min(bit.query(instructions[i] - 1), i - bit.query(instructions[i]))) % mod
    bit.update(instructions[i], 1)
  }
  return res
};

// another

/**
 * @param {number[]} instructions
 * @return {number}
 */
const createSortedArray = function (instructions) {
  const ins = instructions, n = ins.length
  let res = 0
  const mod = 1e9 + 7, { min } = Math
  const bit = new BIT(1e5)
  for(let i = 0; i < n; i++) {
    const cur = ins[i]
    res = (res + min(bit.query(cur - 1), i - bit.query(cur))) % mod
    bit.update(cur, 1)
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
