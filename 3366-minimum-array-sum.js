/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} op1
 * @param {number} op2
 * @return {number}
 */
var minArraySum = function(nums, k, op1, op2) {
  let dp = Array.from({ length: op1 + 1 }, () => Array(op2 + 1).fill(Infinity))
  const {min, floor, ceil} = Math
  
  dp[op1][op2] = 0

  for(const e of nums) {
    const nxt = Array.from({ length: op1 + 1 }, () => Array(op2 + 1).fill(Infinity))
    for(let i = 0; i <= op1; i++) {
        for(let j = 0; j <= op2; j++) {
            nxt[i][j] = min(nxt[i][j], dp[i][j] + e)
            if(i > 0) {
                const cur = ceil(e / 2)
                nxt[i - 1][j] = min(nxt[i - 1][j], dp[i][j] + cur)
                if(cur >= k && j > 0) {
                    nxt[i - 1][j - 1] = min(nxt[i - 1][j - 1], dp[i][j] + cur - k)
                }
            }
            if(j > 0 && e >= k) {
                const cur = e - k
                nxt[i][j - 1] = min(nxt[i][j - 1], dp[i][j] + cur)
                if(i > 0) {
                    nxt[i - 1][j - 1] = min(nxt[i - 1][j - 1], dp[i][j] + ceil(cur / 2))
                }
            }
        }
    }

    dp = nxt
  }
   
  let res = Infinity
  for(let i = 0; i <= op1; i++) {
    for(let j = 0; j <= op2; j++) {
        res = Math.min(res, dp[i][j])
    }
  }

  return res
};

// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} op1
 * @param {number} op2
 * @return {number}
 */
var minArraySum = function(nums, k, op1, op2) {
    const n = nums.length;
    const cache = new Map();

    function dp(idx, left1, left2) {
        if (idx === n) {
            return 0;
        }
        const key = `${idx},${left1},${left2}`;
        if (cache.has(key)) {
            return cache.get(key);
        }

        let ret = nums[idx] + dp(idx + 1, left1, left2);
        if (left1 && left2) {
            if (nums[idx] >= k) {
                ret = Math.min(ret, Math.floor((nums[idx] - k + 1) / 2) + dp(idx + 1, left1 - 1, left2 - 1));
            }
            if (Math.floor((nums[idx] + 1) / 2) >= k) {
                ret = Math.min(ret, Math.floor((nums[idx] + 1) / 2) - k + dp(idx + 1, left1 - 1, left2 - 1));
            }
        }
        if (left1) {
            ret = Math.min(ret, Math.floor((nums[idx] + 1) / 2) + dp(idx + 1, left1 - 1, left2));
        }
        if (left2 && nums[idx] >= k) {
            ret = Math.min(ret, nums[idx] - k + dp(idx + 1, left1, left2 - 1));
        }

        cache.set(key, ret);
        return ret;
    }

    return dp(0, op1, op2);
};
