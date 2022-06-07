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
