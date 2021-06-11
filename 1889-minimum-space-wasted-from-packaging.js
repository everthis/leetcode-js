/**
 * @param {number[]} packages
 * @param {number[][]} boxes
 * @return {number}
 */
const minWastedSpace = function (packages, boxes) {
  const mod = 1e9 + 7
  const n = packages.length
  packages.sort((a, b) => a - b)
  const preSum = packages.reduce(
    (acc, cur) => {
      acc.push(acc[acc.length - 1] + cur)
      return acc
    },
    [0]
  )

  const upperBound = (target) => {
    let lo = 0,
      hi = n
    while (lo < hi) {
      const mi = (lo + hi) >> 1
      const val = packages[mi]
      if (val <= target) {
        lo = mi + 1
      } else {
        hi = mi
      }
    }
    return lo
  }

  let res = Infinity
  for (const bs of boxes) {
    bs.sort((a, b) => b - a)
    if (bs[0] < packages[n - 1]) continue
    let wastes = bs[0] * n - preSum[n]
    let last = bs[0]
    for (let i = 1; i < bs.length; i++) {
      const b = bs[i]
      const j = upperBound(b)
      if (j <= 0) {
        break
      }
      wastes -= (last - b) * j
      last = b
    }
    res = Math.min(res, wastes)
  }
  return res === Infinity ? -1 : res % mod
}

// another

/**
 * @param {number[]} packages
 * @param {number[][]} boxes
 * @return {number}
 */
var minWastedSpace = function (packages, boxes) {
  packages.sort(function (a, b) {
    return a - b
  })
  let count = 0,
    b,
    wastage,
    minWastage = Number.MAX_SAFE_INTEGER,
    flag = false
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].sort(function (a, b) {
      return a - b
    })
    b = 0
    wastage = 0
    count = 0
    if (boxes[i][boxes[i].length - 1] < packages[packages.length - 1]) {
      //This supplier's largest box is smaller than our larget package, this supplier can't be used
      continue
    }
    while (count < packages.length && b < boxes[i].length) {
      if (packages[count] <= boxes[i][b]) {
        wastage += boxes[i][b] - packages[count]
        if (wastage > minWastage) {
          //Need not to porcess this supplier if wastage has already been more than minWastage
          break
        }
        count++
      } else {
        b++
      }
    }
    if (count === packages.length) {
      flag = true //We have found atleas 1 answer
      if (wastage < minWastage) {
        minWastage = wastage
      }
    }
  }
  if (flag === false) {
    return -1
  }
  return minWastage % 1000000007
}
