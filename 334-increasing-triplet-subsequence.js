/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function(nums) {
    // start with two largest values, as soon as we find a number bigger than both, while both have been updated, return true.
    let small = Number.MAX_VALUE, big = Number.MAX_VALUE;
    for (let n of nums) {
        if (n <= small) { small = n; } // update small if n is smaller than both
        else if (n <= big) { big = n; } // update big only if greater than small but smaller than big
        else return true; // return if you find a number bigger than both
    }
    return false;
};

// another

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function(nums) {
  const n = nums.length, stk = []
  for(let e of nums) {
    let l = 0, r = stk.length
    while(l < r) {
      const mid = l + Math.floor((r - l) / 2)
      if (e > stk[mid]) l = mid + 1
      else r = mid 
    }

    stk[l] = e
    if(stk.length > 2) return true
  }

  return false
};
