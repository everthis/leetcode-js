/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = function(n) {
  if (n === 0) {
    return [0]
  }
  const temp = grayCode(n - 1)
  const nums = [].concat(temp)
  const addNum = 1 << (n - 1)
  for (let i = temp.length - 1; i >= 0; i--) {
    nums.push(addNum + temp[i])
  }
  return nums
}

// another

/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = function(n) {
  const arr = []
  arr.push(0)
  for (let i = 0; i < n; i++) {
    let inc = 1 << i
    for (let j = arr.length - 1; j >= 0; j--) {
      arr.push(arr[j] + inc)
    }
  }
  return arr
}

// another

/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = function(n) {
  return n
    ? (x => [...x, ...x.map((v, i) => x[x.length - 1 - i] + x.length)])(
        grayCode(n - 1)
      )
    : [0]
}
