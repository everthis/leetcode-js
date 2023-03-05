/**
 * @param {number[]} nums
 * @return {number}
 */
var findValidSplit = function(nums) {
  let n = nums.length, right = {};
  for (let i = 0; i < n; i++) {
    let primeFactorsCount = getPrimeFactors(nums[i]);
    for (let prime in primeFactorsCount) {
      let count = primeFactorsCount[prime];
      right[prime] = (right[prime] || 0) + count;
    }
  }
  let left = {}, common = new Set();
  for (let i = 0; i <= n - 2; i++) {
    let primesFactorsCount = getPrimeFactors(nums[i]);
    for (let prime in primesFactorsCount) {
      let count = primesFactorsCount[prime];
      left[prime] = (left[prime] || 0) + count;
      right[prime] -= count;
      if (right[prime] > 0) common.add(prime);
      else if (right[prime] === 0) common.delete(prime);
    }
    if (common.size === 0) return i;
  }
  return -1;
};

function getPrimeFactors(n) {
  let counts = {};
  for (let x = 2; (x * x) <= n; x++) {
    while (n % x === 0) {
      counts[x] = (counts[x] || 0) + 1;
      n /= x;
    }
  }
  if (n > 1) counts[n] = (counts[n] || 0) + 1;
  return counts;
}
