/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumStrength = function(nums, k) {
    const n = nums.length;
    let dp = new Array(n + 1).fill(0);
    
    for (let i = 0; i < k; i++) {
        let m = k - i;
        m = (i % 2 === 0) ? m : -m;
        const nextdp = new Array(n + 1).fill(-Infinity);
        for (let j = 1; j <= n; j++) {
            nextdp[j] = Math.max(nextdp[j-1], dp[j-1]) + nums[j-1] * m;
        }
        dp = nextdp;
        for (let j = 1; j <= n; j++) {
            dp[j] = Math.max(dp[j-1], dp[j]);
        }
    }
    return dp[n];
};


// another

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximumStrength = function(nums, k) {
  let dp = new Array(k + 1).fill(0).map(() => new Array(nums.length + 1).fill(0));

  for (let i = 1; i <= k; i++) {
    let maxSum = Number.MIN_SAFE_INTEGER / 2;
    let curr = Number.MIN_SAFE_INTEGER / 2;
    let multiplier = (i % 2 === 1) ? (k + 1 - i) : (i - 1 - k);

    for (let j = i - 1; j < nums.length; j++) {
      curr = Math.max(curr + nums[j] * multiplier, dp[i - 1][j] + nums[j] * multiplier);
      maxSum = Math.max(maxSum, curr);
      dp[i][j + 1] = maxSum;
    }
  }

  return dp[k][nums.length];
};



// another

let pre = Array(10001).fill(0);
let cur = Array(10001).fill(0);
let ps = Array(10001).fill(0);

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumStrength = function (nums, k) {
  let n = nums.length;

  ps[0] = 0;
  for (let i = 0; i < n; ++i) {
    ps[i + 1] = ps[i] + nums[i];
  }

  ++n;
  cur.fill(0, 0, n);

  for (let i = 1; i <= k; ++i) {
    let tem = pre;
    pre = cur;
    cur = tem;

    let t = 1 + k - i;
    if (!(i & 1)) t = -t;

    let m = pre[i - 1] - ps[i - 1] * t;
    cur[i] = ps[i] * t + m;
    m = Math.max(m, pre[i] - ps[i] * t);

    for (let j = i + 1; j < n; ++j) {
      cur[j] = Math.max(cur[j - 1], ps[j] * t + m);
      m = Math.max(m, pre[j] - ps[j] * t);
    }
  }

  return cur[n - 1];
};
