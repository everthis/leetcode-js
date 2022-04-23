/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
const maxValue = function (n, index, maxSum) {
  maxSum -= n;
  let left = 0, right = maxSum, mid;
  while (left < right) {
    const mid = right - Math.floor((right - left) / 2);
    if (valid(mid))left = mid;
    else right = mid - 1;
  }
  return left + 1;
  
  function valid(mid) {
    let b = Math.max(mid - index, 0);
    let res = (mid + b) * (mid - b + 1) / 2;
    b = Math.max(mid - ((n - 1) - index), 0);
    res += (mid + b) * (mid - b + 1) / 2;
    return res - mid <= maxSum;
  }
}

// another


/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
const maxValue = function(n, index, maxSum) {
  let res = 1, l = index, r = index
  maxSum -= n

  while(l > 0 || r < n - 1) {
    const len = r - l + 1
    if(maxSum >= len) {
      maxSum -= len 
      res++
    } else break
    if(l > 0) l--
    if(r < n - 1) r++
  }
  res += ~~(maxSum / n)

  return res
}

// another


/**
 * @param {number} n
 * @param {number} index
 * @param {number} maxSum
 * @return {number}
 */
const maxValue = function(n, index, maxSum) {
  maxSum -= n;
  let level = 1;
  let left = index;
  let right = index;

  while (maxSum - (right - left + 1) >= 0) {
    if (left === 0 && right === n - 1) break
    maxSum -= right - left + 1;
    if (left - 1 >= 0) left--
    if (right + 1 <= n - 1) right++;
    level++;
  }

  if (maxSum) level += ~~(maxSum / n)

  return level;
}

// another


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
