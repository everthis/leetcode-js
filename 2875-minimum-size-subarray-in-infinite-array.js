/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const minSizeSubarray = function (nums, target) {
  const sum = nums.reduce((ac, e) => ac + e, 0)
  const remain = target % sum
  if(remain === 0) return target / sum * nums.length
  const arr = [...nums, ...nums]
  const map = new Map()
  const n = arr.length
  let r = Infinity
  for(let i = 0, cur = 0; i < n; i++) {
    const e = arr[i]
    cur += e
    // const tmp = cur % target
    if(map.has(cur - remain)) r = Math.min(r, i - map.get(cur-remain))
    map.set(cur, i)
  }
  if(r === Infinity) return -1
  return r + Math.floor(target / sum) * nums.length
}

// another


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var minSizeSubarray = function(nums, target) {
    let sum = 0, su = 0;
    for (const a of nums) sum += a;
    let n = nums.length, k = Math.floor(target / sum), res = n;
    target %= sum;
    if (target === 0) {
        return k * n;
    }

    let dp = new Map();
    dp.set(0, -1);

    for (let i = 0; i < 2 * n; ++i) {
        su += nums[i % n];
        if (dp.has(su - target)) {
            res = Math.min(res, i - dp.get(su - target));
        }
        dp.set(su, i);
    }

    return res < n ? res + k * n : -1;
};
