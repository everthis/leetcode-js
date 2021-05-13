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
