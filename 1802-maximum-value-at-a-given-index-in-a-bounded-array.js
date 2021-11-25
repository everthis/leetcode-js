/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
const maxValue = function(n, index, maxSum) {
  const { floor, sqrt } = Math
  maxSum -= n
  if(index < Math.floor(n / 2)) index = n - 1 - index
  let left = index // number of element to the left of the index
  let right = n - 1 - index // number of element to the right of the index
  // the triangle area for the left side if not hitting the boundary
  let leftSum = floor((left * (left + 1)) / 2)
  // the triangle area for the right side if not hitting the boundary
  let rightSum = floor((right * (right + 1)) / 2)
  // case: perfect pyramid
  if (maxSum <= (rightSum * 2 + right + 1)) return floor(sqrt(maxSum) + 1)
  // case: right side hits the boundary
  if (maxSum <= (leftSum + rightSum + (left - right) * right + left + 1)) {
    const b = 3 + 2 * right
    return floor((-b + sqrt(b * b - 8 * (rightSum + 1 - right * right - maxSum))) / 2) + 1 + 1
  }
  // case: both sides hit boundaries
  maxSum -= (leftSum + rightSum + (left - right) * right + left + 1)
  return left + 1 + 1 + floor(maxSum / n)
};

// another

/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
const maxValue = function (n, index, maxSum) {
  let ret = 0
  const { max } = Math
  for (let i = 30; i >= 0; i--) {
    const tmp = ret + (1 << i)
    const L = max(0, tmp - index)
    let sum = ((L + tmp) * (tmp - L + 1)) / 2
    const R = max(0, tmp - (n - 1 - index))
    sum += ((R + tmp) * (tmp - R + 1)) / 2 - tmp

    if (sum <= maxSum - n) ret += 1 << i
  }
  return ret + 1
}
