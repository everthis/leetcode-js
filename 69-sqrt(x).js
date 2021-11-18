/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  let left = 0, right = x;
  while (left < right) {
    let mid = right - ((right - left) >> 1);
    if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid;
    }
  }
  return left;
};

// another

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  r = x;
  while (r * r > x) r = ((r + x / r) / 2) | 0;
  return r;
};

// another

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  let l = 1, r = x
  if(x === 0) return 0
  while(true) {
    let mid = l + ((r - l) >> 1)
    if(mid * mid > x) r = mid - 1
    else {
      if((mid + 1) * (mid + 1) > x) return mid
      l = mid + 1
    }
  }
};
