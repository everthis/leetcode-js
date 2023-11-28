class BIT {
  constructor(n) {
    this.arr = new Array(n + 1).fill(0)
  }

  update(i, v) {
    while (i < this.arr.length) {
      this.arr[i] += v
      i += i & -i
    }
  }

  prefixSum(i) {
    let res = 0
    while (i > 0) {
      res += this.arr[i]
      i -= i & -i
    }
    return res
  }

  upper_bound(v) {
    const n = Math.floor(Math.log2(this.arr.length))
    let pos = 0
    let s = 0
    for (let i = n; i >= 0; i--) {
      if (
        pos + (1 << i) < this.arr.length &&
        s + this.arr[pos + (1 << i)] <= v
      ) {
        pos += 1 << i
        s += this.arr[pos]
      }
    }
    return pos + 1
  }
}

class MKAverage {
  constructor(m, k) {
    this.m = m
    this.k = k
    this.cnt = new BIT(10 ** 5)
    this.bit = new BIT(10 ** 5)
    this.q = []
  }

  addElement(num) {
    this.q.push(num)
    this.cnt.update(num, 1)
    this.bit.update(num, num)
    if (this.q.length > this.m) {
      const x = this.q.shift()
      this.cnt.update(x, -1)
      this.bit.update(x, -x)
    }
  }

  calculateMKAverage() {
    if (this.q.length < this.m) {
      return -1
    }
    const l = this.k
    const r = this.m - this.k
    const i = this.cnt.upper_bound(l)
    const j = this.cnt.upper_bound(r)
    let ans = this.bit.prefixSum(j) - this.bit.prefixSum(i)
    ans += (this.cnt.prefixSum(i) - l) * i
    ans -= (this.cnt.prefixSum(j) - r) * j
    return Math.floor(ans / (this.m - 2 * this.k))
  }
}

// another


/**
 * @param {number} m
 * @param {number} k
 */
const MKAverage = function (m, k) {
  this.sum = 0
  this.dataBuff = []
  this.dataM = []
  this.m = m
  this.k = k
  this.count = m - k - k
}
/**
 * @param {number} num
 * @return {void}
 */
MKAverage.prototype.addElement = function (num) {
  const total = this.dataBuff.length
  this.dataBuff.push(num)
  if (total >= this.m) {
    let index = binarySearch(
      this.dataBuff,
      this.dataM,
      this.dataBuff[total - this.m]
    )
    this.dataM[index] = this.dataBuff.length - 1
    if (index === 0 || num > this.dataBuff[this.dataM[index - 1]]) {
      move2End(this.dataBuff, this.dataM, index)
    } else if (
      index === this.m - 1 ||
      num < this.dataBuff[this.dataM[index - 1]]
    ) {
      move2Start(this.dataBuff, this.dataM, index)
    }

    this.sum = 0
  } else {
    this.dataM.push(this.dataBuff.length - 1)
    move2Start(this.dataBuff, this.dataM, this.dataBuff.length - 1)
  }
}

/**
 * @return {number}
 */
MKAverage.prototype.calculateMKAverage = function () {
  if (this.dataM.length < this.m) {
    return -1
  } else {
    if (!this.sum) {
      this.sum = calcSum(this.dataBuff, this.dataM, this.k, this.count)
    }
    return Math.floor(this.sum / this.count)
  }
}

/**
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */
function binarySearch(numArr, indexArr, tar) {
  let left = 0
  let right = indexArr.length - 1

  while (left <= right) {
    let mid = (left + right) >>> 1

    if (numArr[indexArr[mid]] > tar) {
      right = mid - 1
    } else if (numArr[indexArr[mid]] < tar) {
      left = mid + 1
    } else {
      return mid
    }
  }
}
function move2Start(numArr, indexArr, index) {
  let tmp

  while (index > 0 && numArr[indexArr[index]] < numArr[indexArr[index - 1]]) {
    tmp = indexArr[index]
    indexArr[index] = indexArr[index - 1]
    indexArr[index - 1] = tmp
    index--
  }
}
function move2End(numArr, indexArr, index) {
  let tmp

  while (
    index < indexArr.length - 1 &&
    numArr[indexArr[index]] > numArr[indexArr[index + 1]]
  ) {
    tmp = indexArr[index]
    indexArr[index] = indexArr[index + 1]
    indexArr[index + 1] = tmp
    index++
  }
}

function calcSum(numArr, indexArr, start, count) {
  let sum = 0
  for (let i = 0; i < count; i++) {
    sum += numArr[indexArr[i + start]]
  }
  return sum
}
