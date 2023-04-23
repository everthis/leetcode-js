/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
  let n = nums.length;

  let ones = cntOnes();
  if (ones) return n - ones;

  for (let r = 2; r <= n; r++) {
    for (let i = 0; i + r <= n; i++) {
      let g = 0;
      for (let j = i; j < i + r; j++) g = gcd(g, nums[j]);
      if (g == 1) return r - 1 + n - 1;
    }
  }

  return -1;
  
  function cntOnes() {
    let res = 0
    for(const e of nums) {
      if(e === 1) res++
    }
    return res
  }
  function gcd(a, b) {
    return b ? gcd(b, a % b) : a
  }
};
