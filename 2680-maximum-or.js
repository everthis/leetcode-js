/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumOr = function(nums, k) {
  let res = 0n
  const n = nums.length, pre = Array(n).fill(0), suf = Array(n).fill(0)
  pre[0] = nums[0]
  suf[n - 1] = nums.at(-1)
  for(let i = 1; i < n; i++) {
    const e = nums[i]
    pre[i] = pre[i - 1] | e
    suf[n - 1 - i] = suf[n - i] | nums[n - 1 - i]
  }

  k = bi(k)
  for(let i = 0; i < n; i++) {
    const e = bi(nums[i])
    let tmp = e << k
    if(i - 1 >= 0) tmp |= bi(pre[i - 1])
    if(i + 1 < n) tmp |= bi(suf[i + 1])

    res = max(res, tmp)
  }

  return Number(res)
};
function bi(num) {
  return BigInt(num)
}
function max(a, b) {
  return a > b ? a : b
}

// another


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumOr = function(nums, k) {
  let base = 0n, backup = 0n, best = 0n;
  k = BigInt(k)
  for (let num of nums) {
    num = BigInt(num)
    backup |= base & num;
    base |= num;
  }
  for (let num of nums) {
    num = BigInt(num)
    best = max(best, base - num | backup | num << k);
  }
  return Number(best);    
};

function max(a, b) {
  return a > b ? a : b
}
