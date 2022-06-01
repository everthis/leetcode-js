/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSumMinProduct = function(nums) {
  const n = nums.length, left = Array(n).fill(0), right = Array(n).fill(n - 1)
  const mod = BigInt(1e9 + 7)
  let res = 0n
  let stk = []
  for(let i = 0; i < n; i++) {
    while(stk.length && nums[stk[stk.length - 1]] >= nums[i]) {
      stk.pop()
    }
    left[i] = stk.length ? stk[stk.length - 1] + 1 : 0
    stk.push(i)
  }
  
  stk = []
  for(let i = n - 1; i >= 0; i--) {
    while(stk.length && nums[stk[stk.length - 1]] >= nums[i]) {
      stk.pop()
    }
    right[i] = stk.length ? stk[stk.length - 1] - 1 : n - 1
    stk.push(i)
  }
  
  const preSum = []
  for(let i = 0; i < n; i++) {
    preSum[i] = (i === 0 ? 0n : preSum[i - 1]) + BigInt(nums[i])
  }
  for(let i = 0; i < n; i++) {
    res = max(res, fn(nums[i], left[i], right[i]))
  }
  
  return res % mod
  
  function max(a, b) {
    return a > b ? a : b
  }
  function fn(v, l, r) {
    return BigInt(v) * (l === 0 ? preSum[r] : preSum[r] - preSum[l - 1])
  }
};

// another


/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSumMinProduct = function (nums) {
  const n = nums.length
  const mod = BigInt(10 ** 9 + 7)
  const preSum = Array(n + 1).fill(0n)
  for (let i = 0; i < n; i++) {
    preSum[i + 1] = preSum[i] + BigInt(nums[i])
  }
  const l = Array(n).fill(0) // l[i] stores index of farthest element greater or equal to nums[i]
  const r = Array(n).fill(0) // r[i] stores index of farthest element greater or equal to nums[i]
  let st = []

  for (let i = 0; i < n; i++) {
    while (st.length && nums[st[st.length - 1]] >= nums[i]) st.pop()
    if (st.length) l[i] = st[st.length - 1] + 1
    else l[i] = 0
    st.push(i)
  }
  
  st = []
  for (let i = n - 1; i >= 0; i--) {
    while (st.length && nums[st[st.length - 1]] >= nums[i]) st.pop()
    if (st.length) r[i] = st[st.length - 1] - 1
    else r[i] = n - 1
    st.push(i)
  }
  function getSum(left, right) {
    // inclusive
    return preSum[right + 1] - preSum[left]
  }

  let maxProduct = 0n
  for (let i = 0; i < n; i++) {
    maxProduct = bigint_max(maxProduct, BigInt(nums[i]) * getSum(l[i], r[i]))
  }
  return maxProduct % mod
}
function bigint_max(...args){
    if (args.length < 1){ throw 'Max of empty list'; }
    m = args[0];
    args.forEach(a=>{if (a > m) {m = a}});
    return m;
}

// another

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSumMinProduct = function(nums) {
  const n = nums.length, s1 = [], s2 = [],
    left = Array(n), right = Array(n), mod = BigInt(1e9 + 7)
  for(let i = 0; i < n; i++) {
    while(s1.length && nums[s1[s1.length - 1]] >= nums[i]) s1.pop()
    if(s1.length) left[i] = s1[s1.length - 1] + 1
    else left[i] = 0
    s1.push(i)
  }
  
  for(let i = n - 1; i >= 0; i--) {
    while(s2.length && nums[s2[s2.length - 1]] >= nums[i]) s2.pop()
    if(s2.length) right[i] = s2[s2.length - 1] - 1
    else right[i] = n - 1
    s2.push(i)
  }
  
  const preSum = Array(n)
  for(let i = 0; i < n; i++) {
    preSum[i] = (i === 0 ? 0n : preSum[i - 1]) + BigInt(nums[i])
  }
  let res = 0n
  for(let i = 0; i < n; i++) {
    res = max(res, getSum(preSum, left[i], right[i]) * BigInt(nums[i]))
  }
  return res % mod
  
};

function getSum(arr, l, r) {
  return arr[r] - (l === 0 ? 0n : arr[l - 1])
}

function max(...args) {
  let res = -Infinity
  for(let e of args) {
    if(e > res) res = e
  }
  return res
}
