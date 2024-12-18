/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    const n = nums.length;
    const prefix = new Array(n).fill(0);
    for(let i = 0; i < n; i++) {
        prefix[i] = (prefix[i - 1] || 0) + nums[i];
    }
    const count = new Array(k + 1).fill(0);
    count[0] = 1;
    let res = 0
    for(let i = 0; i < n; i++) {
        const remain = ((prefix[i] % k) + k) % k
        res += count[remain];
        count[remain]++;
    }
    return res
};

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysDivByK = function (nums, k) {
  const memo = {0: 1}
  let sum = 0, res = 0
  for(const e of nums) {
    sum += e
    const remain = ( sum % k + k) % k
    res += memo[remain] ?? 0
    memo[remain] = (memo[remain] ?? 0) + 1 
  }
  return res
}

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysDivByK = function(nums, k) {
  const memo = {0: 1}
  let sum = 0, res = 0
  for(const e of nums) {
    sum += e
    const remain = (k - (sum % k)) % k
    res += memo[remain] ?? 0
    memo[remain] = (memo[remain] ?? 0) + 1 
  }
  return res
};
