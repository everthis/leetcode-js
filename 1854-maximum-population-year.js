/**
 * @param {number[][]} logs
 * @return {number}
 */
const maximumPopulation = function(logs) {
  const n = logs.length
  const arr = Array(101).fill(0)
  const base = 1950
  for(let log of logs) {
    const [start, end] = log
    arr[start - base]++
    arr[end - base]--
  }
  
  let res = 0, tmp = -Infinity
  for(let i = 1; i < 101; i++) {
    arr[i] += arr[i - 1]
  }
  for(let i = 0; i < 101; i++) {
    if(arr[i] > tmp) {
      res = i
      tmp = arr[i]
    }
  }
  return res + base
};


// another

/**
 * @param {number[][]} logs
 * @return {number}
 */
const maximumPopulation = function(logs) {
  logs.sort((a, b) => {
    if(a[0] === b[0]) return a[1] - b[1]
    return a[0] - b[0]
  })
  const arr = Array(101).fill(0)
  const bit = new FenwickTree(101)
  for(let i = 0, len = logs.length; i < len; i++) {
    const [start, end] = logs[i]
    const idx = start - 1950
    bit.update(idx + 1, 1)
  }
  for(let i = 0, len = logs.length; i < len; i++) {
    const [start, end] = logs[i]
    const idx = end - 1950
    bit.update(idx + 1, -1)
  }
  let max = 0
  for(let i = 1; i <= 101; i++) {
    max = Math.max(max, bit.query(i))
  }
  let tmp
  for(let i = 1; i <= 101; i++) {
    if(bit.query(i) === max) {
      tmp = i
      break
    }
  }
  
  return 1950 + tmp - 1
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
    if (i < 1) return
    let sum = 0
    while (i > 0) {
      sum += this.sum[i]
      i -= lowBit(i)
    }
    return sum
  }
}
