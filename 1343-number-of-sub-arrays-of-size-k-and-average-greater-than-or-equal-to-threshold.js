/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
const numOfSubarrays = function(arr, k, threshold) {
  const n = arr.length
  const pre = Array(n).fill(0)
  pre[0] = arr[0]
  for(let i = 1; i < n; i++) {
    pre[i] = pre[i - 1] + arr[i]
  }
  
  let res = 0
  if(pre[k - 1] / k >= threshold) res++
  for(let i = k; i < n; i++) {
    if(pre[i] - pre[i - k] >= k * threshold) res++
  }
  return res
};
