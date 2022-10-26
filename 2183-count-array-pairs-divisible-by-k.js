/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const countPairs = function (nums, k) {
  const map = new Map()

  let res = 0
  for(const e of nums) {
    const tmp = gcd(e, k)

    for(const [key, v] of map) {
      if(tmp * key % k === 0) {
        res += v
      }
    }
    if(map.get(tmp) == null) map.set(tmp, 0)
    map.set(tmp, map.get(tmp) + 1)
  }

  return res

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b)
  }
}

// another


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const coutPairs = function(nums, k) {
  let res = 0;
  let cnt = Array(1e5 + 1).fill(0);
  const n = nums.length
  for (let i = 0; i < n; ++i) {
    if (nums[i] % k == 0) {
      res += i;
      ++cnt[0];
    }
    else {
      let div = gcd(k, nums[i]);
      for (let d = 0; d <= div; ++d) res += cnt[k / div * d];
      ++cnt[div];
    }   
  }
  return res;
};

function gcd(a, b) {
  if(b === 0) return a
  return gcd(b, a % b)
}
